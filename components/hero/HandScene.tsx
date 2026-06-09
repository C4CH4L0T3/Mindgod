/**
 * HandScene — the protagonist of the scroll story.
 *
 * One SVG, three anatomies of the same hand, superimposed:
 *   1. `organic`  — hairline line-art of a human hand (contour + creases)
 *   2. `vision`   — how a machine sees it: 21 landmark nodes + skeletal mesh
 *   3. `machine`  — robotic armature: bone plates, joint rings, palm core
 *   4. `chips`    — technology emerging from the fingertips at the end
 *
 * All geometry is deterministic (SSR-safe). GSAP drives every transition
 * from Hero.tsx via the class/id hooks rendered here.
 */

type Pt = readonly [number, number];

/* 21 hand landmarks — same topology machine vision uses (wrist, then 4 per finger) */
export const LM: Pt[] = [
  [300, 690], // 0  wrist
  [238, 612], // 1  thumb cmc
  [180, 538], // 2  thumb mcp
  [138, 472], // 3  thumb ip
  [106, 412], // 4  thumb tip
  [228, 422], // 5  index mcp
  [212, 330], // 6
  [202, 262], // 7
  [196, 204], // 8  index tip
  [290, 406], // 9  middle mcp
  [284, 304], // 10
  [280, 230], // 11
  [277, 166], // 12 middle tip
  [350, 414], // 13 ring mcp
  [354, 318], // 14
  [357, 248], // 15
  [359, 188], // 16 ring tip
  [404, 442], // 17 pinky mcp
  [414, 372], // 18
  [421, 318], // 19
  [426, 272], // 20 pinky tip
];

const BONES: ReadonlyArray<readonly [number, number]> = [
  [0, 1], [1, 2], [2, 3], [3, 4],
  [0, 5], [5, 6], [6, 7], [7, 8],
  [5, 9], [9, 10], [10, 11], [11, 12],
  [9, 13], [13, 14], [14, 15], [15, 16],
  [13, 17], [17, 18], [18, 19], [19, 20],
  [0, 17],
];

/* extra triangulation edges for the mesh stage */
const MESH_EXTRA: ReadonlyArray<readonly [number, number]> = [
  [1, 5], [2, 5], [2, 6],
  [5, 10], [6, 10], [7, 11],
  [9, 14], [10, 14], [11, 15],
  [13, 18], [14, 18], [15, 19],
];

/* finger-bone plate widths for the machine armature (palm struts stay thin) */
const PLATED: ReadonlyArray<readonly [number, number, number]> = [
  [1, 2, 14], [2, 3, 12], [3, 4, 10],
  [5, 6, 13], [6, 7, 11], [7, 8, 9],
  [9, 10, 13], [10, 11, 11], [11, 12, 9],
  [13, 14, 12], [14, 15, 10], [15, 16, 9],
  [17, 18, 10], [18, 19, 9], [19, 20, 8],
];

const JOINT_R: Record<number, number> = {
  0: 13,
  1: 8, 2: 7, 3: 6, 4: 7.5,
  5: 8, 6: 6.5, 7: 5.5, 8: 7.5,
  9: 8, 10: 6.5, 11: 5.5, 12: 7.5,
  13: 8, 14: 6.5, 15: 5.5, 16: 7.5,
  17: 8, 18: 6, 19: 5, 20: 7,
};

const f = (n: number) => Math.round(n * 10) / 10;

function seg([x1, y1]: Pt, [x2, y2]: Pt) {
  return `M ${f(x1)} ${f(y1)} L ${f(x2)} ${f(y2)}`;
}

/* rounded armor plate between two joints, inset so the rings stay visible */
function plate(p1: Pt, p2: Pt, w: number) {
  const dx = p2[0] - p1[0];
  const dy = p2[1] - p1[1];
  const len = Math.hypot(dx, dy);
  const ux = dx / len;
  const uy = dy / len;
  const nx = -uy;
  const ny = ux;
  const inset = Math.min(len * 0.32, 16);
  const ax = p1[0] + ux * inset;
  const ay = p1[1] + uy * inset;
  const bx = p2[0] - ux * inset;
  const by = p2[1] - uy * inset;
  return [
    `M ${f(ax + nx * w)} ${f(ay + ny * w)}`,
    `L ${f(bx + nx * w)} ${f(by + ny * w)}`,
    `A ${f(w)} ${f(w)} 0 0 0 ${f(bx - nx * w)} ${f(by - ny * w)}`,
    `L ${f(ax - nx * w)} ${f(ay - ny * w)}`,
    `A ${f(w)} ${f(w)} 0 0 0 ${f(ax + nx * w)} ${f(ay + ny * w)}`,
    "Z",
  ].join(" ");
}

