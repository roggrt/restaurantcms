


// import React, { useState, useEffect } from 'react';
// import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
// import { db } from '../config/firebase';
// import PhoneManager from '../components/schedule/PhoneManager';
// import LocationManager from '../components/schedule/LocationManager';
// import SocialMediaManager from '../components/schedule/SocialMediaManager';
// import DeliveryServicesManager from '../components/schedule/DeliveryServicesManager';
// import RegularSchedule from '../components/schedule/RegularSchedule';
// import HolidaySchedule from '../components/schedule/HolidaySchedule';

// const Schedule = () => {
//   const [data, setData] = useState({
//     phones: [],
//     location: [],
//     socialMedia: [],
//     deliveryServices: [],
//     schedule: [],
//     holidays: []
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchAllData();
//   }, []);

//   const fetchAllData = async () => {
//     try {
//       setLoading(true);
//       const contactRef = doc(db, 'contact_info', 'contact');
//       const subcollections = ['phones', 'location', 'socialMedia', 'deliveryServices'];
      
//       const newData = {};
//       await Promise.all(subcollections.map(async (subcollection) => {
//         const subcollectionRef = collection(contactRef, subcollection);
//         const snapshot = await getDocs(subcollectionRef);
//         newData[subcollection] = snapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data()
//         }));
//       }));

//       // Fetch schedule collection
//       const scheduleRef = collection(db, 'schedule');
//       const scheduleSnapshot = await getDocs(scheduleRef);
//       newData.schedule = scheduleSnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));

//       // Fetch holidays collection
//       const holidaysRef = collection(db, 'holidays');
//       const holidaysSnapshot = await getDocs(holidaysRef);
//       newData.holidays = holidaysSnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));

//       setData(newData);
//     } catch (err) {
//       console.error("Error al cargar datos:", err);
//       setError("Error al cargar los datos. Por favor, intente de nuevo.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Manejadores para teléfonos
//   const handleAddPhone = async (phoneData) => {
//     try {
//       const phonesRef = collection(doc(db, 'contact_info', 'contact'), 'phones');
//       await addDoc(phonesRef, phoneData);
//       await fetchAllData();
//     } catch (err) {
//       setError("Error al agregar teléfono");
//     }
//   };

//   const handleDeletePhone = async (phoneId) => {
//     try {
//       const phoneRef = doc(db, 'contact_info', 'contact', 'phones', phoneId);
//       await deleteDoc(phoneRef);
//       await fetchAllData();
//     } catch (err) {
//       setError("Error al eliminar teléfono");
//     }
//   };

//   // Manejador para ubicación
//   const handleUpdateLocation = async (locationData) => {
//     try {
//       const contactRef = doc(db, 'contact_info', 'contact');
//       const locationRef = collection(contactRef, 'location');

//       if (locationData.id) {
//         const docRef = doc(locationRef, locationData.id);
//         await updateDoc(docRef, locationData);
//       } else {
//         await addDoc(locationRef, locationData);
//       }

//       await fetchAllData();
//     } catch (err) {
//       console.error("Error updating location:", err);
//       throw new Error("Error updating location");
//     }
//   };

//   const handleDeleteLocation = async (locationId) => {
//     try {
//       const contactRef = doc(db, 'contact_info', 'contact');
//       const locationRef = doc(contactRef, 'location', locationId);
//       await deleteDoc(locationRef);
//       await fetchAllData();
//     } catch (err) {
//       console.error("Error deleting location:", err);
//       throw new Error("Error deleting location");
//     }
//   };

//   // Manejador para redes sociales
//   const handleUpdateSocialMedia = async (socialMediaData) => {
//     try {
//       const socialMediaId = data.socialMedia[0]?.id;
//       if (socialMediaId) {
//         const socialMediaRef = doc(db, 'contact_info', 'contact', 'socialMedia', socialMediaId);
//         await updateDoc(socialMediaRef, socialMediaData);
//       } else {
//         const socialMediaRef = collection(doc(db, 'contact_info', 'contact'), 'socialMedia');
//         await addDoc(socialMediaRef, socialMediaData);
//       }
//       await fetchAllData();
//     } catch (err) {
//       setError("Error al actualizar redes sociales");
//     }
//   };

//   // Manejadores para servicios de delivery
//   const handleAddDeliveryService = async (serviceData) => {
//     try {
//       const servicesRef = collection(doc(db, 'contact_info', 'contact'), 'deliveryServices');
//       await addDoc(servicesRef, serviceData);
//       await fetchAllData();
//     } catch (err) {
//       setError("Error al agregar servicio de delivery");
//     }
//   };

