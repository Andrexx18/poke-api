import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import Menu from'./Componentes/Menu'
import Aleatorios from'./Componentes/Aleatorios'
import Capturados from'./Componentes/Capturados'
import Favoritos from'./Componentes/Favoritos'
import Lista from'./Componentes/Lista'
import Pokemon from'./Componentes/Pokemon'
import Usuarios from'./Componentes/Usuarios'


function App() {

  return (
    
    <Router>
      
      <Menu />

      <Routes>

      <Route path="/" element={<Aleatorios />} />
        <Route path="/Capturados" element={<Capturados />} />
        <Route path="/Favoritos" element={<Favoritos />} />
        <Route path="/Lista" element={<Lista />} />
        <Route path="/Usuarios" element={<Usuarios />} />

      </Routes>
    </Router>
  )
}

export default App
