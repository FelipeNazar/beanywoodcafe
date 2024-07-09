import React from 'react';
import Navbar from '../Components/Shared/Navbar';
import Footer from '../Components/Shared/Footer';

const mockCoffees = [
  { username: 'NazarCustomer', email: 'felipe@alu.cl', disable: 0, locked:0  },
  { username: 'NazarAdmin', email: 'nazarfinv@gmail.com', disable: 0, locked:0 },
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
                  <th className="border px-4 py-2">username</th>
                  <th className="border px-4 py-2">email</th>
                  <th className="border px-4 py-2">disable</th>
                  <th className="border px-4 py-2">locked</th>
                  <th className="border px-4 py-2">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {mockCoffees.map((coffee) => (
                  <tr key={coffee.idCoffee}>
                    
                    <td className="border px-4 py-2">{coffee.username}</td>
                    <td className="border px-4 py-2">{coffee.email}</td>
                    <td className="border px-4 py-2">${coffee.disable}</td>
                    <td className="border px-4 py-2">${coffee.locked}</td>
                    <td className="border px-4 py-2">
                      <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Editar</button>
                      
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
