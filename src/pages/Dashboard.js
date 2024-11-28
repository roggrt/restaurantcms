// // // // // // src/pages/Login.js
// // // // // import React, { useState } from 'react';
// // // // // import { signInWithEmailAndPassword } from 'firebase/auth';
// // // // // import { auth } from '../config/firebase';
// // // // // import { useNavigate } from 'react-router-dom';

// // // // // const Login = () => {
// // // // //   const [email, setEmail] = useState('');
// // // // //   const [password, setPassword] = useState('');
// // // // //   const [error, setError] = useState('');
// // // // //   const navigate = useNavigate();

// // // // //   const handleLogin = async (e) => {
// // // // //     e.preventDefault();
// // // // //     try {
// // // // //       await signInWithEmailAndPassword(auth, email, password);
// // // // //       navigate('/');
// // // // //     } catch (error) {
// // // // //       setError('Error al iniciar sesión: ' + error.message);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div style={{ maxWidth: '400px', margin: '100px auto', padding: '20px' }}>
// // // // //       <h1>Login</h1>
// // // // //       {error && <div style={{ color: 'red' }}>{error}</div>}
// // // // //       <form onSubmit={handleLogin}>
// // // // //         <div style={{ marginBottom: '15px' }}>
// // // // //           <input
// // // // //             type="email"
// // // // //             value={email}
// // // // //             onChange={(e) => setEmail(e.target.value)}
// // // // //             placeholder="Email"
// // // // //             style={{ width: '100%', padding: '8px' }}
// // // // //           />
// // // // //         </div>
// // // // //         <div style={{ marginBottom: '15px' }}>
// // // // //           <input
// // // // //             type="password"
// // // // //             value={password}
// // // // //             onChange={(e) => setPassword(e.target.value)}
// // // // //             placeholder="Contraseña"
// // // // //             style={{ width: '100%', padding: '8px' }}
// // // // //           />
// // // // //         </div>
// // // // //         <button 
// // // // //           type="submit" 
// // // // //           style={{ 
// // // // //             width: '100%', 
// // // // //             padding: '10px', 
// // // // //             backgroundColor: '#007bff', 
// // // // //             color: 'white', 
// // // // //             border: 'none' 
// // // // //           }}
// // // // //         >
// // // // //           Iniciar Sesión
// // // // //         </button>
// // // // //       </form>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Login;

// // // // // src/pages/Dashboard.js
// // // // import React from 'react';
// // // // import { Link } from 'react-router-dom';

// // // // const DashboardCard = ({ title, description, icon, link }) => (
// // // //   <Link to={link} className="bg-white overflow-hidden shadow rounded-lg p-6 hover:shadow-lg transition-shadow">
// // // //     <div className="flex items-center">
// // // //       <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
// // // //         {icon}
// // // //       </div>
// // // //       <div className="ml-5">
// // // //         <h3 className="text-lg font-medium text-gray-900">{title}</h3>
// // // //         <p className="mt-1 text-sm text-gray-500">{description}</p>
// // // //       </div>
// // // //     </div>
// // // //   </Link>
// // // // );

// // // // const Dashboard = () => {
// // // //   const cards = [
// // // //     {
// // // //       title: 'Menú',
// // // //       description: 'Gestiona los platos y categorías del menú',
// // // //       icon: '🍽️',
// // // //       link: '/menu'
// // // //     },
// // // //     {
// // // //       title: 'Horarios',
// // // //       description: 'Configura los horarios de atención',
// // // //       icon: '⏰',
// // // //       link: '/horarios'
// // // //     },
// // // //     {
// // // //       title: 'Promociones',
// // // //       description: 'Administra las promociones activas',
// // // //       icon: '🎉',
// // // //       link: '/promociones'
// // // //     },
// // // //     {
// // // //       title: 'Configuración',
// // // //       description: 'Ajustes generales del restaurante',
// // // //       icon: '⚙️',
// // // //       link: '/configuracion'
// // // //     }
// // // //   ];

// // // //   return (
// // // //     <div>
// // // //       <div className="mb-8">
// // // //         <h1 className="text-3xl font-bold text-gray-900">Panel de Administración</h1>
// // // //         <p className="mt-2 text-gray-600">
// // // //           Bienvenido al sistema de gestión de contenido de tu restaurante
// // // //         </p>
// // // //       </div>

// // // //       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
// // // //         {cards.map((card, index) => (
// // // //           <DashboardCard key={index} {...card} />
// // // //         ))}
// // // //       </div>

