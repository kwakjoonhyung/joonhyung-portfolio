"use client";

import { skills, teaching, awards, certifications, languages } from "@/lib/data";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Award, GraduationCap, BadgeCheck, Languages as LanguagesIcon } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="05"
          title="Skills & More"
          subtitle="Technical stack, teaching experience, and recognition."
        />

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20 md:mb-24">
          {skills.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="p-6 border border-line rounded-lg hover:border-accent/40 transition-colors"
            >
              <div className="font-mono text-[11px] tracking-widest uppercase text-accent mb-4">
                {String(i + 1).padStart(2, "0")} / {group.category}
              </div>
              <ul className="space-y-2">
                {group.items.map((item, j) => (
                  <li
                    key={j}
                    className="text-sm text-ink/80 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Teaching + Awards — two columns */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Teaching */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap size={20} className="text-accent" />
              <h3 className="font-display text-2xl tracking-tight">Teaching</h3>
            </div>
            <div className="space-y-3">
              {teaching.map((t, i) => (
                <div
                  key={i}
                  className="p-5 border border-line rounded-lg hover:border-accent/40 transition-colors"
                >
                  <div className="font-mono text-[10px] tracking-widest uppercase text-muted mb-1">
                    {t.term}
                  </div>
                  <div className="font-medium text-ink">{t.course}</div>
                  <div className="text-sm text-muted mt-1">
                    {t.role} · {t.institution}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Award size={20} className="text-accent" />
              <h3 className="font-display text-2xl tracking-tight">Awards</h3>
            </div>
            <div className="space-y-3">
              {awards.map((a, i) => (
                <div
                  key={i}
                  className="p-5 border border-line rounded-lg hover:border-accent/40 transition-colors"
                >
                  <div className="font-mono text-[10px] tracking-widest uppercase text-accent mb-1">
                    {a.year}
                  </div>
                  <div className="font-medium text-ink">{a.title}</div>
                  {a.org !== "—" && (
                    <div className="text-sm text-muted mt-1">{a.org}</div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certifications + Languages — two columns */}
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <BadgeCheck size={20} className="text-accent" />
              <h3 className="font-display text-2xl tracking-tight">
                Certifications
              </h3>
            </div>
            <div className="space-y-3">
              {certifications.map((c, i) => (
                <div
                  key={i}
                  className="p-5 border border-line rounded-lg hover:border-accent/40 transition-colors"
                >
                  <div className="font-mono text-[10px] tracking-widest uppercase text-accent mb-1">
                    {c.date}
                  </div>
                  <div className="font-medium text-ink">{c.name}</div>
                  <div className="text-sm text-muted mt-1">{c.issuer}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <LanguagesIcon size={20} className="text-accent" />
              <h3 className="font-display text-2xl tracking-tight">
                Languages
              </h3>
            </div>
            <div className="space-y-3">
              {languages.map((l, i) => (
                <div
                  key={i}
                  className="p-5 border border-line rounded-lg hover:border-accent/40 transition-colors"
                >
                  <div className="font-mono text-[10px] tracking-widest uppercase text-accent mb-1">
                    {l.level}
                  </div>
                  <div className="font-medium text-ink">{l.name}</div>
                  {l.detail && (
                    <div className="text-sm text-muted mt-1">{l.detail}</div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
