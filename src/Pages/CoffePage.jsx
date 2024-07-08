import React from 'react';
import Navbar from '../Components/Shared/Navbar';
import Footer from '../Components/Shared/Footer';
import CoffeeComponent from '../Components/CoffeComponent';

function CoffePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-white flex flex-col justify-center items-center">
        <CoffeeComponent />
      </main>
      <Footer />
    </div>
  );
}

export default CoffePage;