// // // //       {/* Resumen de estadísticas */}
// // // //       <div className="mt-8 bg-white shadow rounded-lg p-6">
// // // //         <h2 className="text-xl font-semibold text-gray-900 mb-4">Resumen</h2>
// // // //         <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
// // // //           <div className="bg-gray-50 p-4 rounded-lg">
// // // //             <p className="text-sm font-medium text-gray-500">Platos en el menú</p>
// // // //             <p className="mt-1 text-3xl font-semibold text-gray-900">24</p>
// // // //           </div>
// // // //           <div className="bg-gray-50 p-4 rounded-lg">
// // // //             <p className="text-sm font-medium text-gray-500">Promociones activas</p>
// // // //             <p className="mt-1 text-3xl font-semibold text-gray-900">3</p>
// // // //           </div>
// // // //           <div className="bg-gray-50 p-4 rounded-lg">
// // // //             <p className="text-sm font-medium text-gray-500">Última actualización</p>
// // // //             <p className="mt-1 text-xl font-semibold text-gray-900">Hace 2 días</p>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Dashboard;



// // // // src/pages/Dashboard.js
// // // import React from 'react';
// // // import { Link } from 'react-router-dom';

// // // const DashboardCard = ({ title, description, icon, link }) => (
// // //   <Link to={link} className="bg-white overflow-hidden shadow rounded-lg p-6 hover:shadow-lg transition-shadow">
// // //     <div className="flex items-center">
// // //       <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
// // //         {icon}
// // //       </div>
// // //       <div className="ml-5">
// // //         <h3 className="text-lg font-medium text-gray-900">{title}</h3>
// // //         <p className="mt-1 text-sm text-gray-500">{description}</p>
// // //       </div>
// // //     </div>
// // //   </Link>
// // // );

// // // const Dashboard = () => {
// // //   const cards = [
// // //     {
// // //       title: 'Menú',
// // //       description: 'Gestiona los platos y categorías del menú',
// // //       icon: '🍽️',
// // //       link: '/menu'
// // //     },
// // //     {
// // //       title: 'Horarios',
// // //       description: 'Configura los horarios de atención',
// // //       icon: '⏰',
// // //       link: '/horarios'
// // //     },
// // //     {
// // //       title: 'Promociones',
// // //       description: 'Administra las promociones activas',
// // //       icon: '🎉',
// // //       link: '/promociones'
// // //     },
// // //     {
// // //       title: 'Configuración',
// // //       description: 'Ajustes generales del restaurante',
// // //       icon: '⚙️',
// // //       link: '/configuracion'
// // //     }
// // //   ];

// // //   return (
// // //     <div>
// // //       <div className="mb-8">
// // //         <h1 className="text-3xl font-bold text-gray-900">Panel de Administración</h1>
// // //         <p className="mt-2 text-gray-600">
// // //           Bienvenido al sistema de gestión de contenido de tu restaurante
// // //         </p>
// // //       </div>

// // //       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
// // //         {cards.map((card, index) => (
// // //           <DashboardCard key={index} {...card} />
// // //         ))}
// // //       </div>

// // //       {/* Resumen de estadísticas */}
// // //       <div className="mt-8 bg-white shadow rounded-lg p-6">
// // //         <h2 className="text-xl font-semibold text-gray-900 mb-4">Resumen</h2>
// // //         <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
// // //           <div className="bg-gray-50 p-4 rounded-lg">
// // //             <p className="text-sm font-medium text-gray-500">Platos en el menú</p>
// // //             <p className="mt-1 text-3xl font-semibold text-gray-900">24</p>
// // //           </div>
// // //           <div className="bg-gray-50 p-4 rounded-lg">
// // //             <p className="text-sm font-medium text-gray-500">Promociones activas</p>
// // //             <p className="mt-1 text-3xl font-semibold text-gray-900">3</p>
// // //           </div>
// // //           <div className="bg-gray-50 p-4 rounded-lg">
// // //             <p className="text-sm font-medium text-gray-500">Última actualización</p>
// // //             <p className="mt-1 text-xl font-semibold text-gray-900">Hace 2 días</p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Dashboard;


// // // src/pages/Dashboard.js



// // import React from 'react';
// // import { signOut } from 'firebase/auth';
// // import { auth } from '../config/firebase';
// // import { useNavigate } from 'react-router-dom';

// // const Dashboard = () => {
// //   const navigate = useNavigate();

// //   const handleLogout = async () => {
// //     try {
// //       await signOut(auth);
// //       navigate('/login');
// //     } catch (error) {
// //       console.error('Error al cerrar sesión:', error);
// //     }
// //   };

// //   return (
// //     <div style={{ padding: '20px' }}>
// //       <h1>Dashboard</h1>
// //       <p>Bienvenido al panel de administración</p>
// //       <button 
// //         onClick={handleLogout}
// //         style={{ 
// //           padding: '10px', 
// //           backgroundColor: '#dc3545', 
// //           color: 'white', 
// //           border: 'none' 
// //         }}
// //       >
// //         Cerrar Sesión
// //       </button>
// //     </div>
// //   );
// // };

