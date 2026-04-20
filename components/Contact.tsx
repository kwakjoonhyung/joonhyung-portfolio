"use client";

import { profile } from "@/lib/data";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Mail, Github, Linkedin, MapPin, Phone, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 px-6 md:px-10 bg-surface/30 overflow-hidden"
    >
      {/* Decorative blob */}
      <div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgb(var(--accent)) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeader
          number="06"
          title="Get in Touch"
          subtitle="Research collaborations, engineering roles, or just to talk about causal NLP and LLM serving — I read every email."
        />

        <div className="grid md:grid-cols-12 gap-10">
          {/* Big CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7"
          >
            <a
              href={`mailto:${profile.email}`}
              className="group block"
            >
              <div className="font-mono text-xs tracking-widest uppercase text-muted mb-4">
                / Primary contact
              </div>
              <div className="font-display text-xl md:text-2xl lg:text-3xl tracking-tight leading-tight group-hover:text-accent transition-colors whitespace-nowrap">
                {profile.email}
                <ArrowUpRight
                  size={22}
                  className="inline-block ml-2 -mt-1 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                />
              </div>
            </a>

            <div className="mt-10 font-display italic text-lg md:text-xl text-ink/70 max-w-xl text-pretty border-l-2 border-accent/50 pl-5">
              &ldquo;The best way to reach me is email — I reply fast when the
              subject line tells me what you want.&rdquo;
            </div>
          </motion.div>

          {/* Details column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-5"
          >
            <div className="border border-line rounded-xl p-6 md:p-8 space-y-5">
              <ContactRow
                icon={<Mail size={16} />}
                label="Email"
                value={profile.email}
                href={`mailto:${profile.email}`}
              />
              <ContactRow
                icon={<Phone size={16} />}
                label="Phone"
                value={profile.phone}
                href={`tel:${profile.phone.replace(/[-\s]/g, "")}`}
              />
              <ContactRow
                icon={<Github size={16} />}
                label="GitHub"
                value="@kwakjoonhyung"
                href={profile.github}
                external
              />
              <ContactRow
                icon={<Linkedin size={16} />}
                label="LinkedIn"
                value="joonhyung-kwak"
                href={profile.linkedin}
                external
              />
              <ContactRow
                icon={<MapPin size={16} />}
                label="Location"
                value={profile.location}
              />
            </div>

            {/*
              💡 SUGGESTION: If you have a LinkedIn, Google Scholar,
              Twitter/X, or personal site, add them here. For AI
              researchers, Google Scholar + LinkedIn carry real weight.
              Update /lib/data.ts profile object + add rows above.
            */}
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-24 md:mt-32 pt-8 border-t border-line flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="font-mono text-xs tracking-wider text-muted">
            © 2026 {profile.name} · {profile.nameKo} · All rights reserved.
          </div>
          <div className="font-mono text-xs tracking-wider text-muted">
            Built with Next.js · Deployed on Vercel
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="flex items-start gap-4 group">
      <div className="w-9 h-9 rounded-lg bg-bg border border-line flex items-center justify-center text-accent flex-shrink-0 group-hover:border-accent/60 transition-colors">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="font-mono text-[10px] tracking-widest uppercase text-muted mb-0.5">
          {label}
        </div>
        <div className="text-sm text-ink truncate">{value}</div>
      </div>
      {href && (
        <ArrowUpRight
          size={14}
          className="text-muted group-hover:text-accent flex-shrink-0 mt-2.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
        />
      )}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="block"
      >
        {content}
      </a>
    );
  }
  return content;
}
