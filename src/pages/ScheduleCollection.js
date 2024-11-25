// // // src/pages/Schedule.js (o Horarios.js)
// // import React, { useState, useEffect } from 'react';
// // import { collection, doc, getDocs, updateDoc, addDoc, deleteDoc, getDoc } from 'firebase/firestore';
// // import { db } from '../config/firebase';
// // import WeeklySchedule from '../components/schedule/WeeklySchedule';
// // import HolidaySchedule from '../components/schedule/HolidaySchedule';
// // import ContactInfo from '../components/schedule/ContactInfo';

// // const Schedule = () => {
// //   const [schedule, setSchedule] = useState([]);
// //   const [holidays, setHolidays] = useState([]);
// //   const [contactInfo, setContactInfo] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   // Cargar todos los datos al montar el componente
// //   useEffect(() => {
// //     fetchAllData();
// //   }, []);

// //   const fetchAllData = async () => {
// //     try {
// //       setLoading(true);
// //       await Promise.all([
// //         fetchSchedule(),
// //         fetchHolidays(),
// //         fetchContactInfo()
// //       ]);
// //     } catch (error) {
// //       console.error('Error al cargar los datos:', error);
// //       setError('Error al cargar los datos. Por favor, intenta de nuevo.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Obtener horarios semanales
// //   const fetchSchedule = async () => {
// //     const querySnapshot = await getDocs(collection(db, 'schedule'));
// //     const scheduleData = querySnapshot.docs.map(doc => ({
// //       id: doc.id,
// //       ...doc.data()
// //     }));
// //     setSchedule(scheduleData);
// //   };

// //   // Obtener días festivos
// //   const fetchHolidays = async () => {
// //     const querySnapshot = await getDocs(collection(db, 'holidays'));
// //     const holidaysData = querySnapshot.docs.map(doc => ({
// //       id: doc.id,
// //       ...doc.data()
// //     }));
// //     setHolidays(holidaysData);
// //   };

// //   // Obtener información de contacto
// //   const fetchContactInfo = async () => {
// //     const docRef = doc(db, 'contact_info', 'contact');
// //     const docSnap = await getDoc(docRef);
// //     if (docSnap.exists()) {
// //       setContactInfo(docSnap.data());
// //     } else {
// //       // Si no existe, crear documento inicial
// //       const initialContactInfo = {
// //         phones: [],
// //         location: {
// //           address: '',
// //           city: '',
// //           state: '',
// //           postalCode: '',
// //           coordinates: null
// //         },
// //         socialMedia: {
// //           facebook: '',
// //           instagram: '',
// //           twitter: ''
// //         },
// //         deliveryServices: []
// //       };
// //       await updateDoc(docRef, initialContactInfo);
// //       setContactInfo(initialContactInfo);
// //     }
// //   };

// //   // Manejar actualización de horario semanal
// //   const handleScheduleUpdate = async (scheduleData) => {
// //     try {
// //       const scheduleRef = doc(db, 'schedule', scheduleData.id);
// //       await updateDoc(scheduleRef, scheduleData);
// //       await fetchSchedule();
// //     } catch (error) {
// //       console.error('Error al actualizar horario:', error);
// //       setError('Error al actualizar horario');
// //     }
// //   };

// //   // Manejar días festivos
// //   const handleAddHoliday = async (holidayData) => {
// //     try {
// //       await addDoc(collection(db, 'holidays'), holidayData);
// //       await fetchHolidays();
// //     } catch (error) {
// //       console.error('Error al agregar día festivo:', error);
// //       setError('Error al agregar día festivo');
// //     }
// //   };

// //   const handleDeleteHoliday = async (holidayId) => {
// //     try {
// //       await deleteDoc(doc(db, 'holidays', holidayId));
// //       await fetchHolidays();
// //     } catch (error) {
// //       console.error('Error al eliminar día festivo:', error);
// //       setError('Error al eliminar día festivo');
// //     }
// //   };

// //   // Manejar actualización de información de contacto
// //   const handleContactUpdate = async (contactData) => {
// //     try {
// //       const contactRef = doc(db, 'contact_info', 'contact');
// //       await updateDoc(contactRef, contactData);
// //       await fetchContactInfo();
// //     } catch (error) {
// //       console.error('Error al actualizar información de contacto:', error);
// //       setError('Error al actualizar información de contacto');
// //     }
// //   };

// //   if (loading) {
// //     return (
// //       <div className="flex justify-center items-center min-h-screen">
// //         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="container mx-auto p-4">
// //       {error && (
// //         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
// //           {error}
// //         </div>
// //       )}

// //       <h1 className="text-2xl font-bold mb-6">Gestión de Horarios y Contacto</h1>

// //       <div className="grid grid-cols-1 gap-6">
// //         {/* Horario Semanal */}
// //         <WeeklySchedule 
// //           schedule={schedule} 
// //           onUpdate={handleScheduleUpdate} 
// //         />

// //         {/* Días Festivos y Especiales */}
// //         <HolidaySchedule
// //           holidays={holidays}
// //           onAdd={handleAddHoliday}
// //           onDelete={handleDeleteHoliday}
// //         />

