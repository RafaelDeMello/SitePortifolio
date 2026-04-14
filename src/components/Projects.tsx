import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Sistema de Agendamento para Estética Automotiva",
    description: "Aplicação web para agendamento de serviços automotivos com visualização de horários disponíveis.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    color: { from: "#1a2a3a", to: "#2a3a4a" }
  },
  {
    id: 2,
    title: "Gerador de Documentos em PDF",
    description: "Sistema para geração automatizada de documentos em PDF a partir de dados do usuário.",
    tags: ["React", "Node.js", "Express"],
    color: { from: "#2a2a3a", to: "#3a3a4a" }
  },
  {
    id: 3,
    title: "Website Institucional com Integração de API",
    description: "Site institucional com foco em conversão e integração com API externa.",
    tags: ["React", "Vite", "Tailwind CSS", "Axios"],
    color: { from: "#1a1a2a", to: "#2a2a3a" }
  },
  {
    id: 4,
    title: "Landing Pages com Foco em Conversão",
    description: "Landing pages otimizadas para conversão com CTA para WhatsApp.",
    tags: ["React", "Tailwind CSS", "Vite"],
    color: { from: "#2a1a2a", to: "#3a2a3a" }
  }
];

interface ProjectsProps {
  onProjectClick: (projectId: number) => void;
}

export function Projects({ onProjectClick }: ProjectsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projetos" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-[#121217]" />
      
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-[#E8E8EE] via-[#A8A8B8] to-[#8BAEC8] bg-clip-text text-transparent">
            Meus Projetos
          </h2>
          <motion.div
            className="w-16 h-px bg-[#3D3D50] mx-auto"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative cursor-pointer"
              onClick={() => onProjectClick(project.id)}
            >
              <div className="relative bg-[#0A0A0C] rounded-2xl overflow-hidden border border-[#2E2E3A] group-hover:border-[#4A7A9B] transition-colors">
                <div 
                  className="h-48 flex items-center justify-center relative"
                  style={{ background: `linear-gradient(135deg, ${project.color.from}, ${project.color.to})` }}
                >
                  <span className="text-6xl text-white/20 font-mono">{'{ }'}</span>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="p-2 rounded-full bg-white/10 backdrop-blur">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-medium text-[#E8E8EE] mb-2">{project.title}</h3>
                  <p className="text-[#7A7A8E] text-sm mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-[#1A2A3A] rounded text-[#8BAEC8] border border-[#2A4A6A]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
