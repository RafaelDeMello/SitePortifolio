import { useState } from 'react'
import { Cursor } from './components/Cursor'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { ProjectModal } from './components/ProjectModal'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-white overflow-x-hidden">
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Projects onProjectClick={setSelectedProject} />
      <ProjectModal 
        projectId={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
