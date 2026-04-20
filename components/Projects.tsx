"use client";

import { projects } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

// Light markdown
function renderBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith("**") && p.endsWith("**") ? (
      <strong key={i} className="text-ink font-medium">
        {p.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{p}</span>
    )
  );
}

function StarBlock({
  label,
  letter,
  children,
}: {
  label: string;
  letter: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid md:grid-cols-[120px_1fr] gap-3 md:gap-6 py-5 border-t border-line first:border-t-0">
      <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-2">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-accent/40 font-display text-accent text-lg">
          {letter}
        </div>
        <div className="font-mono text-[11px] tracking-widest uppercase text-muted">
          {label}
        </div>
      </div>
      <div className="text-sm md:text-[15px] text-ink/85 leading-relaxed text-pretty">
        {children}
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const [open, setOpen] = useState(index === 0); // first project open by default

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="border border-line rounded-xl overflow-hidden bg-bg hover:border-accent/40 transition-colors"
    >
      {/* Header — always visible */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-6 md:p-8 focus:outline-none focus:ring-2 focus:ring-accent/40"
      >
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div className="font-mono text-[11px] tracking-widest uppercase text-accent">
            {project.year}
          </div>
          <div className="flex items-center gap-2 text-muted">
            <span className="text-xs font-mono tracking-wider">
              {open ? "COLLAPSE" : "EXPAND"}
            </span>
            {open ? (
              <ChevronDown size={18} className="transition-transform" />
            ) : (
              <ChevronRight size={18} className="transition-transform" />
            )}
          </div>
        </div>

        <h3 className="font-display text-2xl md:text-3xl tracking-tight leading-tight text-balance">
          {project.title}
        </h3>
        <div className="mt-2 text-sm md:text-base text-accent/80">
          {project.subtitle}
        </div>

        {/* Highlight callout */}
        <div className="mt-4 inline-flex items-center gap-2 text-sm text-ink/90">
          <span className="text-accent">✦</span>
          <span>{project.highlight}</span>
        </div>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full bg-surface border border-line text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </button>

      {/* Expanded — STAR details */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-8 pt-2 border-t border-line">
              {/*
                📸 OPTIONAL IMAGE:
                Per-project screenshot/diagram can go here.
                Place at /public/images/projects/{id}.png and uncomment.
              */}
              {/* <div className="aspect-[16/9] bg-surface border border-line rounded-lg mb-6 flex items-center justify-center">
                <div className="font-mono text-xs text-muted">
                  [ PROJECT IMAGE: /public/images/projects/{project.id}.png ]
                </div>
              </div> */}

              <StarBlock label="Situation" letter="S">
                <p>{renderBold(project.star.situation)}</p>
              </StarBlock>

              <StarBlock label="Task" letter="T">
                <p>{renderBold(project.star.task)}</p>
              </StarBlock>

              <StarBlock label="Action" letter="A">
                <ul className="space-y-2.5">
                  {project.star.action.map((a, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-accent flex-shrink-0 mt-1">▸</span>
                      <span>{renderBold(a)}</span>
                    </li>
                  ))}
                </ul>
              </StarBlock>

              <StarBlock label="Result" letter="R">
                <ul className="space-y-2.5">
                  {project.star.result.map((r, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-accent flex-shrink-0 mt-1">✓</span>
                      <span>{renderBold(r)}</span>
                    </li>
                  ))}
                </ul>
              </StarBlock>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          number="03"
          title="Selected Projects"
          subtitle="Each project documented with the STAR framework — Situation, Task, Action, Result — so the why, the how, and the measurable outcome are all on the page."
        />

        <div className="space-y-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
