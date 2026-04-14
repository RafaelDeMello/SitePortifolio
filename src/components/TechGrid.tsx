import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Atom, FileCode, Server, Palette, GitBranch, Database, Globe, Code2, Box, Hash, Zap, ArrowUpRight, Bot, MessageSquare, Braces, Layers, Workflow } from 'lucide-react';
import { skills } from '../data/content';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Atom,
  FileCode,
  Server,
  Palette,
  Branch: GitBranch,
  Database,
  Globe,
  Code2,
  Box,
  Hash,
  Zap,
  ArrowUpRight,
  Bot,
  MessageSquare,
  Braces,
  Workflow,
};

const defaultIcons: Record<string, { icon: string; color: string }> = {
  "HTML/CSS": { icon: "Globe", color: "#e34f26" },
  "JavaScript": { icon: "Braces", color: "#f7df1e" },
  "React": { icon: "Atom", color: "#61dafb" },
  "TypeScript": { icon: "Hash", color: "#3178c6" },
  "Tailwind CSS": { icon: "Palette", color: "#38bdf8" },
  "Node.js": { icon: "Server", color: "#68a063" },
  "Express": { icon: "Box", color: "#8BAEC8" },
  "REST APIs": { icon: "Globe", color: "#8BAEC8" },
  "Prisma": { icon: "Database", color: "#5a5a72" },
  "Git / GitHub": { icon: "Branch", color: "#f05032" },
  "Vite": { icon: "Zap", color: "#646cff" },
  "Axios": { icon: "ArrowUpRight", color: "#5a29e4" },
  "ESLint / Prettier": { icon: "Wrench", color: "#8BAEC8" },
  "ChatGPT": { icon: "MessageSquare", color: "#10a37f" },
  "Claude": { icon: "Bot", color: "#d4a574" },
  "GitHub Copilot": { icon: "Bot", color: "#7c3aed" },
  "OpenCode": { icon: "Sparkles", color: "#8BAEC8" },
  "n8n": { icon: "Workflow", color: "#ea4b71" },
};

const categories = [
  { key: 'frontend', label: 'Front-end', color: '#61dafb' },
  { key: 'backend', label: 'Back-end', color: '#68a063' },
  { key: 'tools', label: 'Ferramentas', color: '#8BAEC8' },
  { key: 'ai', label: 'IA', color: '#a855f7' },
];

export function TechGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref}>
      <div className="hidden lg:block">
        <div className="grid grid-cols-2 gap-x-12 gap-y-10">
          {categories.map((cat, ci) => {
            const catSkills = (skills as any)[cat.key];
            const cols = catSkills.length >= 5 ? 5 : catSkills.length;
            
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + Math.floor(ci / 2) * 0.15 + (ci % 2) * 0.08 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-[#2E2E3A]">
                  <Layers className="w-5 h-5" style={{ color: cat.color }} />
                  <h4 className="text-lg font-medium" style={{ color: cat.color }}>
                    {cat.label}
                  </h4>
                </div>
                
                <div className={`grid gap-4`} style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
                  {catSkills.map((skill: any, i: number) => {
                    const iconInfo = defaultIcons[skill.name] || { icon: 'Code2', color: cat.color };
                    const IconComponent = iconMap[iconInfo.icon] || Code2;
                    
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 + Math.floor(ci / 2) * 0.15 + i * 0.05 }}
                        whileHover={{ scale: 1.08, y: -4 }}
                        className="flex flex-col items-center justify-center p-5 rounded-xl bg-[#121217] border border-[#2E2E3A] hover:border-[#4A7A9B] transition-all cursor-default group aspect-square"
                      >
                        <div
                          className="w-12 h-12 flex items-center justify-center mb-3 transition-transform"
                          style={{ color: iconInfo.color }}
                        >
                          <IconComponent className="w-9 h-9" />
                        </div>
                        <span className="text-xs text-[#A8A8B8] font-medium text-center leading-tight group-hover:text-[#E8E8EE] transition-colors">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="lg:hidden">
        <div className="space-y-10">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + ci * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Layers className="w-4 h-4" style={{ color: cat.color }} />
                <h4 className="text-sm font-medium" style={{ color: cat.color }}>
                  {cat.label}
                </h4>
              </div>
              
              <div className="grid grid-cols-4 gap-3">
                {(skills as any)[cat.key].map((skill: any, i: number) => {
                  const iconInfo = defaultIcons[skill.name] || { icon: 'Code2', color: cat.color };
                  const IconComponent = iconMap[iconInfo.icon] || Code2;
                  
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + ci * 0.1 + i * 0.03 }}
                      whileHover={{ scale: 1.1 }}
                      className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#121217] border border-[#2E2E3A] hover:border-[#4A7A9B] transition-all"
                    >
                      <div
                        className="w-8 h-8 flex items-center justify-center mb-1"
                        style={{ color: iconInfo.color }}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-[9px] text-[#7A7A8E] font-medium text-center leading-tight">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
