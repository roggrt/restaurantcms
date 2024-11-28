
// // // src/components/Navbar.js
// // import React from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { signOut } from 'firebase/auth';
// // import { auth } from '../config/firebase';

// // const Navbar = () => {
// //   const navigate = useNavigate();
// //   const [dropdownOpen, setDropdownOpen] = React.useState(false);

// //   const handleLogout = async () => {
// //     try {
// //       await signOut(auth);
// //       navigate('/login');
// //     } catch (error) {
// //       console.error('Error al cerrar sesión:', error);
// //     }
// //   };

// //   return (
// //     <nav className="bg-gray-800 text-white">
// //       <div className="max-w-7xl mx-auto px-4">
// //         <div className="flex justify-between items-center h-16">
// //           {/* Logo */}
// //           <div className="flex-shrink-0">
// //             <Link to="/" className="text-xl font-bold">
// //               Restaurant CMS
// //             </Link>
// //           </div>

// //           {/* Navigation Links */}
// //           <div className="hidden md:block">
// //             <div className="ml-10 flex items-center space-x-4">
// //               <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded-md">
// //                 Dashboard
// //               </Link>
// //               <Link to="/menu" className="hover:bg-gray-700 px-3 py-2 rounded-md">
// //                 Menú
// //               </Link>
// //               <Link to="/horarios" className="hover:bg-gray-700 px-3 py-2 rounded-md">
// //                 Horarios
// //               </Link>
// //               {/* <Link to="/promociones" className="hover:bg-gray-700 px-3 py-2 rounded-md">
// //                 Promociones
// //               </Link> */}
// //               <Link to="/contenido" className="hover:bg-gray-700 px-3 py-2 rounded-md">
// //                 Contenido
// //               </Link>
// //             </div>
// //           </div>

// //           {/* User Menu */}
// //           <div className="relative ml-3">
// //             <div>
// //               <button
// //                 onClick={() => setDropdownOpen(!dropdownOpen)}
// //                 className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
// //               >
// //                 <span className="sr-only">Abrir menú de usuario</span>
// //                 <div className="h-8 w-8 rounded-full bg-gray-600 flex items-center justify-center">
// //                   A
// //                 </div>
// //               </button>
// //             </div>

// //             {dropdownOpen && (
// //               <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
// //                 <button
// //                   onClick={handleLogout}
// //                   className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
// //                 >
// //                   Cerrar Sesión
// //                 </button>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;


// import React, { useState, useRef, useEffect } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { signOut } from 'firebase/auth';
// import { auth } from '../config/firebase';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const mobileMenuRef = useRef(null);

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       navigate('/login');
//     } catch (error) {
//       console.error('Error signing out:', error);
//     }
//   };

//   // Close dropdowns when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownOpen(false);
//       }
//       if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
//         setMobileMenuOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   // Close mobile menu on route change
//   useEffect(() => {
//     setMobileMenuOpen(false);
//   }, [location]);

//   const isActivePath = (path) => {
//     return location.pathname === path ? 'bg-gray-900' : '';
//   };

//   const navLinks = [
//     { path: '/', text: 'Dashboard' },
//     { path: '/menu', text: 'Menu' },
//     { path: '/horarios', text: 'Schedule' },
//     { path: '/contenido', text: 'Content' }
//   ];

//   return (
//     <nav className="bg-gray-800 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0 flex items-center">
//             <Link to="/" className="text-xl font-bold">
//               Restaurant CMS
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="flex md:hidden">
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               {/* Menu icon */}
//               {!mobileMenuOpen ? (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               ) : (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               )}
//             </button>
//           </div>

//           {/* Desktop Navigation Links */}
//           <div className="hidden md:flex md:items-center md:space-x-4">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors duration-200 ${isActivePath(link.path)}`}
//               >
//                 {link.text}
//               </Link>
//             ))}
//           </div>

//           {/* User Menu */}
//           <div className="hidden md:block relative ml-3" ref={dropdownRef}>
//             <button
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//               className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//             >
//               <span className="sr-only">Open user menu</span>
//               <div className="h-8 w-8 rounded-full bg-gray-600 flex items-center justify-center">
//                 A
//               </div>
//             </button>

//             {/* Desktop Dropdown */}
//             {dropdownOpen && (
//               <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-50">
//                 <button
//                   onClick={handleLogout}
//                   className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                 >
//                   Sign Out
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden" ref={mobileMenuRef}>
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors duration-200 ${isActivePath(link.path)}`}
//               >
//                 {link.text}
//               </Link>
//             ))}
//             <button
//               onClick={handleLogout}
//               className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
//             >
//               Sign Out
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileButtonRef = useRef(null);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      
      // Check if click is outside mobile menu AND mobile button
      if (
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target) &&
        mobileButtonRef.current &&
        !mobileButtonRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActivePath = (path) => {
    return location.pathname === path ? 'bg-gray-900' : '';
  };

  const navLinks = [
    { path: '/', text: 'Dashboard' },
    { path: '/menu', text: 'Menu' },
    { path: '/horarios', text: 'Schedule' },
    { path: '/contenido', text: 'Content' }
  ];

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold">
              Restaurant CMS
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              ref={mobileButtonRef}
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors duration-200 ${isActivePath(link.path)}`}
              >
                {link.text}
              </Link>
            ))}
          </div>

          {/* User Menu */}
          <div className="hidden md:block relative ml-3" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open user menu</span>
              <div className="h-8 w-8 rounded-full bg-gray-600 flex items-center justify-center">
                A
              </div>
            </button>

            {/* Desktop Dropdown */}
            {dropdownOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-50">
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden" ref={mobileMenuRef}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors duration-200 ${isActivePath(link.path)}`}
              >
                {link.text}
              </Link>
            ))}
            <button
              onClick={handleLogout}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;