//   const handleDeleteDeliveryService = async (serviceId) => {
//     try {
//       const serviceRef = doc(db, 'contact_info', 'contact', 'deliveryServices', serviceId);
//       await deleteDoc(serviceRef);
//       await fetchAllData();
//     } catch (err) {
//       setError("Error al eliminar servicio de delivery");
//     }
//   };



// const handleUpdateSchedule = async (scheduleData) => {
//     try {
//       const scheduleRef = collection(db, 'schedule');
//       await addDoc(scheduleRef, scheduleData);
//       await fetchAllData();
//     } catch (err) {
//       setError("Error al agregar horario");
//     }
//   };
  
//   const handleDeleteSchedule = async (scheduleId) => {
//     try {
//       const scheduleRef = doc(db, 'schedule', scheduleId);
//       await deleteDoc(scheduleRef);
//       await fetchAllData();
//     } catch (err) {
//       setError("Error al eliminar horario");
//     }
//   };


//   // Manejadores para feriados
//   const handleAddHoliday = async (holidayData) => {
//     try {
//       const holidaysRef = collection(db, 'holidays');
//       await addDoc(holidaysRef, {
//         date: holidayData.date,
//         description: holidayData.description || '',
//         isOpen: holidayData.isOpen || true,
//         openTime: holidayData.openTime || '',
//         closeTime: holidayData.closeTime || '',
//         type: holidayData.type || ''
//       });
//       await fetchAllData();
//     } catch (err) {
//       setError("Error al agregar feriado");
//     }
//   };

//   const handleDeleteHoliday = async (holidayId) => {
//     try {
//       const holidayRef = doc(db, 'holidays', holidayId);
//       await deleteDoc(holidayRef);
//       await fetchAllData();
//     } catch (err) {
//       setError("Error al eliminar feriado");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-6">Gestión de Información de Contacto</h1>
      
//       {error && (
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//           {error}
//         </div>
//       )}

//       <div className="grid grid-cols-1 gap-6">
//         <PhoneManager
//           phones={data.phones}
//           onUpdate={handleAddPhone}
//           onDelete={handleDeletePhone}
//         />

//         <LocationManager
//           locations={data.location}
//           onUpdate={handleUpdateLocation}
//           onDelete={handleDeleteLocation}
//         />

// <RegularSchedule
//   schedules={data.schedule}
//   onUpdate={handleUpdateSchedule}
//   onDelete={handleDeleteSchedule}
// />

//         <HolidaySchedule
//           holidays={data.holidays}
//           onAdd={handleAddHoliday}
//           onDelete={handleDeleteHoliday}
//         />

//         <SocialMediaManager
//           socialMedia={data.socialMedia}
//           onUpdate={handleUpdateSocialMedia}
//         />

//         <DeliveryServicesManager
//           services={data.deliveryServices}
//           onUpdate={handleAddDeliveryService}
//           onDelete={handleDeleteDeliveryService}
//         />
//       </div>
//     </div>
//   );
// };

// export default Schedule;



import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase';
import PhoneManager from '../components/schedule/PhoneManager';
import LocationManager from '../components/schedule/LocationManager';
import SocialMediaManager from '../components/schedule/SocialMediaManager';
import DeliveryServicesManager from '../components/schedule/DeliveryServicesManager';
import RegularSchedule from '../components/schedule/RegularSchedule';
import HolidaySchedule from '../components/schedule/HolidaySchedule';

