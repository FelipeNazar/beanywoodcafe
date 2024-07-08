import React from 'react';
import Navbar from '../Components/Shared/Navbar';
import Footer from '../Components/Shared/Footer';
import Card from '../Components/Card';
import Benefits from '../Components/Beneficios';

function Inicio() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow flex flex-col items-center">
        <div className="relative w-full h-96">
          <img className='h-full w-full object-cover' src="https://beanywoodcafe.com/cdn/shop/t/56/assets/frame-22-6.webp?v=184039625063519688401717927558" alt="Café de fondo" />
          <div className="bg-black opacity-60 absolute inset-0"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white">
            <h1 className="text-6xl font-bold text-[#DFDFDF] drop-shadow-lg">Beany Wood Coffee Shop</h1>
            <p className="text-2xl text-[#C7C7C7] mt-4">El sabor clásico del café</p>
          </div>
        </div>
        <div className="container mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center text-center">
          <Card 
            Titulo="Beany Wood Cup" 
            Descripcion="Felicidad instantanea con solo una taza de Beany Wood Coffe" 
            NombreBoton="Ver Más" 
            Imagen="/Coffecup.png" 
            url="/#"
          />
          <Card 
            Titulo="Beany Wood Coffe" 
            Descripcion="Experimenta el café en cápsulas con el estilo vibrante de los años 60. Cada cápsula está diseñada para ofrecerte un momento de pura nostalgia y sabor." 
            NombreBoton="Ver Más" 
            Imagen="/Beany wood cafe para venta.jpg" 
            url="/CoffePage"
          />
          <Card 
            Titulo="Sucursales" 
            Descripcion="Visítanos en nuestras sucursales distribuidas a lo largo de Chile. Estamos cerca de ti para brindarte el mejor café y un servicio excepcional en cada visita." 
            NombreBoton="Ver Más" 
            Imagen="/Sucursal.jpg" 
            url="/AboutPage"
          />
        </div>
        <div>
          <Benefits/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Inicio;
