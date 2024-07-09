import React from 'react';
import Navbar from '../Components/Shared/Navbar';
import Footer from '../Components/Shared/Footer';

function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-white p-8">
        <section className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">Acerca de Beany Wood Coffee Shop</h1>
          <p className="text-xl mb-4">
            Bienvenidos a Beany Wood Coffee Shop, donde la pasión por el café y el estilo retro de los años 60 se unen para ofrecerte una experiencia única.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h2 className="text-2xl font-bold mb-4">Nuestra Historia</h2>
              <p className="mb-4">
                Fundada en 2024, Beany Wood Coffee Shop nació con el sueño de crear un lugar donde los amantes del café puedan disfrutar de bebidas de alta calidad en un ambiente nostálgico. Desde nuestras humildes comienzos, hemos crecido para convertirnos en un referente en la comunidad cafetera.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Nuestra Misión</h2>
              <p className="mb-4">
                Nuestra misión es proporcionar una experiencia de café excepcional, combinando el sabor y la calidad con un toque de nostalgia. Nos esforzamos por crear un espacio acogedor donde cada taza de café cuenta una historia.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Nuestra Visión</h2>
              <p className="mb-4">
                Aspiramos a ser líderes en la industria del café, reconocidos por nuestra dedicación a la excelencia y nuestro compromiso con la comunidad. Queremos expandir nuestra presencia y llevar la magia de Beany Wood Coffee Shop a más personas.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Nuestros Valores</h2>
              <p className="mb-4">
                <ul className="list-disc list-inside">
                  <li>Calidad: Solo utilizamos los mejores granos de café.</li>
                  <li>Comunicación: Fomentamos una relación abierta con nuestros clientes.</li>
                  <li>Innovación: Buscamos constantemente nuevas formas de mejorar.</li>
                  <li>Sostenibilidad: Nos comprometemos a prácticas responsables y amigables con el medio ambiente.</li>
                </ul>
              </p>
            </div>
          </div>
        </section>
        <section className="container mx-auto text-center mt-12">
          <h2 className="text-3xl font-bold mb-8">Desarrolladores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           
            <div className="text-center">
              <img src="/felipenazar.webp" alt="Benjamín Navarrete" className="w-32 h-32 mx-auto mb-4 rounded-full" />
              <h3 className="text-xl font-semibold">Felipe Nazar</h3>
              <p className="text-gray-600">Desarrollador Full Stack</p>
            </div>
            
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;
