import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/10 bg-black/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          © 2024 Dev Portfolio. Todos os direitos reservados.
        </p>
        
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {['React', 'Framer Motion', 'Tailwind CSS'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs bg-white/5 rounded-full text-gray-500 border border-white/5"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