// //         {/* Información de Contacto */}
// //         <ContactInfo
// //           contactInfo={contactInfo}
// //           onUpdate={handleContactUpdate}
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Schedule;


// // src/pages/Schedule.js
// import React, { useState, useEffect } from 'react';
// import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
// import { db } from '../config/firebase';

// const Schedule = () => {
//   const [collectionData, setCollectionData] = useState([]);
//   const [contactDoc, setContactDoc] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCollectionData = async () => {
//       try {
//         setLoading(true);

//         // 1. Obtener todos los documentos de la colección contact_info
//         const querySnapshot = await getDocs(collection(db, 'contact_info'));
//         const documents = [];
//         querySnapshot.forEach((doc) => {
//           console.log("Documento encontrado:", doc.id, "=>", doc.data());
//           documents.push({
//             id: doc.id,
//             data: doc.data()
//           });
//         });
//         setCollectionData(documents);

//         // 2. Obtener específicamente el documento 'contact'
//         const contactRef = doc(db, 'contact_info', 'contact');
//         const contactSnap = await getDoc(contactRef);
        
//         if (contactSnap.exists()) {
//           console.log("Documento 'contact':", contactSnap.data());
//           setContactDoc(contactSnap.data());
//         } else {
//           console.log("El documento 'contact' no existe");
//         }

//       } catch (err) {
//         console.error("Error al obtener datos:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCollectionData();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="p-4 bg-red-100 text-red-700 rounded-md">
//         Error: {error}
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-6">Visualizador de Colección contact_info</h1>

//       {/* Visualización del documento 'contact' */}
//       <div className="mb-8">
//         <h2 className="text-xl font-semibold mb-4">Documento 'contact':</h2>
//         <div className="bg-white rounded-lg shadow p-4">
//           <pre className="whitespace-pre-wrap bg-gray-50 p-4 rounded">
//             {contactDoc ? JSON.stringify(contactDoc, null, 2) : 'No existe el documento contact'}
//           </pre>
//         </div>
//       </div>

//       {/* Visualización de todos los documentos */}
//       <div>
//         <h2 className="text-xl font-semibold mb-4">Todos los documentos en la colección:</h2>
//         {collectionData.length === 0 ? (
//           <p className="text-gray-500">No hay documentos en la colección</p>
//         ) : (
//           collectionData.map((doc) => (
//             <div key={doc.id} className="bg-white rounded-lg shadow p-4 mb-4">
//               <h3 className="font-semibold text-lg mb-2">
//                 Documento ID: {doc.id}
//               </h3>
//               <pre className="whitespace-pre-wrap bg-gray-50 p-4 rounded">
//                 {JSON.stringify(doc.data, null, 2)}
//               </pre>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Botón para refrescar datos */}
//       <button
//         onClick={() => window.location.reload()}
//         className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//       >
//         Refrescar Datos
//       </button>
//     </div>
//   );
// };

// export default Schedule;


// src/pages/Schedule.js
import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc } from 'firebase/firestore';
import { db } from '../config/firebase';

const Schedule = () => {
  const [contactData, setContactData] = useState({
    deliveryServices: [],
    location: [],
    phones: [],
    socialMedia: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        setLoading(true);

        // Obtener las subcollecciones
        const contactRef = doc(db, 'contact_info', 'contact');
        const subcollections = ['deliveryServices', 'location', 'phones', 'socialMedia'];
        
        const data = {};
        await Promise.all(subcollections.map(async (subcollection) => {
          const subcollectionRef = collection(contactRef, subcollection);
          const snapshot = await getDocs(subcollectionRef);
          data[subcollection] = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          console.log(`Datos de ${subcollection}:`, data[subcollection]);
        }));

        setContactData(data);
      } catch (err) {
        console.error("Error al obtener datos:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContactData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-100 text-red-700 rounded-md">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Datos de Contacto</h1>

      {/* Phones */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Teléfonos</h2>
        <div className="bg-white rounded-lg shadow p-4">
          <pre className="whitespace-pre-wrap">
            {JSON.stringify(contactData.phones, null, 2)}
          </pre>
        </div>
      </section>

      {/* Location */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Ubicación</h2>
        <div className="bg-white rounded-lg shadow p-4">
          <pre className="whitespace-pre-wrap">
            {JSON.stringify(contactData.location, null, 2)}
          </pre>
        </div>
      </section>

      {/* Social Media */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Redes Sociales</h2>
        <div className="bg-white rounded-lg shadow p-4">
          <pre className="whitespace-pre-wrap">
            {JSON.stringify(contactData.socialMedia, null, 2)}
          </pre>
        </div>
      </section>

      {/* Delivery Services */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Servicios de Delivery</h2>
        <div className="bg-white rounded-lg shadow p-4">
          <pre className="whitespace-pre-wrap">
            {JSON.stringify(contactData.deliveryServices, null, 2)}
          </pre>
        </div>
      </section>

      {/* Estructura completa */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Estructura Completa</h2>
        <div className="bg-white rounded-lg shadow p-4">
          <pre className="whitespace-pre-wrap">
            {JSON.stringify(contactData, null, 2)}
          </pre>
        </div>
      </section>
    </div>
  );
};

export default Schedule;