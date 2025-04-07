import { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function Menu() {

  return (
    <nav className="c-menu">
      <Link to="/">Aleatorios</Link>
      <Link to="/capturados">Capturados</Link>
      <Link to="/Favoritos">Favoritos</Link>
      <Link to="/Lista">Lista</Link>
      <Link to="/Usuarios">Usuarios</Link>
    </nav>
)
}

export default Menu