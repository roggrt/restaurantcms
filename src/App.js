// // // // src/App.js
// // // import React from 'react';
// 

// // import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// // // import { onAuthStateChanged } from 'firebase/auth';
// // // import { auth } from './config/firebase';
// // // import Login from './pages/Login';
// // // import Dashboard from './pages/Dashboard';
// // // import Layout from './components/Layout';

// // // // Componentes temporales para las rutas
// // // const MenuPage = () => <div className="p-4"><h1 className="text-2xl">Gestión de Menú</h1></div>;
// // // const HorariosPage = () => <div className="p-4"><h1 className="text-2xl">Gestión de Horarios</h1></div>;
// // // const PromocionesPage = () => <div className="p-4"><h1 className="text-2xl">Gestión de Promociones</h1></div>;
// // // const ConfiguracionPage = () => <div className="p-4"><h1 className="text-2xl">Configuración</h1></div>;

// // // function App() {
// // //   const [user, setUser] = React.useState(null);
// // //   const [loading, setLoading] = React.useState(true);

// // //   React.useEffect(() => {
// // //     const unsubscribe = onAuthStateChanged(auth, (user) => {
// // //       setUser(user);
// // //       setLoading(false);
// // //     });

// // //     return () => unsubscribe();
// // //   }, []);

// // //   if (loading) {
// // //     return (
// // //       <div className="min-h-screen flex items-center justify-center">
// // //         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <Router>
// // //       <Routes>
// // //         <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
// // //         <Route
// // //           path="/"
// // //           element={
// // //             user ? (
// // //               <Layout>
// // //                 <Dashboard />
// // //               </Layout>
// // //             ) : (
// // //               <Navigate to="/login" />
// // //             )
// // //           }
// // //         />
// // //         <Route
// // //           path="/menu"
// // //           element={
// // //             user ? (
// // //               <Layout>
// // //                 <MenuPage />
// // //               </Layout>
// // //             ) : (
// // //               <Navigate to="/login" />
// // //             )
// // //           }
// // //         />
// // //         <Route
// // //           path="/horarios"
// // //           element={
// // //             user ? (
// // //               <Layout>
// // //                 <HorariosPage />
// // //               </Layout>
// // //             ) : (
// // //               <Navigate to="/login" />
// // //             )
// // //           }
// // //         />
// // //         <Route
// // //           path="/promociones"
// // //           element={
// // //             user ? (
// // //               <Layout>
// // //                 <PromocionesPage />
// // //               </Layout>
// // //             ) : (
// // //               <Navigate to="/login" />
// // //             )
// // //           }
// // //         />
// // //         <Route
// // //           path="/configuracion"
// // //           element={
// // //             user ? (
// // //               <Layout>
// // //                 <ConfiguracionPage />
// // //               </Layout>
// // //             ) : (
// // //               <Navigate to="/login" />
// // //             )
// // //           }
// // //         />
// // //       </Routes>
// // //     </Router>
// // //   );
// // // }

// // // export default App;


// // // src/App.js
// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// // import { onAuthStateChanged } from 'firebase/auth';
// // import { auth } from './config/firebase';

// // // Importación de páginas
// // import Login from './pages/Login';
// // import Dashboard from './pages/Dashboard';
// // import Layout from './components/Layout';
// // import Menu from './pages/Menu'; // Esta es la nueva página que implementaremos

// // // Componentes temporales para las rutas que implementaremos después
// // const HorariosPage = () => (
// //   <div className="container mx-auto p-4">
// //     <h1 className="text-2xl font-bold mb-4">Gestión de Horarios</h1>
// //     <p className="text-gray-600">Esta sección está en desarrollo...</p>
// //   </div>
// // );

// // const PromocionesPage = () => (
// //   <div className="container mx-auto p-4">
// //     <h1 className="text-2xl font-bold mb-4">Gestión de Promociones</h1>
// //     <p className="text-gray-600">Esta sección está en desarrollo...</p>
// //   </div>
// // );

// // const ConfiguracionPage = () => (
// //   <div className="container mx-auto p-4">
// //     <h1 className="text-2xl font-bold mb-4">Configuración</h1>
// //     <p className="text-gray-600">Esta sección está en desarrollo...</p>
// //   </div>
// // );

// // function App() {
// //   const [user, setUser] = React.useState(null);
// //   const [loading, setLoading] = React.useState(true);

// //   React.useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (user) => {
// //       setUser(user);
// //       setLoading(false);
// //     });
// //     return () => unsubscribe();
// //   }, []);

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center">
// //         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
// //       </div>
// //     );
// //   }

// //   // Componente para proteger rutas
// //   const ProtectedRoute = ({ children }) => {
// //     if (!user) {
// //       return <Navigate to="/login" />;
// //     }
// //     return <Layout>{children}</Layout>;
// //   };

// //   return (
// //     <Router>
// //       <Routes>
// //         {/* Ruta pública */}
// //         <Route 
// //           path="/login" 
// //           element={user ? <Navigate to="/" /> : <Login />} 
// //         />

// //         {/* Rutas protegidas */}
// //         <Route
// //           path="/"
// //           element={
// //             <ProtectedRoute>
// //               <Dashboard />
// //             </ProtectedRoute>
// //           }
// //         />

