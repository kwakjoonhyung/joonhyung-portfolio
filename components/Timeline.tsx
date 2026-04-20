"use client";

import { timeline } from "@/lib/data";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative py-24 md:py-32 px-6 md:px-10 bg-surface/30"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="02"
          title="Career"
          subtitle="From ICE signal preprocessing at a hospital lab to LLM serving at scale — the throughline is making research systems actually ship."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-[120px] top-0 bottom-0 w-px bg-line" />

          <div className="space-y-16 md:space-y-20">
            {timeline.map((block, bi) => (
              <motion.div
                key={bi}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {/* Year label */}
                <div className="absolute left-0 md:left-0 -top-1 md:w-[100px] flex md:block items-center gap-3 md:gap-0">
                  <div className="font-display text-accent text-2xl md:text-3xl tracking-tight hidden md:block">
                    {block.year}
                  </div>
                </div>

                {/* Dot on timeline */}
                <div className="absolute left-4 md:left-[120px] top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent ring-4 ring-bg" />

                <div className="pl-12 md:pl-[170px]">
                  {/* Mobile year */}
                  <div className="md:hidden font-display text-accent text-2xl tracking-tight mb-4">
                    {block.year}
                  </div>

                  <div className="space-y-6">
                    {block.items.map((item, i) => (
                      <div
                        key={i}
                        className="group border border-line rounded-lg p-6 md:p-7 hover:border-accent/40 transition-colors bg-bg/50"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                          <div className="font-mono text-[11px] tracking-widest uppercase text-muted">
                            {item.period}
                          </div>
                          <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-1 rounded-full border border-accent/30 text-accent">
                            {item.tag}
                          </span>
                        </div>
                        <h3 className="font-display text-xl md:text-2xl tracking-tight mb-1">
                          {item.title}
                        </h3>
                        <div className="text-sm text-accent/80 mb-3">
                          {item.org}
                        </div>
                        <p className="text-sm text-muted leading-relaxed text-pretty">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
