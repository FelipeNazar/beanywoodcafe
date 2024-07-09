import React from 'react';
import Navbar from '../Components/Shared/Navbar';
import Footer from '../Components/Shared/Footer';

function GestionCoffeCliente() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow p-8">
        <h1 className="text-2xl font-bold mb-6">Clientes </h1>
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
                {/* Aquí agregarías dinámicamente las filas con los datos */}
                <tr>
                  <td className="border px-4 py-2">FelipeCustomer</td>
                  <td className="border px-4 py-2">felipe@ucm.cl</td>
                  <td className="border px-4 py-2">0</td>
                  <td className="border px-4 py-2">0</td>
                  <td className="border px-4 py-2">
                    <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Editar</button>
                    
                  </td>
                </tr>
                {/* Fin de la fila dinámica */}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default GestionCoffeCliente;