// //         <Route
// //           path="/menu"
// //           element={
// //             <ProtectedRoute>
// //               <Menu />
// //             </ProtectedRoute>
// //           }
// //         />

// //         <Route
// //           path="/horarios"
// //           element={
// //             <ProtectedRoute>
// //               <HorariosPage />
// //             </ProtectedRoute>
// //           }
// //         />

// //         <Route
// //           path="/promociones"
// //           element={
// //             <ProtectedRoute>
// //               <PromocionesPage />
// //             </ProtectedRoute>
// //           }
// //         />

// //         <Route
// //           path="/configuracion"
// //           element={
// //             <ProtectedRoute>
// //               <ConfiguracionPage />
// //             </ProtectedRoute>
// //           }
// //         />

// //         {/* Ruta para manejar URLs no encontradas */}
// //         <Route 
// //           path="*" 
// //           element={
// //             <ProtectedRoute>
// //               <div className="container mx-auto p-4">
// //                 <h1 className="text-2xl font-bold mb-4">404 - Página no encontrada</h1>
// //                 <p className="text-gray-600">La página que buscas no existe.</p>
// //               </div>
// //             </ProtectedRoute>
// //           } 
// //         />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;


// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from './config/firebase';

// // Importación de componentes
// import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
// import Menu from './pages/Menu';
// import Schedule from './pages/Schedule'; // Importamos el nuevo componente
// import Layout from './components/Layout';

// // Componentes temporales para las rutas que aún no implementamos
// const PromocionesPage = () => (
//   <div className="container mx-auto p-4">
//     <h1 className="text-2xl font-bold mb-4">Gestión de Promociones</h1>
//     <p className="text-gray-600">Esta sección está en desarrollo...</p>
//   </div>
// );

// const ConfiguracionPage = () => (
//   <div className="container mx-auto p-4">
//     <h1 className="text-2xl font-bold mb-4">Configuración</h1>
//     <p className="text-gray-600">Esta sección está en desarrollo...</p>
//   </div>
// );

// function App() {
//   const [user, setUser] = React.useState(null);
//   const [loading, setLoading] = React.useState(true);

//   React.useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setUser(user);
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
//       </div>
//     );
//   }

//   // Componente para proteger rutas
//   const ProtectedRoute = ({ children }) => {
//     if (!user) {
//       return <Navigate to="/login" />;
//     }
//     return <Layout>{children}</Layout>;
//   };

//   return (
//     <Router>
//       <Routes>
//         {/* Ruta pública */}
//         <Route 
//           path="/login" 
//           element={user ? <Navigate to="/" /> : <Login />} 
//         />

//         {/* Rutas protegidas */}
//         <Route
//           path="/"
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/menu"
//           element={
//             <ProtectedRoute>
//               <Menu />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/horarios"
//           element={
//             <ProtectedRoute>
//               <Schedule />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/promociones"
//           element={
//             <ProtectedRoute>
//               <PromocionesPage />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/configuracion"
//           element={
//             <ProtectedRoute>
//               <ConfiguracionPage />
//             </ProtectedRoute>
//           }
//         />

//         {/* Ruta para manejar URLs no encontradas */}
//         <Route 
//           path="*" 
//           element={
//             <ProtectedRoute>
//               <div className="container mx-auto p-4">
//                 <h1 className="text-2xl font-bold mb-4">404 - Página no encontrada</h1>
//                 <p className="text-gray-600">La página que buscas no existe.</p>
//               </div>
//             </ProtectedRoute>
//           } 
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;




import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';
// Importación de componentes
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Menu from './pages/Menu';
import Schedule from './pages/Schedule';
import Content from './pages/Content'; // Nueva importación
import Layout from './components/Layout';

// Componentes temporales para las rutas que aún no implementamos
const PromocionesPage = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Gestión de Promociones</h1>
    <p className="text-gray-600">Esta sección está en desarrollo...</p>
  </div>
);

const ConfiguracionPage = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Configuración</h1>
    <p className="text-gray-600">Esta sección está en desarrollo...</p>
  </div>
);

function App() {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  // Componente para proteger rutas
  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/login" />;
    }
    return <Layout>{children}</Layout>;
  };

  return (
    <Router>
      <Routes>
        {/* Ruta pública */}
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        />

        {/* Rutas protegidas */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/menu"
          element={
            <ProtectedRoute>
              <Menu />
            </ProtectedRoute>
          }
        />
        <Route
          path="/horarios"
          element={
            <ProtectedRoute>
              <Schedule />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contenido"
          element={
            <ProtectedRoute>
              <Content />
            </ProtectedRoute>
          }
        />
        <Route
          path="/promociones"
          element={
            <ProtectedRoute>
              <PromocionesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/configuracion"
          element={
            <ProtectedRoute>
              <ConfiguracionPage />
            </ProtectedRoute>
          }
        />
        {/* Ruta para manejar URLs no encontradas */}
        <Route
          path="*"
          element={
            <ProtectedRoute>
              <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">404 - Página no encontrada</h1>
                <p className="text-gray-600">La página que buscas no existe.</p>
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;