const Schedule = () => {
  const [data, setData] = useState({
    phones: [],
    location: [],
    socialMedia: [],
    deliveryServices: [],
    schedule: [],
    holidays: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      const contactRef = doc(db, 'contact_info', 'contact');
      const subcollections = ['phones', 'location', 'socialMedia', 'deliveryServices'];
      
      const newData = {};
      await Promise.all(subcollections.map(async (subcollection) => {
        const subcollectionRef = collection(contactRef, subcollection);
        const snapshot = await getDocs(subcollectionRef);
        newData[subcollection] = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
      }));

      // Fetch schedule collection
      const scheduleRef = collection(db, 'schedule');
      const scheduleSnapshot = await getDocs(scheduleRef);
      newData.schedule = scheduleSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      // Fetch holidays collection
      const holidaysRef = collection(db, 'holidays');
      const holidaysSnapshot = await getDocs(holidaysRef);
      newData.holidays = holidaysSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setData(newData);
    } catch (err) {
      console.error("Error loading data:", err);
      setError("Error loading data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Phone handlers
  const handleAddPhone = async (phoneData) => {
    try {
      const phonesRef = collection(doc(db, 'contact_info', 'contact'), 'phones');
      await addDoc(phonesRef, phoneData);
      await fetchAllData();
    } catch (err) {
      setError("Error adding phone");
    }
  };

  const handleDeletePhone = async (phoneId) => {
    try {
      const phoneRef = doc(db, 'contact_info', 'contact', 'phones', phoneId);
      await deleteDoc(phoneRef);
      await fetchAllData();
    } catch (err) {
      setError("Error deleting phone");
    }
  };

  // Location handler
  const handleUpdateLocation = async (locationData) => {
    try {
      const contactRef = doc(db, 'contact_info', 'contact');
      const locationRef = collection(contactRef, 'location');

      if (locationData.id) {
        const docRef = doc(locationRef, locationData.id);
        await updateDoc(docRef, locationData);
      } else {
        await addDoc(locationRef, locationData);
      }

      await fetchAllData();
    } catch (err) {
      console.error("Error updating location:", err);
      throw new Error("Error updating location");
    }
  };

  const handleDeleteLocation = async (locationId) => {
    try {
      const contactRef = doc(db, 'contact_info', 'contact');
      const locationRef = doc(contactRef, 'location', locationId);
      await deleteDoc(locationRef);
      await fetchAllData();
    } catch (err) {
      console.error("Error deleting location:", err);
      throw new Error("Error deleting location");
    }
  };

  // Social media handler
  const handleUpdateSocialMedia = async (socialMediaData) => {
    try {
      const socialMediaId = data.socialMedia[0]?.id;
      if (socialMediaId) {
        const socialMediaRef = doc(db, 'contact_info', 'contact', 'socialMedia', socialMediaId);
        await updateDoc(socialMediaRef, socialMediaData);
      } else {
        const socialMediaRef = collection(doc(db, 'contact_info', 'contact'), 'socialMedia');
        await addDoc(socialMediaRef, socialMediaData);
      }
      await fetchAllData();
    } catch (err) {
      setError("Error updating social media");
    }
  };

  // Delivery service handlers
  const handleAddDeliveryService = async (serviceData) => {
    try {
      const servicesRef = collection(doc(db, 'contact_info', 'contact'), 'deliveryServices');
      await addDoc(servicesRef, serviceData);
      await fetchAllData();
    } catch (err) {
      setError("Error adding delivery service");
    }
  };

  const handleDeleteDeliveryService = async (serviceId) => {
    try {
      const serviceRef = doc(db, 'contact_info', 'contact', 'deliveryServices', serviceId);
      await deleteDoc(serviceRef);
      await fetchAllData();
    } catch (err) {
      setError("Error deleting delivery service");
    }
  };

  const handleUpdateSchedule = async (scheduleData) => {
    try {
      const scheduleRef = collection(db, 'schedule');
      await addDoc(scheduleRef, scheduleData);
      await fetchAllData();
    } catch (err) {
      setError("Error adding schedule");
    }
  };
  
  const handleDeleteSchedule = async (scheduleId) => {
    try {
      const scheduleRef = doc(db, 'schedule', scheduleId);
      await deleteDoc(scheduleRef);
      await fetchAllData();
    } catch (err) {
      setError("Error deleting schedule");
    }
  };

  // Holiday handlers
  const handleAddHoliday = async (holidayData) => {
    try {
      const holidaysRef = collection(db, 'holidays');
      await addDoc(holidaysRef, {
        date: holidayData.date,
        description: holidayData.description || '',
        isOpen: holidayData.isOpen || true,
        openTime: holidayData.openTime || '',
        closeTime: holidayData.closeTime || '',
        type: holidayData.type || ''
      });
      await fetchAllData();
    } catch (err) {
      setError("Error adding holiday");
    }
  };

  const handleDeleteHoliday = async (holidayId) => {
    try {
      const holidayRef = doc(db, 'holidays', holidayId);
      await deleteDoc(holidayRef);
      await fetchAllData();
    } catch (err) {
      setError("Error deleting holiday");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Contact Information Management</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 gap-6">
        <PhoneManager
          phones={data.phones}
          onUpdate={handleAddPhone}
          onDelete={handleDeletePhone}
        />

        <LocationManager
          locations={data.location}
          onUpdate={handleUpdateLocation}
          onDelete={handleDeleteLocation}
        />

        <RegularSchedule
          schedules={data.schedule}
          onUpdate={handleUpdateSchedule}
          onDelete={handleDeleteSchedule}
        />

        <HolidaySchedule
          holidays={data.holidays}
          onAdd={handleAddHoliday}
          onDelete={handleDeleteHoliday}
        />

        <SocialMediaManager
          socialMedia={data.socialMedia}
          onUpdate={handleUpdateSocialMedia}
        />

        <DeliveryServicesManager
          services={data.deliveryServices}
          onUpdate={handleAddDeliveryService}
          onDelete={handleDeleteDeliveryService}
        />
      </div>
    </div>
  );
};

export default Schedule;