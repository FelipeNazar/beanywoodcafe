import React from 'react';
import { FaShippingFast, FaClock, FaLock, FaUndoAlt } from 'react-icons/fa';

function Benefits() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
          <img className="mx-auto mb-4 w-16 h-16" src="https://beanywoodcafe.com/cdn/shop/t/56/assets/vector-24.svg?v=93742551962501684481717927558"
           alt="Envíos" />
            <h3 className="text-xl font-bold mb-2">ENVÍOS GRATIS</h3>
            <p>Envíos gratis en pedidos superiores a $20.000</p>
          </div>
          <div>
          <img className="mx-auto mb-4 w-16 h-16" src="https://beanywoodcafe.com/cdn/shop/t/56/assets/frame-14.svg?v=3009536388647769431717927558"
           alt="Periodo de Entrega" />
            <h3 className="text-xl font-bold mb-2">PERIODO DE ENTREGA</h3>
            <p>Chile: 24/72h, resto de Latinoamérica: 4-7 días</p>
          </div>
          <div>
          <img className="mx-auto mb-4 w-16 h-16" src="https://beanywoodcafe.com/cdn/shop/t/56/assets/frame-15.svg?v=31089043716762985921717927558" 
          alt="Transacciones" />
            <h3 className="text-xl font-bold mb-2">TRANSACCIÓN SEGURA</h3>
            <p>Apple Pay, Shop Pay, y todas las tarjetas de débito y crédito aceptadas.</p>
          </div>
          <div>
          <img className="mx-auto mb-4 w-16 h-16" src="https://beanywoodcafe.com/cdn/shop/t/56/assets/frame-16-3.svg?v=131697928173463874481717927558" 
          alt="Devoluciones" />
            <h3 className="text-xl font-bold mb-2">DEVOLUCIONES</h3>
            <p>Contáctanos para procesar tu devolución de manera sencilla.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
