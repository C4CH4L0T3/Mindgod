"use client";

import { useEffect, useRef } from "react";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260417_061226_74f0749c-a22d-42b3-895e-5d6203bc741c.mp4";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Ping-pong playback: play forward, then crawl currentTime back to 0 with
  // rAF (browsers don't support negative playbackRate), then play again.
  // Playback starts from JS because React doesn't always serialize `muted`
  // into SSR markup, and browsers block autoplay on unmuted video.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    video.muted = true;

    let rafId = 0;
    let lastTick = 0;

    const playForward = () => {
      video.play().catch(() => {});
    };

    const stepBackward = (now: number) => {
      const elapsed = (now - lastTick) / 1000;
      lastTick = now;

      const next = video.currentTime - elapsed;
      if (next <= 0) {
        video.currentTime = 0;
        playForward();
        return;
      }
      video.currentTime = next;
      rafId = requestAnimationFrame(stepBackward);
    };

    const onEnded = () => {
      lastTick = performance.now();
      rafId = requestAnimationFrame(stepBackward);
    };

    video.addEventListener("ended", onEnded);
    playForward();

    return () => {
      video.removeEventListener("ended", onEnded);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="h-full w-full object-cover"
      />
      {/* paper veil so the ink typography stays readable over the footage */}
      <div className="absolute inset-0 bg-paper/40" />
      {/* dissolve into the page background before the next section */}
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent to-paper" />
    </div>
  );
}
