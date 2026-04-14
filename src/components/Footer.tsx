import { motion } from 'framer-motion';
import { profile } from '../data/content';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 px-6 border-t border-[#1C1C24] bg-[#0A0A0C]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#5A5A72] text-xs">
          © {currentYear} {profile.name}. Todos os direitos reservados.
        </p>
        
        <motion.div
          className="flex gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {['React', 'Framer Motion', 'Tailwind CSS'].map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-[#121217] rounded text-[#5A5A72] border border-[#1C1C24] font-mono"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
