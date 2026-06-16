import './App.css'
import { Routes, Route, Link, NavLink } from 'react-router-dom'

function Menu() {
  return (
    <div>
      <h1>Menu</h1>

      <p>Olá esse é o meu portifólio.</p>

      <Link to="/sobre">
        <button>go to Sobre</button>
      </Link>
    </div>
  )
}

function Sobre() {
  return (
    <div>
      <h1>Sobre</h1>

      <p>Eu sou o Renzo, estudante do ifrj.</p>

      <Link to="/projetos">
        <button>go to Projetos</button>
      </Link>
    </div>
  )
}

function Projetos() {
  return (
    <div>
      <h1>Projetos</h1>

      <ul>
        <li>garra em hardware</li>
        <li>jogo projeto final hero legacy em godot</li>
        <li>site em html do milamB</li>
      </ul>

      <Link to="/">
        <button>back to Home</button>
      </Link>
    </div>
  )
}

function App() {
  return (
    <div>
      <nav>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            fontWeight: isActive ? 'bold' : 'normal',
            marginRight: '15px'
          })}
        >
          Home
        </NavLink>

        <NavLink
          to="/sobre"
          style={({ isActive }) => ({
            fontWeight: isActive ? 'bold' : 'normal',
            marginRight: '15px'
          })}
        >
          Sobre
        </NavLink>

        <NavLink
          to="/projetos"
          style={({ isActive }) => ({
            fontWeight: isActive ? 'bold' : 'normal'
          })}
        >
          Projetos
        </NavLink>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>
    </div>
  )
}

export default App