import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, Code2, Cpu, Zap } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-[#0A0A0C]" />
      
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-[#E8E8EE] via-[#A8A8B8] to-[#8BAEC8] bg-clip-text text-transparent">
            Sobre Mim
          </h2>
          <motion.div
            className="w-16 h-px bg-[#3D3D50] mx-auto"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative bg-[#121217] rounded-2xl p-8 border border-[#2E2E3A]">
              <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-[#1C1C24] border border-[#3D3D50] flex items-center justify-center">
                <span className="text-5xl font-bold text-[#A8A8B8]">RM</span>
              </div>
              <p className="text-[#A8A8B8] text-lg leading-relaxed mb-4">
                Desenvolvedor Fullstack com foco em desenvolvimento web moderno, automações inteligentes e criação de agentes de Inteligência Artificial.
              </p>
              <p className="text-[#7A7A8E] text-sm leading-relaxed mb-6">
                Experiência prática com React, Node.js, integrações via n8n e uso avançado de ferramentas de IA no desenvolvimento de software. Comprometido com boas práticas de código, resolução criativa de problemas e entrega de valor real ao cliente.
              </p>
              <div className="flex items-center gap-2 text-sm text-[#5A5A72] mb-6">
                <span>Engenharia de Software — UNOPAR (último semestre)</span>
              </div>
              <motion.a
                href="/CV_PDF.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#1A2A3A] border border-[#4A7A9B] text-[#8BAEC8] hover:bg-[#1E2F45] hover:text-white transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-4 h-4" />
                <span className="font-medium">Download CV</span>
              </motion.a>
            </div>
          </motion.div>

          <div className="space-y-6">
            {[
              { 
                title: "Full Stack Development", 
                desc: "Desenvolvimento completo do front ao back-end com React, Node.js e Next.js",
                icon: Code2,
                color: "#61dafb"
              },
              { 
                title: "Automations & AI Agents", 
                desc: "Criação de workflows com n8n e agentes de IA autônomos com LLMs",
                icon: Cpu,
                color: "#a855f7"
              },
              { 
                title: "Modern Tools", 
                desc: "TypeScript, Tailwind CSS, Prisma, Docker, Zod e shadcn/ui",
                icon: Zap,
                color: "#68a063"
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                <div className="flex items-start gap-4 p-6 rounded-xl bg-[#121217] border border-[#2E2E3A] hover:border-[#4A7A9B] transition-colors">
                  <div className="p-3 rounded-lg bg-[#1C1C24]" style={{ color: item.color }}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#E8E8EE] mb-1">{item.title}</h3>
                    <p className="text-[#5A5A72] text-sm">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
