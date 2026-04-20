"use client";

import { profile, stats } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowRight, Github, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      {/* Decorative dotted background */}
      <div className="absolute inset-0 dotted-bg opacity-40 pointer-events-none" />

      {/* Decorative gradient blob */}
      <div
        className="absolute top-1/4 -right-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgb(var(--accent)) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          {/* Left — text */}
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8 font-mono text-xs tracking-widest uppercase text-muted"
            >
              <span className="w-8 h-px bg-accent" />
              <span>Portfolio / 2026</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-light leading-[0.95] tracking-tight text-[clamp(2.5rem,7vw,5.5rem)] text-ink"
            >
              Joonhyung <br />
              <span className="italic text-accent">Kwak</span>
              <span className="text-muted">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-6 text-muted text-sm font-mono tracking-wider"
            >
              {profile.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-8 text-lg md:text-xl text-ink/80 leading-relaxed max-w-2xl text-balance"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 bg-ink text-bg px-6 py-3 rounded-full text-sm tracking-wide lift"
              >
                View Projects
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 border border-line hover:border-accent px-6 py-3 rounded-full text-sm tracking-wide transition-colors"
              >
                <Mail size={16} />
                Get in touch
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-line hover:border-accent px-6 py-3 rounded-full text-sm tracking-wide transition-colors"
              >
                <Github size={16} />
                GitHub
              </a>
            </motion.div>
          </div>

          {/* Right — profile card */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="gradient-border p-8 md:p-10"
            >
              {/* TODO: Profile photo goes here */}
              <div className="aspect-[4/5] bg-bg border border-line rounded-lg mb-6 relative overflow-hidden flex items-center justify-center">
                {/*
                  📸 PHOTO NEEDED: profile.jpg
                  - Professional headshot, 4:5 portrait ratio
                  - Place in: /public/images/profile.jpg
                  - Will replace the placeholder below
                */}
                <div className="text-center p-6">
                  <div className="text-6xl mb-2 opacity-20">◆</div>
                  <div className="font-mono text-xs text-muted tracking-wider">
                    [ PROFILE PHOTO ]
                  </div>
                  <div className="font-mono text-[10px] text-muted/60 mt-2">
                    /public/images/profile.jpg
                  </div>
                </div>
              </div>

              <div className="space-y-3 font-mono text-xs tracking-wider">
                <div className="flex justify-between text-muted">
                  <span>STATUS</span>
                  <span className="text-accent">M.S. Candidate</span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>UNIVERSITY</span>
                  <span className="text-ink">SKKU</span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>LAB</span>
                  <span className="text-ink">HLI Lab</span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>GRADUATION</span>
                  <span className="text-ink">Aug. 2026</span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>LOCATION</span>
                  <span className="text-ink">Suwon, KR</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 border-t border-line pt-10"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <div className="font-display text-3xl md:text-5xl text-accent tracking-tight">
                {stat.value}
              </div>
              <div className="mt-2 text-xs font-mono tracking-wider text-muted uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
