"use client";

import React from "react";
import { motion } from "motion/react";

export interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

const ACCENTS = ["#7c3aed", "#ec4899", "#f97316"];

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => {
                const accent = ACCENTS[i % ACCENTS.length];
                return (
                  <div
                    className="hover-lift w-full max-w-xs rounded-2xl border border-black/10 bg-paper p-8 shadow-lg shadow-black/5"
                    style={{ borderTop: `3px solid ${accent}` }}
                    key={i}
                  >
                    <div className="text-[14px] leading-relaxed text-ink">
                      {text}
                    </div>
                    <div className="mt-5 flex items-center gap-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={name}
                        loading="lazy"
                        className="h-10 w-10 rounded-full ring-2 ring-offset-2 ring-offset-paper"
                        style={{ "--tw-ring-color": `${accent}66` } as React.CSSProperties}
                      />
                      <div className="flex flex-col">
                        <div className="text-sm font-medium leading-5 tracking-tight text-ink">
                          {name}
                        </div>
                        <div className="text-[13px] leading-5 tracking-tight text-stone">
                          {role}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
