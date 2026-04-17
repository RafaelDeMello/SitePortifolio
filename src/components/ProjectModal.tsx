import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, User, Code2 } from 'lucide-react';

interface ProjectDetail {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  color: { from: string; to: string };
  image?: string;
  github: string | null;
  demo: string | null;
  status: 'completed' | 'in-progress' | 'planned';
  role: string;
  features: string[];
}

const projectDetails: Record<number, ProjectDetail> = {
  1: {
    id: 1,
    title: "Sistema de Agendamento para Estética Automotiva",
    description: "Aplicação web para agendamento de serviços automotivos com visualização de horários disponíveis.",
    fullDescription: "Sistema completo para gerenciamento de agendamentos de uma estética automotiva. Permite que clientes visualizem horários disponíveis em tempo real, façam reservas, recebam confirmações e lembretes. O painel administrativo permite gerenciar serviços, profissionais e disponibilidade.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    color: { from: "#1a2a3a", to: "#2a3a4a" },
    github: null,
    demo: null,
    status: 'completed',
    role: 'Desenvolvedor Full Stack',
    features: [
      'Calendário interativo com disponibilidade em tempo real',
      'Sistema de agendamento com múltiplos serviços',
      'Painel administrativo completo',
      'Notificações por email para clientes',
      'Responsivo para mobile e desktop'
    ]
  },
  2: {
    id: 2,
    title: "Gerador de Ordem de Serviço em PDF",
    description: "Aplicação web para geração de Ordens de Serviço em PDF para prestadores de estética automotiva.",
    fullDescription: "Aplicação web para geração de Ordens de Serviço em PDF, desenvolvida para pequenos prestadores de serviços de estética automotiva. Permite criar documentos profissionais com todos os dados do cliente, veículo, serviços realizados e valores, com exportação para PDF em formato A4.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "html2pdf.js"],
    color: { from: "#1a2a3a", to: "#2a4a5a" },
    image: "/imgs/pdf1.png",
    github: "https://github.com/RafaelDeMello/ExportPDF",
    demo: "https://export-pdf-plum.vercel.app/",
    status: 'completed',
    role: 'Desenvolvedor Full Stack',
    features: [
      'Formulário completo com dados da empresa, cliente e veículo',
      'Lista dinâmica de serviços com cálculo automático de subtotais e total geral',
      'Preview em tempo real do documento que será gerado',
      'Validação de campos obrigatórios com feedback visual',
      'Geração de PDF em alta resolução com layout fiel ao preview',
      'Design responsivo (funciona em desktop e mobile)'
    ]
  },
  3: {
    id: 3,
    title: "Website Institucional com Integração de API",
    description: "Site institucional com foco em conversão e integração com API externa.",
    fullDescription: "Website profissional para empresa do setor de tecnologia. Inclui integração com CRM para captura de leads, formulário de contato inteligente e dashboard administrativo para gestão de conteúdo.",
    tags: ["React", "Vite", "Tailwind CSS", "Axios"],
    color: { from: "#1a1a2a", to: "#2a2a3a" },
    github: null,
    demo: null,
    status: 'completed',
    role: 'Desenvolvedor Front-end',
    features: [
      'Design moderno e responsivo',
      'Otimizado para SEO e performance',
      'Formulários com validação em tempo real',
      'Integração com API de terceiros',
      'Painel CMS para gestão de conteúdo'
    ]
  },
  4: {
    id: 4,
    title: "Landing Pages com Foco em Conversão",
    description: "Landing pages otimizadas para conversão com CTA para WhatsApp.",
    fullDescription: "Conjunto de landing pages de alta conversão para diferentes campanhas de marketing. Cada página é otimizada para um público específico, com CTAs estratégicos e integração direta com WhatsApp Business.",
    tags: ["React", "Tailwind CSS", "Vite"],
    color: { from: "#2a1a2a", to: "#3a2a3a" },
    github: null,
    demo: null,
    status: 'completed',
    role: 'Desenvolvedor Front-end',
    features: [
      'Design focado em conversão',
      'A/B testing integrado',
      'Tracking de eventos com Analytics',
      'Integração com WhatsApp Business API',
      'Formulários pré-preenchidos'
    ]
  }
};

interface ProjectModalProps {
  projectId: number | null;
  onClose: () => void;
}

export function ProjectModal({ projectId, onClose }: ProjectModalProps) {
  const project = projectId ? projectDetails[projectId] : null;

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl md:max-h-[85vh] z-50 overflow-hidden rounded-2xl bg-[#121217] border border-[#2E2E3A] shadow-2xl"
          >
            <div 
              className="h-48 md:h-56 relative overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${project.color.from}, ${project.color.to})` }}
            >
              {project.image && (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-[#121217]/50 to-transparent" />
              
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="absolute bottom-4 left-6 right-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {project.title}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-white/10 backdrop-blur rounded-full text-white/90 border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(100vh-14rem)] md:max-h-[calc(85vh-14rem)]">
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-[#7A7A8E]">
                  <User className="w-4 h-4" />
                  <span>{project.role}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span 
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'completed' 
                        ? 'bg-green-500/20 text-green-400' 
                        : project.status === 'in-progress'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-blue-500/20 text-blue-400'
                    }`}
                  >
                    {project.status === 'completed' ? 'Concluído' : project.status === 'in-progress' ? 'Em progresso' : 'Planejado'}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium text-[#E8E8EE] mb-2">Sobre o projeto</h3>
                <p className="text-[#A8A8B8] leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium text-[#E8E8EE] mb-3 flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-[#4A7A9B]" />
                  Funcionalidades
                </h3>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#A8A8B8]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4A7A9B] mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4 pt-4 border-t border-[#2E2E3A]">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1C1C24] border border-[#2E2E3A] text-[#A8A8B8] hover:text-white hover:border-[#4A7A9B] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Ver Código
                  </a>
                ) : (
                  <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1C1C24]/50 border border-[#2E2E3A]/50 text-[#5A5A72] cursor-not-allowed">
                    <Github className="w-4 h-4" />
                    Privado
                  </span>
                )}
                
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#4A7A9B] text-white hover:bg-[#3d6a85] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver Demo
                  </a>
                ) : (
                  <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#4A7A9B]/50 text-[#8BAEC8] cursor-not-allowed">
                    <ExternalLink className="w-4 h-4" />
                    Em breve
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export { projectDetails };
