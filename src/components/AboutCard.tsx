"use client";
import { motion } from "framer-motion";

export default function AboutCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="md:col-span-2 rounded-3xl bg-slate-900/40 backdrop-blur-md border border-slate-800 p-8 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full" />
      <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4 font-sans">
        Current Directive
      </h3>
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed font-sans">
          Currently pursuing my B.Tech at{" "}
          <span className="text-white font-semibold">GL Bajaj</span>,
          specializing in Computer Science and Data Science (CSDS).
        </p>
        <p className="text-slate-400 leading-relaxed font-sans text-sm">
          While my academic core is data, my primary trajectory is becoming a
          high-impact Software Development Engineer. I focus on building
          autonomous workflows and robust full-stack architectures.
        </p>
      </div>
    </motion.div>
  );
}
