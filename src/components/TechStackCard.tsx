"use client";
import { motion } from "framer-motion";
import {
  SiCplusplus,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiSupabase,
  SiPostgresql,
} from "react-icons/si";

export default function TechStackCard() {
  const tech = [
    { name: "C++", icon: <SiCplusplus size={24} />, color: "text-blue-500" },
    { name: "Next.js", icon: <SiNextdotjs size={24} />, color: "text-white" },
    {
      name: "TypeScript",
      icon: <SiTypescript size={24} />,
      color: "text-blue-400",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss size={24} />,
      color: "text-cyan-400",
    },
    {
      name: "Supabase",
      icon: <SiSupabase size={24} />,
      color: "text-emerald-500",
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql size={24} />,
      color: "text-blue-300",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="md:col-span-2 rounded-3xl bg-slate-900/40 backdrop-blur-md border border-slate-800 p-8 flex flex-col justify-center"
    >
      <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6 font-sans">
        Engineering Arsenal
      </h3>
      <div className="grid grid-cols-3 gap-6">
        {tech.map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center gap-2 group"
          >
            <div
              className={`p-4 rounded-2xl bg-slate-950 border border-slate-800 group-hover:border-slate-600 transition-colors ${item.color}`}
            >
              {item.icon}
            </div>
            <span className="text-[10px] font-mono text-slate-500 group-hover:text-slate-300 transition-colors">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
