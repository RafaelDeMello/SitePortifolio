import { useState, useEffect, useMemo, lazy, Suspense } from 'react'
import { Cursor } from './components/Cursor'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

const ProjectModal = lazy(() => import('./components/ProjectModal').then(module => ({ default: module.ProjectModal })))

function App() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const showCursor = useMemo(() => !isMobile, [isMobile]);

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-white overflow-x-hidden">
      {showCursor && <Cursor />}
      <Navbar />
      <Hero />
      <About />
      <Projects onProjectClick={setSelectedProject} />
      <Suspense fallback={null}>
        <ProjectModal 
          projectId={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      </Suspense>
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
