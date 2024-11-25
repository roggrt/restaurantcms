// // src/components/Layout.js
// import React from 'react';

// const Layout = ({ children }) => {
//   return (
//     <div>
//       {/* Aquí puedes agregar una barra de navegación o sidebar más adelante */}
//       <main style={{ padding: '20px' }}>
//         {children}
//       </main>
//     </div>
//   );
// };

// export default Layout;


// src/components/Layout.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;