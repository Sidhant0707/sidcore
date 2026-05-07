"use client";
import { motion } from "framer-motion";
import { SiLeetcode } from "react-icons/si";

export default function LeetCodeCard({ stats }: { stats: any }) {
  const total = stats?.totalSolved || 56;
  const target = 300;
  const progress = Math.min((total / target) * 100, 100);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="md:col-span-2 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-800/50 p-8 hover:border-amber-500/50 transition-all flex flex-col justify-between shadow-2xl"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-widest font-sans">LeetCode Arsenal</h3>
        <SiLeetcode size={28} className="text-amber-500" />
      </div>
      <div className="mb-6">
        <div className="text-7xl font-bold text-white mb-2 font-mono tracking-tighter">{total}</div>
        <p className="text-sm text-slate-400 font-mono">Current Focus: Linked Lists</p>
      </div>
      <div className="w-full h-3 bg-slate-800/80 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-amber-600 to-amber-400 transition-all duration-1000" style={{ width: `${progress}%` }} />
      </div>
      <div className="flex justify-between mt-3 text-xs text-slate-500 font-mono uppercase tracking-widest">
        <span>Start</span>
        <span>Goal: {target}</span>
      </div>
    </motion.div>
  );
}