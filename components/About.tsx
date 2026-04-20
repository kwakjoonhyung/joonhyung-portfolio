"use client";

import { about } from "@/lib/data";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

// Very light markdown: replace **bold** → <strong>
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

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="01"
          title="About"
          subtitle="Research that runs. Numbers with confidence intervals. Pipelines that finish overnight, not next week."
        />

        <div className="grid md:grid-cols-12 gap-12">
          {/* Bio */}
          <div className="md:col-span-7 space-y-6">
            {about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-lg text-ink/80 leading-relaxed text-pretty"
              >
                {renderBold(p)}
              </motion.p>
            ))}
          </div>

          {/* Pull quote */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
              className="sticky top-32 border-l-2 border-accent pl-6"
            >
              <div className="font-display italic text-xl md:text-2xl text-ink/90 leading-relaxed">
                &ldquo;You can&rsquo;t always win, but you can always
                learn.&rdquo;
              </div>
              <div className="mt-6 font-mono text-xs tracking-widest uppercase text-muted">
                — Dennis Hong
              </div>
            </motion.div>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="mt-20 md:mt-28 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {about.highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group p-6 border border-line rounded-lg hover:border-accent/50 transition-all lift"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform origin-left">
                {h.icon}
              </div>
              <h3 className="font-display text-lg mb-2 tracking-tight">
                {h.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed text-pretty">
                {h.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
