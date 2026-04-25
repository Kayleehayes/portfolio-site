import { NavLink } from 'react-router-dom'

function Navbar() {
   return (
      <nav className="nav">
         <div className="nav-inner">
            <NavLink to="/" className="nav-name">Kaylee Hayes</NavLink>
            <ul className="nav-links">
               <li><NavLink to="/" end>Home</NavLink></li>
               <li><NavLink to="/projects">Projects</NavLink></li>
               <li><NavLink to="/features">Features</NavLink></li>
               <li><NavLink to="/pr-visual-media">PR + Visual Media</NavLink></li>
               <li><NavLink to="/resume">Resume</NavLink></li>
            </ul>
         </div>
      </nav>
   )
}

export default Navbar