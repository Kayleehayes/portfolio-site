import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Features from './pages/Features'
import PRVisualMedia from './pages/PRVisualMedia'
import Resume from './pages/Resume'
import './App.css'

function App() {
   return (
      <HashRouter>
         <Navbar />
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