/* ————— human contour: open palm, hairline stroke ————— */
const OUTLINE = `
  M 252 712
  C 248 690 247 668 244 640
  C 240 618 232 600 218 582
  C 196 554 170 522 142 482
  C 124 456 104 430 96 412
  C 88 396 92 384 102 378
  C 114 372 126 380 134 394
  C 150 420 166 446 180 470
  C 188 482 197 489 204 492
  C 205 472 204 452 204 432
  C 196 360 188 270 177 201
  C 174 186 182 178 193 178
  C 204 178 214 190 215 206
  C 226 280 240 370 250 428
  C 254 442 258 448 261 446
  C 260 380 258 250 257 165
  C 257 150 264 142 276 142
  C 288 142 296 152 297 167
  C 302 250 308 340 314 408
  C 318 432 322 444 326 442
  C 330 360 336 250 341 189
  C 343 172 350 166 359 167
  C 369 168 376 176 377 188
  C 376 260 375 340 373 412
  C 374 440 377 456 381 458
  C 390 400 400 330 410 274
  C 413 260 419 252 427 253
  C 436 254 441 262 441 271
  C 437 330 430 390 425 437
  C 437 470 443 520 436 575
  C 430 615 416 640 396 658
  C 384 668 372 676 364 682
  L 362 712
`;

const CREASES = [
  "M 218 500 C 240 540 268 580 292 640", // life line
  "M 220 470 C 270 450 330 452 392 470", // heart line
  "M 224 492 C 270 500 330 508 380 528", // head line
  "M 196 268 Q 206 274 216 270", // index pip
  "M 272 238 Q 282 244 292 240", // middle pip
  "M 348 254 Q 358 260 368 256", // ring pip
  "M 410 322 Q 418 327 426 323", // pinky pip
  "M 146 470 Q 156 480 168 478", // thumb ip
];

/* palm circuit traces: core → each knuckle + wrist */
const CORE: Pt = [300, 535];
const CIRCUITS = [5, 9, 13, 17, 0].map((i) => seg(CORE, LM[i]));

/* ————— emerging technology ————— */
export const CHIPS = [
  { id: "react", label: "React", from: 8, to: [-20, 240] as const },
  { id: "ts", label: "TypeScript", from: 4, to: [-48, 410] as const },
  { id: "tailwind", label: "Tailwind", from: 4, to: [-20, 575] as const },
  { id: "next", label: "Next.js", from: 12, to: [620, 240] as const },
  { id: "ia", label: "IA aplicada", from: 16, to: [648, 410] as const },
  { id: "node", label: "Node.js", from: 20, to: [620, 575] as const },
];

function Glyph({ id }: { id: string }) {
  switch (id) {
    case "react":
      return (
        <g stroke="#111111" strokeWidth="1.4" fill="none" opacity="0.92">
          <ellipse rx="14" ry="5.5" />
          <ellipse rx="14" ry="5.5" transform="rotate(60)" />
          <ellipse rx="14" ry="5.5" transform="rotate(120)" />
          <circle r="2.4" fill="#111111" stroke="none" />
        </g>
      );
    case "ts":
      return (
        <g>
          <rect x="-11" y="-11" width="22" height="22" rx="4" fill="#111111" opacity="0.92" />
          <text
            y="4.5"
            textAnchor="middle"
            fontSize="11"
            fontWeight="700"
            fill="#fafaf8"
            fontFamily="var(--font-sans)"
          >
            TS
          </text>
        </g>
      );
    case "tailwind":
      return (
        <g transform="translate(-12,-12)" fill="#111111" opacity="0.92">
          <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.47 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.47 12 7 12z" />
        </g>
      );
    case "next":
      return (
        <g>
          <circle r="14" fill="none" stroke="#111111" strokeWidth="1.4" opacity="0.92" />
          <text
            y="5.5"
            textAnchor="middle"
            fontSize="15"
            fontWeight="700"
            fill="#111111"
            fontFamily="var(--font-sans)"
          >
            N
          </text>
        </g>
      );
    case "node":
      return (
        <path
          d="M 0 -13 L 11.3 -6.5 L 11.3 6.5 L 0 13 L -11.3 6.5 L -11.3 -6.5 Z"
          fill="none"
          stroke="#111111"
          strokeWidth="1.4"
          opacity="0.92"
        />
      );
    case "ia":
      return (
        <g>
          <circle r="17" fill="none" stroke="#0a0a0a" strokeWidth="1" strokeDasharray="3 4" />
          <text
            y="5.5"
            textAnchor="middle"
            fontSize="14"
            fontWeight="700"
            fill="#0a0a0a"
            fontFamily="var(--font-sans)"
            letterSpacing="1"
          >
            IA
          </text>
        </g>
      );
    default:
      return null;
  }
}

