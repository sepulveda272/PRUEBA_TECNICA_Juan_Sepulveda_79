import React, { useState } from 'react';
import logo from '../assets/img/cajasan.jpg';
import '../assets/css/styless.css';

export const NavbarCandidatos = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  // Extraer información del localStorage
  const storedUser = localStorage.getItem('user');
  const localUser = storedUser ? JSON.parse(storedUser) : null;
  console.log(localUser);


  const storedToken = localStorage.getItem('token');
  const localToken = storedToken ? JSON.parse(storedToken) : null;
  const showNoToken = !localToken; 

  const handleLogout = () => {
    // Elimina el token del localStorage
    localStorage.clear()
  
    // Elimina la cookie (puedes usar un método adecuado para tu aplicación)
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  
    // Redirecciona al usuario al inicio (puedes ajustar la ruta según tu estructura de rutas)
    window.location.href = '/';
  };

  return (
    <>
     <header className="header">
          <nav className="navbar" id="main-navbar">
            <div className='contenedor-hamburguer-menu'>
              <img src={logo} alt=""  width={"100px"}/>

              <div className='contenido-hamburguer-menu'>
                <div className={`links ${menuOpen ? 'mobile-menu active' : ''}`}>
                      <a href="http://localhost:3000/usuariosApi"><i className=""></i> Usuarios Api Randomuser</a>
                      <a href="http://localhost:3000/VW_USUARIOS_CON_DIRECCIONES">VW_USUARIOS_CON_DIRECCIONES</a>
                      {/* { showNoToken && <a href="http://localhost:3000/register">Register</a>} */}
                   
                  </div>
                  { localToken && <a href='#' onClick={handleLogout}>Log out</a>}
                  <div className="hamburger-menu" onClick={handleMenuClick}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M4 6l16 0" />
                        <path d="M4 12l16 0" />
                        <path d="M4 18l16 0" />
                      </svg>
                  </div>
              </div>
              
            </div>
          </nav>

      </header>
    
    </>
    
  );
};