// // export default Dashboard;


// // src/pages/Dashboard.js
// import React from 'react';
// import { signOut } from 'firebase/auth';
// import { auth } from '../config/firebase';
// import { useNavigate } from 'react-router-dom';

// const Dashboard = () => {
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       navigate('/login');
//     } catch (error) {
//       console.error('Error al cerrar sesión:', error);
//     }
//   };

//   // Datos de ejemplo para el dashboard
//   const statsData = [
//     { title: 'Total Platos', value: '24', icon: '🍽️' },
//     { title: 'Promociones', value: '3', icon: '🎉' },
//     { title: 'Categorías', value: '6', icon: '📑' }
//   ];

//   const recentUpdates = [
//     { title: 'Menú actualizado', time: 'Hace 2 horas' },
//     { title: 'Nueva promoción agregada', time: 'Hace 3 horas' },
//     { title: 'Horarios modificados', time: 'Hace 5 horas' }
//   ];

//   return (
//     <div style={{
//       maxWidth: '1200px',
//       margin: '0 auto',
//       padding: '20px'
//     }}>
//       {/* Header Section */}
//       <div style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: '30px'
//       }}>
//         <div>
//           <h1 style={{
//             fontSize: '24px',
//             fontWeight: 'bold',
//             color: '#333',
//             marginBottom: '8px'
//           }}>Panel de Administración</h1>
//           <p style={{ color: '#666' }}>Bienvenido al sistema de gestión del restaurante</p>
//         </div>
//         <button
//           onClick={handleLogout}
//           style={{
//             padding: '10px 20px',
//             backgroundColor: '#dc3545',
//             color: 'white',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer',
//             transition: 'background-color 0.3s'
//           }}
//           onMouseOver={(e) => e.target.style.backgroundColor = '#c82333'}
//           onMouseOut={(e) => e.target.style.backgroundColor = '#dc3545'}
//         >
//           Cerrar Sesión
//         </button>
//       </div>

//       {/* Stats Grid */}
//       <div style={{
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//         gap: '20px',
//         marginBottom: '30px'
//       }}>
//         {statsData.map((stat, index) => (
//           <div key={index} style={{
//             backgroundColor: 'white',
//             padding: '20px',
//             borderRadius: '8px',
//             boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//           }}>
//             <div style={{ fontSize: '24px', marginBottom: '10px' }}>{stat.icon}</div>
//             <h3 style={{ fontSize: '20px', color: '#333', marginBottom: '5px' }}>{stat.value}</h3>
//             <p style={{ color: '#666', fontSize: '14px' }}>{stat.title}</p>
//           </div>
//         ))}
//       </div>

//       {/* Recent Updates Section */}
//       <div style={{
//         backgroundColor: 'white',
//         padding: '20px',
//         borderRadius: '8px',
//         boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//       }}>
//         <h2 style={{
//           fontSize: '18px',
//           color: '#333',
//           marginBottom: '15px',
//           borderBottom: '1px solid #eee',
//           paddingBottom: '10px'
//         }}>
//           Actualizaciones Recientes
//         </h2>
//         {recentUpdates.map((update, index) => (
//           <div key={index} style={{
//             padding: '10px 0',
//             borderBottom: index !== recentUpdates.length - 1 ? '1px solid #eee' : 'none'
//           }}>
//             <h4 style={{ color: '#333', marginBottom: '5px' }}>{update.title}</h4>
//             <p style={{ color: '#666', fontSize: '14px' }}>{update.time}</p>
//           </div>
//         ))}
//       </div>

