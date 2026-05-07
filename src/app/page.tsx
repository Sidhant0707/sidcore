"use client";
import { useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  LuMail,
  LuBot,
  LuRocket,
  LuLandmark,
  LuChartBar,
  LuBook,
  LuDatabase,
  LuCpu,
  LuNetwork,
} from "react-icons/lu";
import { SiLeetcode } from "react-icons/si";
import { motion, Variants } from "framer-motion";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const projectsData = [
  {
    title: "CodeAutopsy",
    projectType: "AI Tool",
    desc: "AI-powered tool that analyzes any GitHub repository and generates architecture insights, execution flow, tech stack, and dependency graphs.",
    tags: ["TypeScript", "GitHub API", "Static Analysis", "Mermaid", "Gemini"],
    status: "Live" as const,
    icon: <LuBot />,
    link: "https://codeautopsy-lyart.vercel.app/",
    github: "https://github.com/Sidhant0707/codeautopsy",
  },
  {
    title: "Rolevate AI",
    projectType: "Hackathon",
    desc: "AI-powered career roadmap generator. Enter a company and role — get a complete preparation plan with skills, tools, projects, and interview questions.",
    tags: ["HTML", "CSS", "JavaScript", "AI API"],
    status: "Live" as const,
    icon: <LuRocket />,
    link: "https://rolevate-ai.vercel.app/",
    github: "https://github.com/Sidhant0707/rolevate-ai",
  },
  {
    title: "OfferVault",
    projectType: "Full-Stack",
    desc: "A high-trust placement analytics platform for Indian engineering students. Implemented institutional email verification (.edu/.ac.in) and automated CTC breakdown logic.",
    tags: ["Next.js 15", "Supabase", "TypeScript", "PostgreSQL", "Tailwind"],
    status: "Live" as const,
    icon: <LuLandmark />,
    link: "https://offervault.vercel.app/",
    github: "https://github.com/Sidhant0707/offervault",
  },
  {
    title: "DSA Tracker CLI",
    projectType: "CLI Tool",
    desc: "Command-line tool built in C++ to track DSA problem-solving progress. Supports adding, viewing, and filtering problems by topic and difficulty.",
    tags: ["C++", "CLI", "File I/O"],
    status: "GitHub" as const,
    icon: <LuChartBar />,
    github: "https://github.com/Sidhant0707",
  },
  {
    title: "GradeGap",
    projectType: "EdTech Platform",
    desc: "AI learning equity platform that generates personalized micro-learning plans for any topic — giving every student access to quality explanation regardless of background.",
    tags: ["HTML", "CSS", "JavaScript", "AI API"],
    status: "In Progress" as const,
    icon: <LuBook />,
    link: "#",
    github: "#",
  },
];

const dsaTopics = [
  {
    name: "Arrays & Strings",
    status: "Done",
    color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    dot: "bg-emerald-500",
  },
  {
    name: "Two Pointers",
    status: "Done",
    color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    dot: "bg-emerald-500",
  },
  {
    name: "Binary Search",
    status: "Done",
    color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    dot: "bg-emerald-500",
  },
  {
    name: "Linked Lists",
    status: "In Progress",
    color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    dot: "bg-cyan-500",
  },
  {
    name: "Trees & Graphs",
    status: "Upcoming",
    color: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
    dot: "bg-zinc-500",
  },
  {
    name: "Dynamic Programming",
    status: "Upcoming",
    color: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
    dot: "bg-zinc-500",
  },
];

