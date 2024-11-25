// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-6 px-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm">© 2024 Restaurant CMS. Todos los derechos reservados.</p>
          </div>
          <div>
            <p className="text-sm">Versión 1.0.0</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;