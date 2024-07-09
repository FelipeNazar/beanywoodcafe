import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-[#e8aa3b] p-4 shadow-md">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <a href="/">
              <img src="https://beanywoodcafe.com/cdn/shop/t/56/assets/group-9.svg?v=96320484612259403891717927558" alt="Beany Wood Cafe" className="h-12" />
            </a>
            <a href="/">
              <div className="text-white text-xl">Beany Wood Coffee</div>
            </a>
          </div>
          <div>
            <a href="/" className="py-2 px-4 mx-2 font-medium text-white rounded hover:bg-[#e6a532] hover:text-white transition duration-300">Inicio</a>
            <a href="/CoffePage" className="py-2 px-4 mx-2 font-medium text-white rounded hover:bg-[#e6a532] hover:text-white transition duration-300">Coffees</a>
            <a href="/AboutPage" className="py-2 px-4 mx-2 font-medium text-white rounded hover:bg-[#e6a532] hover:text-white transition duration-300">Acerca de</a>
            
            {user ? (
              <>
                {user.rol.includes('ADMIN') && (
                  <>
                    <a href="/gestioncafe" className="py-2 px-4 mx-2 font-medium text-white rounded hover:bg-[#e6a532] hover:text-white transition duration-300">Gestion Coffees</a>
                    <a href="/gestioncafeclientes" className="py-2 px-4 mx-2 font-medium text-white rounded hover:bg-[#e6a532] hover:text-white transition duration-300">Clientes</a>
                  </>
                )}
                <button onClick={logout} className="py-2 px-4 mx-2 font-medium text-white rounded hover:bg-[#e6a532] hover:text-white transition duration-300">Salir</button>
              </>
            ) : (
              <>
                <a href="/login" className="py-2 px-4 mx-2 font-medium text-white rounded hover:bg-[#e6a532] hover:text-white transition duration-300">Iniciar Sesión</a>
                <a href="/register" className="py-2 px-4 mx-2 font-medium text-white rounded hover:bg-[#e6a532] hover:text-white transition duration-300">Registrarse</a>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