const skillsData = [
  {
    title: "Languages",
    items: [
      {
        name: "C++",
        level: "Strong",
        note: "Primary language · DSA · OOP",
        val: "75%",
      },
      {
        name: "JavaScript",
        level: "Learning",
        note: "Projects · Frontend logic · APIs",
        val: "55%",
      },
      {
        name: "Python",
        level: "Beginner",
        note: "Scripting · Data basics",
        val: "35%",
      },
    ],
  },
  {
    title: "Frontend",
    items: [
      {
        name: "HTML & CSS",
        level: "Comfortable",
        note: "All projects · Responsive design",
        val: "80%",
      },
      {
        name: "Responsive Design",
        level: "Practicing",
        note: "Mobile-first layouts",
        val: "60%",
      },
    ],
  },
  {
    title: "Backend & Tools",
    items: [
      {
        name: "Next.js & React",
        level: "Competent",
        note: "OfferVault · Rolevate AI · SSR/ISR",
        val: "65%",
      },
      {
        name: "Node.js & Express",
        level: "Exploring",
        note: "REST APIs · Server basics",
        val: "30%",
      },
      {
        name: "Git & GitHub",
        level: "Regular Use",
        note: "Version control · All projects",
        val: "65%",
      },
    ],
  },
];

const currentStudies = [
  {
    icon: <LuDatabase />,
    name: "DBMS",
    desc: "Normalization, SQL, Transactions",
  },
  {
    icon: <LuCpu />,
    name: "Operating Systems",
    desc: "Processes, Memory, Scheduling",
  },
  { icon: <LuNetwork />, name: "Computer Networks", desc: "TCP/IP, DNS, HTTP" },
];

