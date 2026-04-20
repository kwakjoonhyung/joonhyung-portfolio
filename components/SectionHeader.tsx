"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({
  number,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-16 md:mb-20"
    >
      <div className="flex items-center gap-3 mb-4 font-mono text-xs tracking-widest uppercase text-accent">
        <span className="section-num">{number}</span>
        <span className="w-12 h-px bg-accent/50" />
      </div>
      <h2 className="font-display font-light text-4xl md:text-6xl tracking-tight leading-none">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-muted text-lg max-w-2xl text-pretty">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
