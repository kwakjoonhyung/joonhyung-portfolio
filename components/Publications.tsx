"use client";

import { publications } from "@/lib/data";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { FileText } from "lucide-react";

export default function Publications() {
  return (
    <section
      id="publications"
      className="relative py-24 md:py-32 px-6 md:px-10 bg-surface/30"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          number="04"
          title="Publications"
          subtitle="Peer-reviewed and conference output."
        />

        <div className="space-y-4">
          {publications.map((pub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group flex gap-5 p-6 border border-line rounded-lg hover:border-accent/40 transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-bg border border-line flex items-center justify-center">
                  <FileText size={18} className="text-accent" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-mono text-xs tracking-wider text-muted mb-1">
                  {pub.authors} · {pub.year}
                </div>
                <h3 className="font-display text-lg md:text-xl tracking-tight leading-snug text-balance">
                  {pub.title}
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
                  <span className="text-accent">{pub.venue}</span>
                  <span className="text-muted">·</span>
                  <span className="text-muted">{pub.type}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/*
          📌 NOTE: Add more publications here as they come in.
          Edit /lib/data.ts — the `publications` array.

          💡 SUGGESTION: Once your M.S. thesis is finalized or
          any in-submission papers hit arXiv, list them here with
          a "(Under Review)" or "(In Preparation)" tag — that's
          standard and strengthens the section even before acceptance.
        */}
      </div>
    </section>
  );
}