export default function Home() {
  const [leetCodeStats, setLeetCodeStats] = useState({
    total: 56,
    easy: 31,
    medium: 24,
    hard: 1,
    progress: 18.6,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(
          "https://leetcode-stats-api.herokuapp.com/Sidhant_07",
        );
        if (!res.ok) throw new Error("API Network Error");
        const data = await res.json();
        if (data.status === "success") {
          setLeetCodeStats({
            total: data.totalSolved,
            easy: data.easySolved,
            medium: data.mediumSolved,
            hard: data.hardSolved,
            progress: Math.min((data.totalSolved / 300) * 100, 100),
          });
        }
      } catch (error) {
        console.warn("LeetCode API unavailable. Using fallback data.");
      }
    };

    fetchStats();
  }, []);

  const heroStats = [
    { num: leetCodeStats.total.toString(), label: "LeetCode Problems" },
    { num: "C++", label: "Primary Language" },
    { num: "5+", label: "Projects Shipped" },
    { num: "Next.js", label: "Full-Stack Tech" },
    { num: "6th", label: "Semester" },
  ];

  return (
    <main className="w-full min-h-screen relative z-10 font-sans selection:bg-zinc-500/30 overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
          <span className="text-xl font-bold text-white tracking-tighter font-serif">
            sidcore
          </span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#dsa" className="hover:text-white transition-colors">
              DSA
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-24 space-y-32">
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          id="home"
          className="flex flex-col items-start pt-10"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-sm font-mono shadow-2xl"
          >
            <span>Open to Internships & SDE Placements</span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight font-serif"
          >
            Sidhant Kumar
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10"
          >
            Computer Science student focused on building AI-powered developer
            tools, solving DSA problems consistently, and preparing for SDE
            roles.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-12">
            <a
              href="/SidhantKumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-colors"
            >
              Download Resume ↓
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-black border border-white/10 text-white font-bold rounded-xl hover:bg-zinc-900 transition-colors"
            >
              View Projects →
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="w-full grid grid-cols-2 md:grid-cols-5 gap-4 bg-zinc-900/30 backdrop-blur-md border border-white/5 rounded-2xl p-6 shadow-2xl"
          >
            {heroStats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-4 md:border-r border-white/5 last:border-0"
              >
                <span className="text-3xl font-bold text-white mb-1 font-serif">
                  {stat.num}
                </span>
                <span className="text-xs text-zinc-500 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.section>

        <section id="projects" className="scroll-mt-24">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 tracking-tight font-serif">
              Projects
            </h2>
            <p className="text-zinc-400">
              Projects built to explore ideas, strengthen fundamentals, and
              solve practical problems.
            </p>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            style={{ perspective: 1000 }}
          >
            {projectsData.map((proj, i) => (
              <ProjectCard key={i} {...proj} />
            ))}
          </div>
        </section>

        <section id="dsa" className="scroll-mt-24">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 tracking-tight font-serif">
              Data Structures & Algorithms
            </h2>
            <p className="text-zinc-400">
              Solving DSA problems consistently while following Striver’s DSA
              Sheet roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-900/30 backdrop-blur-md border border-white/5 p-8 rounded-3xl flex flex-col justify-between shadow-2xl hover:border-zinc-500/50 transition-colors duration-300">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                  <SiLeetcode size={24} className="text-amber-500" />
                  <span className="text-lg font-bold text-white">LeetCode</span>
                </div>
                <a
                  href="https://leetcode.com/Sidhant_07"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-zinc-300 hover:text-white"
                >
                  @Sidhant_07 ↗
                </a>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-8">
                <div className="bg-black/50 p-4 rounded-xl text-center border border-white/5">
                  <div className="text-2xl font-mono text-white">
                    {leetCodeStats.total}
                  </div>
                  <div className="text-[10px] text-zinc-500 uppercase">
                    Total
                  </div>
                </div>
                <div className="bg-emerald-950/20 p-4 rounded-xl text-center border border-emerald-900/30">
                  <div className="text-2xl font-mono text-emerald-400">
                    {leetCodeStats.easy}
                  </div>
                  <div className="text-[10px] text-emerald-500/70 uppercase">
                    Easy
                  </div>
                </div>
                <div className="bg-amber-950/20 p-4 rounded-xl text-center border border-amber-900/30">
                  <div className="text-2xl font-mono text-amber-400">
                    {leetCodeStats.medium}
                  </div>
                  <div className="text-[10px] text-amber-500/70 uppercase">
                    Med
                  </div>
                </div>
                <div className="bg-red-950/20 p-4 rounded-xl text-center border border-red-900/30">
                  <div className="text-2xl font-mono text-red-400">
                    {leetCodeStats.hard}
                  </div>
                  <div className="text-[10px] text-red-500/70 uppercase">
                    Hard
                  </div>
                </div>
              </div>

              <div className="bg-zinc-800/30 border-l-4 border-zinc-500 p-4 rounded-r-xl mb-6">
                <span className="block text-xs text-zinc-400 mb-1">
                  Currently Practicing
                </span>
                <span className="block text-sm text-zinc-200 font-bold">
                  Linked Lists
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-xs text-zinc-400">
                  <span>Target before placements</span>
                  <span>{leetCodeStats.total} / 300</span>
                </div>
                <div className="w-full h-2 bg-black rounded-full overflow-hidden">
                  <div
                    className="h-full bg-zinc-400 transition-all duration-1000 ease-out"
                    style={{ width: `${leetCodeStats.progress}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/30 backdrop-blur-md border border-white/5 p-8 rounded-3xl shadow-2xl hover:border-zinc-500/50 transition-colors duration-300">
              <h3 className="text-lg font-bold text-white mb-6">
                Topics Covered
              </h3>
              <div className="flex flex-col gap-3">
                {dsaTopics.map((topic, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between p-4 rounded-xl border ${topic.color}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${topic.dot}`} />
                      <span className="font-medium text-sm text-zinc-200">
                        {topic.name}
                      </span>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider">
                      {topic.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-24">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 tracking-tight font-serif">
              Skills
            </h2>
            <p className="text-zinc-400">
              Honest assessment of where I stand right now.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsData.map((group, i) => (
              <div
                key={i}
                className="bg-zinc-900/30 backdrop-blur-md border border-white/5 p-8 rounded-3xl shadow-2xl hover:border-zinc-500/50 transition-colors duration-300"
              >
                <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-6">
                  {group.title}
                </h3>
                <div className="flex flex-col gap-6">
                  {group.items.map((skill, j) => (
                    <div key={j} className="flex flex-col gap-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-bold text-white">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-bold text-zinc-300 uppercase bg-white/10 px-2 py-1 rounded-full">
                          {skill.level}
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-black rounded-full overflow-hidden">
                        <div
                          className="h-full bg-zinc-500"
                          style={{ width: skill.val }}
                        />
                      </div>
                      <span className="text-xs text-zinc-500">
                        {skill.note}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="bg-zinc-900/30 backdrop-blur-md border border-white/5 p-8 rounded-3xl shadow-2xl hover:border-zinc-500/50 transition-colors duration-300">
              <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-6">
                Currently Studying
              </h3>
              <div className="flex flex-col gap-4">
                {currentStudies.map((study, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-black/50 p-4 rounded-xl border-l-2 border-zinc-600 hover:bg-white/5 transition-colors duration-300"
                  >
                    <span className="text-xl text-zinc-300">{study.icon}</span>
                    <div>
                      <span className="block text-sm font-bold text-white">
                        {study.name}
                      </span>
                      <span className="block text-xs text-zinc-400">
                        {study.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-24 bg-zinc-900/30 backdrop-blur-md border border-white/5 p-8 md:p-12 rounded-3xl shadow-2xl hover:border-zinc-500/50 transition-colors duration-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight font-serif">
                About Me
              </h2>
              <div className="space-y-4 text-zinc-400 text-sm leading-relaxed mb-8">
                <p>
                  I'm a Computer Science student from Greater Noida focused on
                  building practical software, learning system fundamentals, and
                  preparing for software engineering roles.
                </p>
                <p>
                  Solving DSA problems daily on LeetCode, studying DBMS, OS, and
                  CN fundamentals, and shipping projects that I can talk about
                  in interviews.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-xs text-zinc-500 uppercase font-bold">
                    College
                  </span>
                  <span className="text-sm text-white">GL Bajaj Institute</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-xs text-zinc-500 uppercase font-bold">
                    Degree
                  </span>
                  <span className="text-sm text-white">B.Tech CSDS</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-xs text-zinc-500 uppercase font-bold">
                    Focus
                  </span>
                  <span className="text-sm text-white">
                    SDE Placements 2026
                  </span>
                </div>
              </div>
            </div>

            <div id="contact" className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">
                Let's Connect
              </h2>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:sidhantkumar0707@gmail.com"
                  className="flex items-center gap-4 p-4 bg-black/50 rounded-xl border border-white/5 hover:border-zinc-500/50 transition-colors group"
                >
                  <LuMail
                    size={24}
                    className="text-zinc-400 group-hover:text-white"
                  />
                  <div>
                    <span className="block text-xs text-zinc-500 uppercase font-bold">
                      Email
                    </span>
                    <span className="block text-sm text-white">
                      sidhantkumar0707@gmail.com
                    </span>
                  </div>
                </a>
                <a
                  href="https://linkedin.com/in/sidhant07"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 bg-black/50 rounded-xl border border-white/5 hover:border-zinc-500/50 transition-colors group"
                >
                  <FaLinkedin
                    size={24}
                    className="text-zinc-400 group-hover:text-white"
                  />
                  <div>
                    <span className="block text-xs text-zinc-500 uppercase font-bold">
                      LinkedIn
                    </span>
                    <span className="block text-sm text-white">
                      linkedin.com/in/sidhant07
                    </span>
                  </div>
                </a>
                <a
                  href="https://github.com/Sidhant0707"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 bg-black/50 rounded-xl border border-white/5 hover:border-zinc-500/50 transition-colors group"
                >
                  <FaGithub
                    size={24}
                    className="text-zinc-400 group-hover:text-white"
                  />
                  <div>
                    <span className="block text-xs text-zinc-500 uppercase font-bold">
                      GitHub
                    </span>
                    <span className="block text-sm text-white">
                      github.com/Sidhant0707
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
