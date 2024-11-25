// // src/components/Navbar.js
// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { signOut } from 'firebase/auth';
// import { auth } from '../config/firebase';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [dropdownOpen, setDropdownOpen] = React.useState(false);

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       navigate('/login');
//     } catch (error) {
//       console.error('Error al cerrar sesión:', error);
//     }
//   };

//   return (
//     <nav className="bg-gray-800 text-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link to="/" className="text-xl font-bold">
//               Restaurant CMS
//             </Link>
//           </div>

//           {/* Navigation Links */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-center space-x-4">
//               <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded-md">
//                 Dashboard
//               </Link>
//               <Link to="/menu" className="hover:bg-gray-700 px-3 py-2 rounded-md">
//                 Menú
//               </Link>
//               <Link to="/horarios" className="hover:bg-gray-700 px-3 py-2 rounded-md">
//                 Horarios
//               </Link>
//               <Link to="/promociones" className="hover:bg-gray-700 px-3 py-2 rounded-md">
//                 Promociones
//               </Link>
//             </div>
//           </div>

//           {/* User Menu */}
//           <div className="relative ml-3">
//             <div>
//               <button
//                 onClick={() => setDropdownOpen(!dropdownOpen)}
//                 className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//               >
//                 <span className="sr-only">Abrir menú de usuario</span>
//                 <div className="h-8 w-8 rounded-full bg-gray-600 flex items-center justify-center">
//                   A
//                 </div>
//               </button>
//             </div>

//             {dropdownOpen && (
//               <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
//                 <button
//                   onClick={handleLogout}
//                   className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                 >
//                   Cerrar Sesión
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';

const Navbar = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold">
              Restaurant CMS
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded-md">
                Dashboard
              </Link>
              <Link to="/menu" className="hover:bg-gray-700 px-3 py-2 rounded-md">
                Menú
              </Link>
              <Link to="/horarios" className="hover:bg-gray-700 px-3 py-2 rounded-md">
                Horarios
              </Link>
              {/* <Link to="/promociones" className="hover:bg-gray-700 px-3 py-2 rounded-md">
                Promociones
              </Link> */}
              <Link to="/contenido" className="hover:bg-gray-700 px-3 py-2 rounded-md">
                Contenido
              </Link>
            </div>
          </div>

          {/* User Menu */}
          <div className="relative ml-3">
            <div>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Abrir menú de usuario</span>
                <div className="h-8 w-8 rounded-full bg-gray-600 flex items-center justify-center">
                  A
                </div>
              </button>
            </div>

            {dropdownOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Cerrar Sesión
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;