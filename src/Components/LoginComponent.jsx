import React, { useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

function LoginComponent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
  };

  return (
    <div className="lg:w-2/6 md:w-1/2 bg-[#e8aa3b] rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
      <h2 className="text-white text-lg font-medium title-font mb-5">Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="relative mb-4">
          <label htmlFor="username" className="leading-7 text-sm text-white">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="password" className="leading-7 text-sm text-white">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Acceder</button>
      </form>
      <p className="text-xs text-white mt-3">¿No posees cuenta? <span><strong><a href="/register">Regístrate</a></strong></span></p>
    </div>
  );
}

export default LoginComponent;
