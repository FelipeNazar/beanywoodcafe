import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Pages/Inicio';
import Login from './Pages/Login';
import Register from './Pages/Register';
import CoffePage from './Pages/CoffePage';
import AboutPage from './Pages/AboutPage';
import GestionCoffeesPage from './Pages/GestionCoffe';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/coffepage" element={<CoffePage/>}/>
          <Route path="/aboutpage" element={<AboutPage/>}/>
          <Route path="/gestioncafe" element={<GestionCoffeesPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
