import './App.css';
import { Routes, Route } from 'react-router-dom';
import Inicio from './Pages/Inicio';
import Login from './Pages/Login';
import Register from './Pages/Register';
import CoffePage from './Pages/CoffePage';
import AboutPage from './Pages/AboutPage';
import GestionCoffeesPage from './Pages/GestionCoffe';
import ProtectedRoute from './Context/ProtectedRoute';
import GestionCoffeCliente from './Pages/GestionCoffeCliente';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/coffepage" element={<CoffePage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/gestioncafe" element={<ProtectedRoute roles={['ADMIN']}><GestionCoffeesPage /></ProtectedRoute>} />
        <Route path="/gestioncafeclientes" element={<ProtectedRoute roles={['ADMIN']}><GestionCoffeCliente/></ProtectedRoute>} />
      </Routes>
    </div>
  );
}

export default App;