import React, { useState, useEffect, useContext } from 'react';
import Navbar from '../Components/Shared/Navbar';
import Footer from '../Components/Shared/Footer';
import { AuthContext } from '../Context/AuthContext';

function GestionCoffeesPage() {
  const [coffees, setCoffees] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const { authToken } = useContext(AuthContext);

  useEffect(() => {
    fetch('http://localhost:8080/api/coffee', {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    })
      .then(response => response.json())
      .then(data => setCoffees(data))
      .catch(error => console.error('Error:', error));
  }, [authToken]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCoffee = {
      name,
      description,
      price,
      image64: image.split(',')[1] // remove base64 prefix
    };

    fetch('http://localhost:8080/api/coffee/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify(newCoffee)
    })
      .then(response => response.json())
      .then(data => {
        setCoffees([...coffees, data]);
        setName('');
        setDescription('');
        setPrice('');
        setImage(null);
      })
      .catch(error => console.error('Error:', error));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/api/coffee/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    })
      .then(() => {
        setCoffees(coffees.filter(coffee => coffee.idCoffee !== id));
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow p-8">
        <h1 className="text-2xl font-bold mb-6">Nuevo Coffee</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nombre del Coffee"
              className="w-full p-2 border rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              placeholder="Descripción"
              className="w-full p-2 border rounded"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <input
              type="text"
              placeholder="Precio"
              className="w-full p-2 border rounded"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              type="file"
              className="w-full p-2 border rounded"
              onChange={handleImageChange}
            />
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
                {coffees.map((coffee) => (
                  <tr key={coffee.idCoffee}>
                    <td className="border px-4 py-2">{coffee.idCoffee}</td>
                    <td className="border px-4 py-2">{coffee.name}</td>
                    <td className="border px-4 py-2">{coffee.description}</td>
                    <td className="border px-4 py-2">${coffee.price}</td>
                    <td className="border px-4 py-2">
                      <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDelete(coffee.idCoffee)}>Eliminar</button>
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
