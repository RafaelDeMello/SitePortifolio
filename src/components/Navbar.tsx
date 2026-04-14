import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { profile } from '../data/content';

export function Navbar() {
  const { scrollY } = useScroll();
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(10,10,12,0)', 'rgba(18,18,23,0.95)']
  );

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Projetos', id: 'projetos' },
    { label: 'Tecnologias', id: 'skills' },
    { label: 'Contato', id: 'contato' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        style={{ background }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-[#2E2E3A]"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.a 
            href="#" 
            className="text-2xl font-bold text-[#E8E8EE] tracking-wider"
            style={{ textShadow: '0 0 20px rgba(74,122,155,0.3)' }}
            whileHover={{ scale: 1.05 }}
            onClick={handleNavClick}
          >
            {profile.initials}
          </motion.a>
          
          <ul className="hidden lg:flex gap-8">
            {navItems.map((item, i) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
              >
                <a 
                  href={item.id === 'home' ? '#' : `#${item.id}`}
                  className={`font-medium transition-colors duration-300 relative group ${
                    activeSection === item.id 
                      ? 'text-[#8BAEC8]' 
                      : 'text-[#A8A8B8] hover:text-[#4A7A9B]'
                  }`}
                >
                  {item.label}
                  <span 
                    className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${
                      activeSection === item.id 
                        ? 'w-full bg-[#2A4A6A]' 
                        : 'w-0 bg-[#4A7A9B] group-hover:w-full'
                    }`} 
                  />
                </a>
              </motion.li>
            ))}
          </ul>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden z-[60] p-2 text-[#A8A8B8] hover:text-[#8BAEC8] transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[55] bg-black/50 lg:hidden"
              onClick={handleNavClick}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-72 z-[58] bg-[#121217] border-l border-[#2E2E3A] lg:hidden"
            >
              <div className="flex flex-col p-8 pt-20 gap-6">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.id}
                    href={item.id === 'home' ? '#' : `#${item.id}`}
                    onClick={handleNavClick}
                    className={`text-xl font-medium transition-colors duration-300 ${
                      activeSection === item.id 
                        ? 'text-[#8BAEC8]' 
                        : 'text-[#A8A8B8] hover:text-[#4A7A9B]'
                    }`}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    whileHover={{ x: 5 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
