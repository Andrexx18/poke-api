import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AppProvider } from './Contexto/contexto';
import { supabase } from './supabase';
import './App.css';

import Menu from './Componentes/Menu';
import Aleatorios from './Componentes/Aleatorios';
import Capturados from './Componentes/Capturados';
import Favoritos from './Componentes/Favoritos';
import Lista from './Componentes/Lista';
import Pokemon from './Componentes/Pokemon';
import Usuario from './Componentes/Usuario';
import Login from './Componentes/Login';
import Registro from './Componentes/Registro';
import Administrador from './Componentes/Administrador';

function App() {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function verificarSesion() {
      const { data: { session } } = await supabase.auth.getSession();
      setUsuario(session?.user || null);
      setCargando(false);
    }

    verificarSesion();

    supabase.auth.onAuthStateChange((_event, session) => {
      setUsuario(session?.user || null);
    });
  }, []);

  if (cargando) return <p>Cargando...</p>;

  return (
    <AppProvider>
      <Router>
        {usuario && <Menu />}

        <Routes>
          {}
          <Route path="/" element={usuario ? <Lista /> : <Navigate to="/login" />} />
          <Route path="/usuarios" element={usuario ? <Usuario /> : <Navigate to="/login" />} />
          <Route path="/aleatorios" element={usuario ? <Aleatorios /> : <Navigate to="/login" />} />
          <Route path="/capturados" element={usuario ? <Capturados /> : <Navigate to="/login" />} />
          <Route path="/favoritos" element={usuario ? <Favoritos /> : <Navigate to="/login" />} />
          <Route path="/pokemon/:name" element={usuario ? <Pokemon /> : <Navigate to="/login" />} />
          <Route path="/administrador" element={usuario ? <Administrador /> : <Navigate to="/login" />} />

          {}
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;