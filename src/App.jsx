import { Link, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

function App() {
  return (
    <main>
      {/* Navigation */}
      <nav className="navbar">
        <Link to="/" className="logo">
          Kwesi<span>.</span>
        </Link>

        <div className="nav-links">
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <Link to="/contact" className="nav-cta">
          Let's Talk
        </Link>
      </nav>

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <footer>
        <div>
          <strong>
            Kwesi<span>.</span>
          </strong>
          <p>Web & Bot Developer</p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <p>© 2026 Kwesi. All rights reserved.</p>
      </footer>
    </main>
  )
}

export default App