export default function HandScene() {
  return (
    <svg
      viewBox="-110 60 820 700"
      className="hand-svg h-full w-auto max-w-[94vw]"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        {/* the wrist dissolves instead of ending */}
        <linearGradient id="wrist-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0.82" stopColor="#fff" stopOpacity="1" />
          <stop offset="0.97" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <mask id="hand-mask">
          <rect x="-110" y="60" width="820" height="700" fill="url(#wrist-fade)" />
        </mask>
      </defs>

      <g mask="url(#hand-mask)">
        {/* 1 — HUMAN: hairline contour + creases */}
        <g id="organic" stroke="#111111" strokeWidth="1.5" strokeLinecap="round">
          <path className="dr" d={OUTLINE} />
          {CREASES.map((d, i) => (
            <path key={i} className="dr" d={d} strokeWidth="1" opacity="0.55" />
          ))}
        </g>

        {/* scan line that digitizes the hand */}
        <g id="scan" opacity="0">
          <line x1="60" y1="0" x2="540" y2="0" stroke="#0a0a0a" strokeWidth="1" opacity="0.8" />
          <line x1="48" y1="0" x2="56" y2="0" stroke="#0a0a0a" strokeWidth="2" />
          <line x1="544" y1="0" x2="552" y2="0" stroke="#0a0a0a" strokeWidth="2" />
        </g>

        {/* 2 — VISION: 21 landmarks + skeletal mesh */}
        <g id="vision">
          <g id="mesh-extra" stroke="#111111" strokeWidth="0.6" opacity="0">
            {MESH_EXTRA.map(([a, b], i) => (
              <path key={i} d={seg(LM[a], LM[b])} />
            ))}
          </g>
          <g id="bones" stroke="#111111" strokeWidth="1" opacity="0.9">
            {BONES.map(([a, b], i) => (
              <path key={i} className="dr bone" d={seg(LM[a], LM[b])} />
            ))}
          </g>
          <g id="nodes">
            {LM.map(([x, y], i) => (
              <circle key={i} className="lm" cx={x} cy={y} r="0" fill="#0a0a0a" />
            ))}
          </g>
        </g>

        {/* 3 — MACHINE: armor plates, joint rings, core, circuits */}
        <g id="machine">
          <g id="plates" stroke="#111111" strokeWidth="1.1" fill="rgba(0,0,0,0.025)">
            {PLATED.map(([a, b, w], i) => (
              <path key={i} className="dr plate" d={plate(LM[a], LM[b], w)} />
            ))}
            {/* palm chassis */}
            <path
              className="dr plate"
              d="M 254 648 L 230 446 L 288 424 L 348 432 L 396 456 L 360 648 Z"
              strokeLinejoin="round"
            />
          </g>
          <g id="rings" stroke="#111111" strokeWidth="1.1">
            {LM.map(([x, y], i) => (
              <circle key={i} className="ring" cx={x} cy={y} r={JOINT_R[i]} opacity="0" />
            ))}
          </g>
          <g id="circuits" stroke="#0a0a0a" strokeWidth="0.7" opacity="0.55">
            {CIRCUITS.map((d, i) => (
              <path key={i} className="dr" d={d} />
            ))}
          </g>
          <g id="core">
            <circle className="core-ring" cx={CORE[0]} cy={CORE[1]} r="27" stroke="#0a0a0a" strokeWidth="1" opacity="0" />
            <circle className="core-ring" cx={CORE[0]} cy={CORE[1]} r="17" stroke="#111111" strokeWidth="1" opacity="0" />
            <circle id="core-dot" cx={CORE[0]} cy={CORE[1]} r="4" fill="#0a0a0a" opacity="0" />
          </g>
        </g>
      </g>

      {/* 4 — EMERGENCE: technology leaves the hand */}
      <g id="emergence">
        {CHIPS.map((c) => (
          <g key={c.id}>
            <path
              className={`dr chip-link link-${c.id}`}
              d={seg(LM[c.from], c.to)}
              stroke="#111111"
              strokeWidth="0.6"
              opacity="0.18"
            />
            <g className={`chip chip-${c.id}`} transform={`translate(${c.to[0]}, ${c.to[1]})`}>
              <circle r="30" fill="#ffffff" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
              <Glyph id={c.id} />
              <text
                y="52"
                textAnchor="middle"
                fontSize="10"
                fill="#6e6e66"
                fontFamily="var(--font-mono)"
                letterSpacing="1.5"
              >
                {c.label.toUpperCase()}
              </text>
            </g>
          </g>
        ))}
      </g>
    </svg>
  );
}
