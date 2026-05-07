"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { ReactNode, MouseEvent } from "react";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  status: "Live" | "GitHub" | "In Progress";
  projectType?: string; // <-- Added this
  icon: ReactNode;
}

export default function ProjectCard({ title, description, tags, link, github, status, projectType, icon }: ProjectProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const statusColors = {
    "Live": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    "GitHub": "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
    "In Progress": "bg-amber-500/10 text-amber-400 border-amber-500/20"
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative rounded-3xl bg-zinc-900/30 backdrop-blur-md p-8 flex flex-col h-full overflow-hidden border border-white/5 hover:border-zinc-500/50 transition-colors duration-300 shadow-2xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div 
        style={{ transform: "translateZ(30px)" }}
        className="flex justify-between items-start mb-6 relative z-10"
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2 items-center">
            <span className={`text-[11px] font-mono px-3 py-1 rounded-full border ${statusColors[status]}`}>
              ● {status}
            </span>
            {projectType && (
              <span className="text-[11px] font-mono px-3 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-300">
                {projectType}
              </span>
            )}
            <span className="text-xl text-zinc-300 ml-1">{icon}</span>
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight font-sans">{title}</h3>
        </div>
        
        <div className="flex gap-4 text-zinc-400 shrink-0">
          {github && <a href={github} target="_blank" rel="noreferrer" className="hover:text-white transition-transform hover:scale-110"><FaGithub size={22}/></a>}
          {link && <a href={link} target="_blank" rel="noreferrer" className="hover:text-white transition-transform hover:scale-110"><FiExternalLink size={22}/></a>}
        </div>
      </div>
      
      <p 
        style={{ transform: "translateZ(20px)" }}
        className="text-sm text-zinc-400 mb-8 leading-relaxed flex-grow font-sans relative z-10"
      >
        {description}
      </p>
      
      <div 
        style={{ transform: "translateZ(40px)" }}
        className="flex flex-wrap gap-2 mt-auto relative z-10"
      >
        {tags.map(tag => (
          <span key={tag} className="px-3 py-1.5 text-[10px] font-mono rounded-full bg-black/50 border border-zinc-800 text-zinc-300">{tag}</span>
        ))}
      </div>
    </motion.div>
  );
}