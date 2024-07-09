import React from 'react';
import { FaSearch } from 'react-icons/fa';

function CoffeeCard({ titulo, descripcion, precio, imagen }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md m-4">
      <img className="rounded-t-lg w-full h-48 object-contain" src={imagen} alt={titulo} />
      <div className="p-5 flex flex-col items-center">
        <h5 className="mb-2 text-2xl font-bold text-gray-900 text-center">{titulo}</h5>
        <p className="mb-3 font-normal text-gray-700 text-center">{descripcion}</p>
        <p className="mb-3 font-bold text-gray-900 text-center">{precio}</p>
        <button className="px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800">
          Opiniones
        </button>
      </div>
    </div>
  );
}

function CoffeeComponent() {
  return (
    <div className="container mx-auto mt-12">
      <div className="relative w-1/2 mb-8 ml-10">
        <input
          type="text"
          placeholder="Nombre Coffee"
          className="w-full p-4 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 pl-10"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <CoffeeCard 
          titulo="Original Classic" 
          descripcion="Café intenso, cálido y con un sabor excepcional." 
          precio="$7.000" 
          imagen="/cafe1.webp" 
        />
        <CoffeeCard 
          titulo="Working Beany" 
          descripcion="Café muy intenso, mezcla de ricos arábicas y robustas." 
          precio="$5.000" 
          imagen="/cafe2.webp"  
        />
        <CoffeeCard 
          titulo="Colombia" 
          descripcion="Café suave con notas afrutadas y apreciada acidez." 
          precio="$5.000" 
          imagen="/cafe3.webp"  
        />
        <CoffeeCard 
          titulo="Cloudy Beany" 
          descripcion="Café con aromas frutales y un cuerpo redondo." 
          precio="$5.000" 
          imagen="/cafe4.webp" 
        />
      </div>
    </div>
  );
}

export default CoffeeComponent;
