import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect, memo } from 'react';
import { Atom, FileCode, Server, Palette, GitBranch, Database, Globe, Code2, Box, Hash, Zap, ArrowUpRight, Bot, MessageSquare, Braces, Layers, Workflow, CheckCircle, Boxes, Container, Sparkles, Layout } from 'lucide-react';
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
  CheckCircle,
  Boxes,
  Container,
  Sparkles,
  Layout,
};

const defaultIcons: Record<string, { icon: string; color: string }> = {
  "HTML/CSS": { icon: "Globe", color: "#e34f26" },
  "JavaScript": { icon: "Braces", color: "#f7df1e" },
  "React": { icon: "Atom", color: "#61dafb" },
  "TypeScript": { icon: "Hash", color: "#3178c6" },
  "Tailwind CSS": { icon: "Palette", color: "#38bdf8" },
  "Node.js": { icon: "Server", color: "#68a063" },
  "Express": { icon: "Box", color: "#8BAEC8" },
  "Next.js": { icon: "Globe", color: "#ffffff" },
  "REST APIs": { icon: "Globe", color: "#8BAEC8" },
  "Prisma": { icon: "Database", color: "#5a5a72" },
  "Docker": { icon: "Container", color: "#2496ed" },
  "SQL": { icon: "Database", color: "#336791" },
  "Git / GitHub": { icon: "Branch", color: "#f05032" },
  "Vite": { icon: "Zap", color: "#646cff" },
  "Axios": { icon: "ArrowUpRight", color: "#5a29e4" },
  "ESLint / Prettier": { icon: "Code2", color: "#8BAEC8" },
  "Zod": { icon: "CheckCircle", color: "#3fb950" },
  "shadcn/ui": { icon: "Layout", color: "#ffffff" },
  "ChatGPT": { icon: "MessageSquare", color: "#10a37f" },
  "Claude": { icon: "Bot", color: "#d4a574" },
  "GitHub Copilot": { icon: "Bot", color: "#7c3aed" },
  "OpenCode": { icon: "Sparkles", color: "#8BAEC8" },
  "n8n": { icon: "Workflow", color: "#ea4b71" },
  "Gemini": { icon: "Sparkles", color: "#ea4b71" },
};

const categories = [
  { key: 'frontend', label: 'Front-end', color: '#61dafb' },
  { key: 'backend', label: 'Back-end', color: '#68a063' },
  { key: 'tools', label: 'Ferramentas', color: '#8BAEC8' },
  { key: 'ai', label: 'IA', color: '#a855f7' },
];

interface SkillCardProps {
  skill: any;
  catColor: string;
  index: number;
  isMobile: boolean;
  isInView: boolean;
  categoryIndex: number;
}

const SkillCard = memo(({ skill, catColor, index, isMobile, isInView, categoryIndex }: SkillCardProps) => {
  const iconInfo = defaultIcons[skill.name] || { icon: 'Code2', color: catColor };
  const IconComponent = iconMap[iconInfo.icon] || Code2;
  
  return (
    <motion.div
      key={skill.name}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ delay: isMobile ? 0.3 + categoryIndex * 0.1 + index * 0.05 : 0.4 + Math.floor(categoryIndex / 2) * 0.15 + index * 0.05 }}
      className={`flex flex-col items-center justify-center rounded-xl bg-[#121217] border border-[#2E2E3A] ${
        isMobile ? 'p-3' : 'p-4 aspect-square'
      }`}
    >
      <div
        className={`flex items-center justify-center ${
          isMobile ? 'w-8 h-8 mb-1' : 'w-10 h-10 mb-2'
        }`}
        style={{ color: iconInfo.color }}
      >
        <IconComponent className={isMobile ? "w-6 h-6" : "w-7 h-7"} />
      </div>
      <span className={`font-medium text-center leading-tight ${
        isMobile ? 'text-[9px] text-[#7A7A8E]' : 'text-[10px] text-[#A8A8B8] group-hover:text-[#E8E8EE] transition-colors'
      }`}>
        {skill.name}
      </span>
    </motion.div>
  );
});

export function TechGrid() {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getMobileSkills = (catSkills: any[]) => {
    if (!isMobile) return catSkills;
    return catSkills.slice(0, 4);
  };

  return (
    <div ref={ref} className="overflow-hidden">
      <div className="hidden lg:block">
        <div className="grid grid-cols-2 gap-x-16 gap-y-16">
          {categories.map((cat, ci) => {
            const catSkills = (skills as any)[cat.key];
            const cols = catSkills.length >= 5 ? 5 : catSkills.length;
            
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + Math.floor(ci / 2) * 0.15 + (ci % 2) * 0.08 }}
                className="space-y-4 bg-[#0A0A0C] relative"
              >
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-[#2E2E3A]">
                  <Layers className="w-5 h-5" style={{ color: cat.color }} />
                  <h4 className="text-lg font-medium" style={{ color: cat.color }}>
                    {cat.label}
                  </h4>
                </div>
                
                <div className={`grid gap-4`} style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
                  {catSkills.map((skill: any, i: number) => (
                    <SkillCard 
                      key={skill.name}
                      skill={skill}
                      catColor={cat.color}
                      index={i}
                      isMobile={false}
                      isInView={!!isInView}
                      categoryIndex={ci}
                    />
                  ))}
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
                {getMobileSkills((skills as any)[cat.key]).map((skill: any, i: number) => (
                  <SkillCard 
                    key={skill.name}
                    skill={skill}
                    catColor={cat.color}
                    index={i}
                    isMobile={true}
                    isInView={!!isInView}
                    categoryIndex={ci}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
