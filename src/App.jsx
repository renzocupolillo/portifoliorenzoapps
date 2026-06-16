import './App.css'
import { Routes, Route, Link, NavLink } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Home</h1>

      <p>Bem-vindo ao meu portfólio.</p>

      <Link to="/sobre">
        <button>Ir para Sobre</button>
      </Link>
    </div>
  )
}

function Sobre() {
  return (
    <div>
      <h1>Sobre</h1>

      <p>Meu nome é Olavo e sou estudante.</p>

      <Link to="/projetos">
        <button>Ir para Projetos</button>
      </Link>
    </div>
  )
}

function Projetos() {
  return (
    <div>
      <h1>Projetos</h1>

      <ul>
        <li>Site em HTML e CSS sobre minecraft</li>
        <li>drone em hardware</li>
        <li>jogo em processo no godot</li>
      </ul>

      <Link to="/">
        <button>Voltar para Home</button>
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
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>
    </div>
  )
}

export default App