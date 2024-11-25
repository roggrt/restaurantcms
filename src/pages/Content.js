import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase';
import HeroBannerManager from '../components/banner/HeroBannerManager';
import ServicesManager from '../components/services/ServicesManager';

const Content = () => {
  const [data, setData] = useState({
    heroBanners: [],
    services: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch hero banners
      const bannersRef = collection(db, 'hero_banners');
      const bannersSnapshot = await getDocs(bannersRef);
      const bannersData = bannersSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      // Fetch services
      const servicesRef = collection(db, 'services');
      const servicesSnapshot = await getDocs(servicesRef);
      const servicesData = servicesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setData({
        heroBanners: bannersData,
        services: servicesData
      });
    } catch (err) {
      console.error("Error al cargar datos:", err);
      setError("Error al cargar los datos. Por favor, intente de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateBanner = async (bannerData) => {
    try {
      setLoading(true);
      const bannersRef = collection(db, 'hero_banners');
      await addDoc(bannersRef, {
        ...bannerData,
        startDate: bannerData.startDate ? new Date(bannerData.startDate) : null,
        endDate: bannerData.endDate ? new Date(bannerData.endDate) : null,
      });
      await fetchData();
    } catch (err) {
      console.error("Error al guardar banner:", err);
      setError("Error al guardar el banner");
    }
  };

  const handleDeleteBanner = async (bannerId) => {
    try {
      setLoading(true);
      const bannerRef = doc(db, 'hero_banners', bannerId);
      await deleteDoc(bannerRef);
      await fetchData();
    } catch (err) {
      console.error("Error al eliminar banner:", err);
      setError("Error al eliminar el banner");
    }
  };

  const handleUpdateService = async (serviceData) => {
    try {
      setLoading(true);
      const servicesRef = collection(db, 'services');
      await addDoc(servicesRef, serviceData);
      await fetchData();
    } catch (err) {
      console.error("Error al guardar servicio:", err);
      setError("Error al guardar el servicio");
    }
  };

  const handleDeleteService = async (serviceId) => {
    try {
      setLoading(true);
      const serviceRef = doc(db, 'services', serviceId);
      await deleteDoc(serviceRef);
      await fetchData();
    } catch (err) {
      console.error("Error al eliminar servicio:", err);
      setError("Error al eliminar el servicio");
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
      <h1 className="text-2xl font-bold mb-6">Gestión de Contenido Web</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 gap-8">
        <section>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Hero Banners</h2>
            <p className="text-gray-600 mb-6">
              Administra los banners principales que se muestran en la página de inicio.
              Los banners se mostrarán según su prioridad y fechas configuradas.
            </p>
            <HeroBannerManager
              banners={data.heroBanners}
              onUpdate={handleUpdateBanner}
              onDelete={handleDeleteBanner}
            />
          </div>
        </section>

        <section>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Servicios Especiales</h2>
            <p className="text-gray-600 mb-6">
              Gestiona los servicios especiales que ofrece el restaurante.
              Estos servicios se mostrarán en la sección correspondiente del sitio web.
            </p>
            <ServicesManager
              services={data.services}
              onUpdate={handleUpdateService}
              onDelete={handleDeleteService}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Content;