import './App.css';
import { Routes, Route } from 'react-router-dom';
import Inicio from './Pages/Inicio';
import Login from './Pages/Login';
import Register from './Pages/Register';
import CoffePage from './Pages/CoffePage';
import AboutPage from './Pages/AboutPage';
import GestionCoffeesPage from './Pages/GestionCoffe';
import ProtectedRoute from './Context/ProtectedRoute';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/coffepage" element={<ProtectedRoute roles={['ADMIN']}><CoffePage /></ProtectedRoute>} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/gestioncafe" element={<GestionCoffeesPage />} />
      </Routes>
    </div>
  );
}

export default App;