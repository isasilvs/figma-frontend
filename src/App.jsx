import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Home from './pages/Home/page'
import Galeria from './pages/Galeria/page'
import Contato from './pages/Contatos/page'
import Header from './components/Header/Header'

export default function App() {
  
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/galeria" element={<Galeria/>}></Route>
        <Route path="/contato" element={<Contato/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

