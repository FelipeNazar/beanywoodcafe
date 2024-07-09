import React from 'react';
import Navbar from '../Components/Shared/Navbar';
import Footer from '../Components/Shared/Footer';

const mockCoffees = [
  { idCoffee: 1, name: 'Coffee #1', description: 'Descripción Coffee #1', price: 4500 },
  { idCoffee: 2, name: 'Coffee #2', description: 'Descripción Coffee #2', price: 5000 },
  // Puedes agregar más datos aquí
];

function GestionCoffeesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow p-8">
        <h1 className="text-2xl font-bold mb-6">Clientes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="overflow-x-auto">
            <table className="min-w-full border">
              <thead>
                <tr>
                  <th className="border px-4 py-2">ID</th>
                  <th className="border px-4 py-2">Nombre</th>
                  <th className="border px-4 py-2">Descripción</th>
                  <th className="border px-4 py-2">Precio</th>
                  <th className="border px-4 py-2">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {mockCoffees.map((coffee) => (
                  <tr key={coffee.idCoffee}>
                    <td className="border px-4 py-2">{coffee.idCoffee}</td>
                    <td className="border px-4 py-2">{coffee.name}</td>
                    <td className="border px-4 py-2">{coffee.description}</td>
                    <td className="border px-4 py-2">${coffee.price}</td>
                    <td className="border px-4 py-2">
                      <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Editar</button>
                      <button className="bg-red-500 text-white px-2 py-1 rounded">Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default GestionCoffeesPage;