//       {/* Quick Actions */}
//       <div style={{
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//         gap: '15px',
//         marginTop: '30px'
//       }}>
//         {['Gestionar Menú', 'Configurar Horarios', 'Editar Promociones'].map((action, index) => (
//           <button
//             key={index}
//             style={{
//               padding: '15px',
//               backgroundColor: '#007bff',
//               color: 'white',
//               border: 'none',
//               borderRadius: '5px',
//               cursor: 'pointer',
//               transition: 'background-color 0.3s'
//             }}
//             onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
//             onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
//           >
//             {action}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { collection, getDocs, query, orderBy, limit, Timestamp } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalDishes: 0,
    totalCategories: 0,
    activePromotions: 0
  });
  const [recentUpdates, setRecentUpdates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Get dishes count
      const dishesSnapshot = await getDocs(collection(db, 'dishes'));
      const totalDishes = dishesSnapshot.size;

      // Get categories count
      const categoriesSnapshot = await getDocs(collection(db, 'categories'));
      const totalCategories = categoriesSnapshot.size;

      // Get active promotions
      const promotionsSnapshot = await getDocs(query(
        collection(db, 'promotions'),
        orderBy('createdAt', 'desc')
      ));
      const activePromotions = promotionsSnapshot.size;

      // Update stats
      setStats({
        totalDishes,
        totalCategories,
        activePromotions
      });

      // Get recent updates
      const updates = [];
      
      // Add recent dishes
      dishesSnapshot.forEach(doc => {
        const data = doc.data();
        if (data.createdAt) {
          updates.push({
            title: `New dish: ${data.name}`,
            time: data.createdAt.toDate(),
            type: 'dish'
          });
        }
      });

      // Add recent categories
      categoriesSnapshot.forEach(doc => {
        const data = doc.data();
        if (data.createdAt) {
          updates.push({
            title: `New category: ${data.name}`,
            time: data.createdAt.toDate(),
            type: 'category'
          });
        }
      });

      // Sort by date and limit to 5 updates
      const sortedUpdates = updates
        .sort((a, b) => b.time - a.time)
        .slice(0, 5)
        .map(update => ({
          ...update,
          time: getTimeAgo(update.time)
        }));

      setRecentUpdates(sortedUpdates);
      setLoading(false);
    } catch (error) {
      console.error('Error loading dashboard data:', error);
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const getTimeAgo = (date) => {
    const seconds = Math.floor((new Date() - date) / 1000);
    const intervals = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60
    };

    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
      const interval = Math.floor(seconds / secondsInUnit);
      if (interval >= 1) {
        return `${interval} ${unit}${interval > 1 ? 's' : ''} ago`;
      }
    }
    return 'Just now';
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  const statsData = [
    { 
      title: 'Total Dishes', 
      value: stats.totalDishes.toString(), 
      icon: '🍽️',
      onClick: () => handleNavigate('/menu')
    },
    { 
      title: 'Content (Hero, Services)', 
      value: stats.activePromotions.toString(), 
      icon: '🎉',
      onClick: () => handleNavigate('/contenido')
    },
    { 
      title: 'Categories', 
      value: stats.totalCategories.toString(), 
      icon: '📑',
      onClick: () => handleNavigate('/menu')
    }
  ];

  const quickActions = [
    {
      title: 'Manage Menu',
      path: '/menu',
      icon: '🍽️',
      color: '#007bff'
    },
    {
      title: 'Set Schedule',
      path: '/horarios',
      icon: '📅',
      color: '#28a745'
    },
    {
      title: 'Edit Hero/Content',
      path: '/contenido',
      icon: '🎉',
      color: '#17a2b8'
    }
  ];

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}>
        <div style={{
          border: '4px solid #f3f3f3',
          borderTop: '4px solid #3498db',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          animation: 'spin 1s linear infinite'
        }} />
      </div>
    );
  }

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px'
    }}>
      {/* Header Section */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px'
      }}>
        <div>
          <h1 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '8px'
          }}>Administration Panel</h1>
          <p style={{ color: '#666' }}>Welcome to the restaurant management system</p>
        </div>
        <button
          onClick={handleLogout}
          style={{
            padding: '10px 20px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#c82333'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#dc3545'}
        >
          Sign Out
        </button>
      </div>

      {/* Stats Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        marginBottom: '30px'
      }}>
        {statsData.map((stat, index) => (
          <div 
            key={index} 
            onClick={stat.onClick}
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            }}
          >
            <div style={{ fontSize: '24px', marginBottom: '10px' }}>{stat.icon}</div>
            <h3 style={{ fontSize: '20px', color: '#333', marginBottom: '5px' }}>{stat.value}</h3>
            <p style={{ color: '#666', fontSize: '14px' }}>{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Recent Updates Section */}
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginBottom: '30px'
      }}>
        <h2 style={{
          fontSize: '18px',
          color: '#333',
          marginBottom: '15px',
          borderBottom: '1px solid #eee',
          paddingBottom: '10px'
        }}>
          Recent Updates
        </h2>
        {recentUpdates.length > 0 ? (
          recentUpdates.map((update, index) => (
            <div key={index} style={{
              padding: '10px 0',
              borderBottom: index !== recentUpdates.length - 1 ? '1px solid #eee' : 'none'
            }}>
              <h4 style={{ color: '#333', marginBottom: '5px' }}>{update.title}</h4>
              <p style={{ color: '#666', fontSize: '14px' }}>{update.time}</p>
            </div>
          ))
        ) : (
          <p style={{ color: '#666', textAlign: 'center', padding: '20px' }}>
            No recent updates
          </p>
        )}
      </div>

      {/* Quick Actions */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '15px',
        marginTop: '30px'
      }}>
        {quickActions.map((action, index) => (
          <button
            key={index}
            onClick={() => handleNavigate(action.path)}
            style={{
              padding: '15px',
              backgroundColor: action.color,
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            <span style={{ fontSize: '20px' }}>{action.icon}</span>
            {action.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;