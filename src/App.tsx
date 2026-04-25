import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import Projects from './pages/projects'
import Features from './pages/features'
import PRVisualMedia from './pages/prvisualmedia'
import Resume from './pages/resume'
import './App.css'

function App() {
   return (
      <HashRouter>
         <Navbar/>
         <main>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/projects" element={<Projects />} />
               <Route path="/features" element={<Features />} />
               <Route path="/pr-visual-media" element={<PRVisualMedia />} />
               <Route path="/resume" element={<Resume />} />
            </Routes>
         </main>
         <Footer />
      </HashRouter>
   )
}

export default App