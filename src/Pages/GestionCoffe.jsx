import React from 'react';
import Navbar from '../Components/Shared/Navbar';
import Footer from '../Components/Shared/Footer';

function GestionCoffeesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow p-8">
        <h1 className="text-2xl font-bold mb-6">Nuevo Coffee</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form className="space-y-4">
            <input type="text" placeholder="Nombre del Coffee" className="w-full p-2 border rounded" />
            <textarea placeholder="Descripción" className="w-full p-2 border rounded"></textarea>
            <input type="text" placeholder="Precio" className="w-full p-2 border rounded" />
            <input type="file" className="w-full p-2 border rounded" />
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Crear</button>
          </form>
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
                {/* Aquí agregarías dinámicamente las filas con los datos */}
                <tr>
                  <td className="border px-4 py-2">1</td>
                  <td className="border px-4 py-2">Nombre Coffee</td>
                  <td className="border px-4 py-2">Descripción Coffee</td>
                  <td className="border px-4 py-2">$5.000</td>
                  <td className="border px-4 py-2">
                    <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Editar</button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded">Eliminar</button>
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

export default GestionCoffeesPage;