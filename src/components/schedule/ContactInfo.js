// const ContactInfo = ({ contactInfo, onUpdate }) => {
//     const [editing, setEditing] = useState(false);
//     const [editData, setEditData] = useState(contactInfo);
  
//     const handleSave = () => {
//       onUpdate(editData);
//       setEditing(false);
//     };
  
//     return (
//       <div className="bg-white rounded-lg shadow mt-6">
//         <div className="p-4">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-lg font-semibold">Información de Contacto</h2>
//             <button
//               onClick={() => setEditing(!editing)}
//               className="text-blue-600 hover:text-blue-800"
//             >
//               {editing ? 'Guardar' : 'Editar'}
//             </button>
//           </div>
  
//           {editing ? (
//             <div className="space-y-4">
//               {/* Teléfonos */}
//               <div>
//                 <h3 className="font-medium mb-2">Teléfonos</h3>
//                 {editData.phones.map((phone, index) => (
//                   <div key={index} className="flex space-x-2 mb-2">
//                     <input
//                       type="text"
//                       value={phone.number}
//                       onChange={(e) => {
//                         const newPhones = [...editData.phones];
//                         newPhones[index].number = e.target.value;
//                         setEditData({...editData, phones: newPhones});
//                       }}
//                       className="p-2 border rounded"
//                       placeholder="Número"
//                     />
//                     <select
//                       value={phone.type}
//                       onChange={(e) => {
//                         const newPhones = [...editData.phones];
//                         newPhones[index].type = e.target.value;
//                         setEditData({...editData, phones: newPhones});
//                       }}
//                       className="p-2 border rounded"
//                     >
//                       <option value="main">Principal</option>
//                       <option value="whatsapp">WhatsApp</option>
//                       <option value="delivery">Delivery</option>
//                     </select>
//                     <button
//                       onClick={() => {
//                         const newPhones = editData.phones.filter((_, i) => i !== index);
//                         setEditData({...editData, phones: newPhones});
//                       }}
//                       className="text-red-600"
//                     >
//                       Eliminar
//                     </button>
//                   </div>
//                 ))}
//                 <button
//                   onClick={() => {
//                     setEditData({
//                       ...editData,
//                       phones: [...editData.phones, { number: '', type: 'main', description: '' }]
//                     });
//                   }}
//                   className="text-blue-600"
//                 >
//                   + Agregar teléfono
//                 </button>
//               </div>
  
//               {/* Ubicación */}
//               <div>
//                 <h3 className="font-medium mb-2">Ubicación</h3>
//                 <input
//                   type="text"
//                   value={editData.location.address}
//                   onChange={(e) => setEditData({
//                     ...editData,
//                     location: {...editData.location, address: e.target.value}
//                   })}
//                   className="p-2 border rounded w-full mb-2"
//                   placeholder="Dirección"
//                 />
//                 <div className="grid grid-cols-2 gap-2">
//                   <input
//                     type="text"
//                     value={editData.location.city}
//                     onChange={(e) => setEditData({
//                       ...editData,
//                       location: {...editData.location, city: e.target.value}
//                     })}
//                     className="p-2 border rounded"
//                     placeholder="Ciudad"
//                   />
//                   <input
//                     type="text"
//                     value={editData.location.state}
//                     onChange={(e) => setEditData({
//                       ...editData,
//                       location: {...editData.location, state: e.target.value}
//                     })}
//                     className="p-2 border rounded"
//                     placeholder="Estado/Provincia"
//                   />
//                 </div>
//               </div>
  
//               {/* Redes Sociales */}
//               <div>
//                 <h3 className="font-medium mb-2">Redes Sociales</h3>
//                 <input
//                   type="text"
//                   value={editData.socialMedia.facebook}
//                   onChange={(e) => setEditData({
//                     ...editData,
//                     socialMedia: {...editData.socialMedia, facebook: e.target.value}
//                   })}
//                   className="p-2 border rounded w-full mb-2"
//                   placeholder="Facebook URL"
//                 />
//                 <input
//                   type="text"
//                   value={editData.socialMedia.instagram}
//                   onChange={(e) => setEditData({
//                     ...editData,
//                     socialMedia: {...editData.socialMedia, instagram: e.target.value}
//                   })}
//                   className="p-2 border rounded w-full mb-2"
//                   placeholder="Instagram URL"
//                 />
//                 <input
//                   type="text"
//                   value={editData.socialMedia.twitter}
//                   onChange={(e) => setEditData({
//                     ...editData,
//                     socialMedia: {...editData.socialMedia, twitter: e.target.value}
//                   })}
//                   className="p-2 border rounded w-full"
//                   placeholder="Twitter URL"
//                 />
//               </div>
//             </div>
//           ) : (
//             <div className="space-y-4">
//               <div>
//                 <h3 className="font-medium mb-2">Teléfonos</h3>
               




// {contactInfo.phones.map((phone, index) => (
//     <div key={index} className="flex items-center space-x-2 mb-2">
//       <span className="px-2 py-1 bg-gray-100 rounded">
//         {phone.type === 'main' && 'Principal'}
//         {phone.type === 'whatsapp' && 'WhatsApp'}
//         {phone.type === 'delivery' && 'Delivery'}
//       </span>
//       <span>{phone.number}</span>
//       {phone.description && (
//         <span className="text-gray-500">({phone.description})</span>
//       )}
//     </div>
//   ))}
// </div>

// {/* Ubicación */}
// <div>
//   <h3 className="font-medium mb-2">Ubicación</h3>
//   <p>{contactInfo.location.address}</p>
//   <p>{contactInfo.location.city}, {contactInfo.location.state}</p>
//   {contactInfo.location.postalCode && (
//     <p>CP: {contactInfo.location.postalCode}</p>
//   )}
//   {contactInfo.location.coordinates && (
//     <p className="text-sm text-gray-500 mt-1">
//       Coordenadas: {contactInfo.location.coordinates.latitude}, 
//       {contactInfo.location.coordinates.longitude}
//     </p>
//   )}
// </div>

// {/* Redes Sociales */}
// <div>
//   <h3 className="font-medium mb-2">Redes Sociales</h3>
//   <div className="space-y-2">
//     {contactInfo.socialMedia.facebook && (
//       <a 
//         href={contactInfo.socialMedia.facebook}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="flex items-center text-blue-600 hover:text-blue-800"
//       >
//         <span className="mr-2">Facebook</span>
//         <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17v-7H9v-2h2V8.5C11 6.57 12.57 5 14.5 5H17v2h-2.5c-.55 0-1 .45-1 1v2h3l-.5 2h-2.5v7h-2z" />
//         </svg>
//       </a>
//     )}
//     {contactInfo.socialMedia.instagram && (
//       <a 
//         href={contactInfo.socialMedia.instagram}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="flex items-center text-pink-600 hover:text-pink-800"
//       >
//         <span className="mr-2">Instagram</span>
//         <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-12.5c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
//         </svg>
//       </a>
//     )}
//     {contactInfo.socialMedia.twitter && (
//       <a 
//         href={contactInfo.socialMedia.twitter}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="flex items-center text-blue-400 hover:text-blue-600"
//       >
//         <span className="mr-2">Twitter</span>
//         <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
//         </svg>
//       </a>
//     )}
//   </div>
// </div>

// {/* Servicios de Delivery */}
// {contactInfo.deliveryServices && contactInfo.deliveryServices.length > 0 && (
//   <div>
//     <h3 className="font-medium mb-2">Servicios de Delivery</h3>
//     <div className="space-y-2">
//       {contactInfo.deliveryServices.map((service, index) => (
//         <div key={index} className="flex items-center justify-between">
//           <span>{service.name}</span>
//           {service.url && (
//             <a
//               href={service.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 hover:text-blue-800"
//             >
//               Ordenar aquí
//             </a>
//           )}
//           <span className={`px-2 py-1 rounded ${
//             service.isActive 
//               ? 'bg-green-100 text-green-800' 
//               : 'bg-red-100 text-red-800'
//           }`}>
//             {service.isActive ? 'Activo' : 'Inactivo'}
//           </span>
//         </div>
//       ))}
//     </div>
//   </div>
// )}
// </div>
// )}
// </div>
// </div>

// );
// };

// export default ContactInfo;

// src/components/schedule/ContactInfo.js
import React, { useState, useEffect } from 'react';
import { GeoPoint } from 'firebase/firestore';

const ContactInfo = ({ contactInfo, onUpdate }) => {
  const [editing, setEditing] = useState(false);
  const [editData, setEditData] = useState({
    phones: [],
    location: {
      address: '',
      city: '',
      state: '',
      postalCode: '',
      coordinates: null
    },
    socialMedia: {
      facebook: '',
      instagram: '',
      twitter: ''
    },
    deliveryServices: []
  });

  useEffect(() => {
    if (contactInfo) {
      setEditData(contactInfo);
    }
  }, [contactInfo]);

  const handleSave = () => {
    onUpdate(editData);
    setEditing(false);
  };

  const addPhone = () => {
    setEditData({
      ...editData,
      phones: [
        ...editData.phones,
        { number: '', type: 'main', description: '' }
      ]
    });
  };

  const removePhone = (index) => {
    const newPhones = editData.phones.filter((_, i) => i !== index);
    setEditData({ ...editData, phones: newPhones });
  };

  const updatePhone = (index, field, value) => {
    const newPhones = [...editData.phones];
    newPhones[index] = { ...newPhones[index], [field]: value };
    setEditData({ ...editData, phones: newPhones });
  };

  const addDeliveryService = () => {
    setEditData({
      ...editData,
      deliveryServices: [
        ...editData.deliveryServices,
        { name: '', url: '', isActive: true }
      ]
    });
  };

  const removeDeliveryService = (index) => {
    const newServices = editData.deliveryServices.filter((_, i) => i !== index);
    setEditData({ ...editData, deliveryServices: newServices });
  };

  const updateDeliveryService = (index, field, value) => {
    const newServices = [...editData.deliveryServices];
    newServices[index] = { ...newServices[index], [field]: value };
    setEditData({ ...editData, deliveryServices: newServices });
  };

  const updateCoordinates = (lat, lng) => {
    try {
      const geoPoint = new GeoPoint(parseFloat(lat), parseFloat(lng));
      setEditData({
        ...editData,
        location: {
          ...editData.location,
          coordinates: geoPoint
        }
      });
    } catch (error) {
      console.error('Error al actualizar coordenadas:', error);
    }
  };

  const renderEditMode = () => (
    <div className="space-y-6">
      {/* Teléfonos */}
      <div className="border-b pb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Teléfonos</h3>
        {editData.phones.map((phone, index) => (
          <div key={index} className="flex items-center gap-4 mb-4">
            <select
              value={phone.type}
              onChange={(e) => updatePhone(index, 'type', e.target.value)}
              className="p-2 border rounded-md"
            >
              <option value="main">Principal</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="delivery">Delivery</option>
            </select>
            <input
              type="tel"
              value={phone.number}
              onChange={(e) => updatePhone(index, 'number', e.target.value)}
              placeholder="Número de teléfono"
              className="p-2 border rounded-md flex-1"
            />
            <input
              type="text"
              value={phone.description}
              onChange={(e) => updatePhone(index, 'description', e.target.value)}
              placeholder="Descripción (opcional)"
              className="p-2 border rounded-md flex-1"
            />
            <button
              onClick={() => removePhone(index)}
              className="text-red-600 hover:text-red-800 px-2"
            >
              Eliminar
            </button>
          </div>
        ))}
        <button
          onClick={addPhone}
          className="text-blue-600 hover:text-blue-800"
        >
          + Agregar teléfono
        </button>
      </div>

      {/* Ubicación */}
      <div className="border-b pb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Ubicación</h3>
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            value={editData.location.address}
            onChange={(e) => setEditData({
              ...editData,
              location: { ...editData.location, address: e.target.value }
            })}
            placeholder="Dirección completa"
            className="p-2 border rounded-md"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              value={editData.location.city}
              onChange={(e) => setEditData({
                ...editData,
                location: { ...editData.location, city: e.target.value }
              })}
              placeholder="Ciudad"
              className="p-2 border rounded-md"
            />
            <input
              type="text"
              value={editData.location.state}
              onChange={(e) => setEditData({
                ...editData,
                location: { ...editData.location, state: e.target.value }
              })}
              placeholder="Estado/Provincia"
              className="p-2 border rounded-md"
            />
          </div>
          <input
            type="text"
            value={editData.location.postalCode}
            onChange={(e) => setEditData({
              ...editData,
              location: { ...editData.location, postalCode: e.target.value }
            })}
            placeholder="Código Postal"
            className="p-2 border rounded-md"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              step="any"
              value={editData.location.coordinates?.latitude || ''}
              onChange={(e) => updateCoordinates(e.target.value, editData.location.coordinates?.longitude || 0)}
              placeholder="Latitud"
              className="p-2 border rounded-md"
            />
            <input
              type="number"
              step="any"
              value={editData.location.coordinates?.longitude || ''}
              onChange={(e) => updateCoordinates(editData.location.coordinates?.latitude || 0, e.target.value)}
              placeholder="Longitud"
              className="p-2 border rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Redes Sociales */}
      <div className="border-b pb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Redes Sociales</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Facebook</label>
            <input
              type="url"
              value={editData.socialMedia.facebook}
              onChange={(e) => setEditData({
                ...editData,
                socialMedia: { ...editData.socialMedia, facebook: e.target.value }
              })}
              placeholder="URL de Facebook"
              className="p-2 border rounded-md w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Instagram</label>
            <input
              type="url"
              value={editData.socialMedia.instagram}
              onChange={(e) => setEditData({
                ...editData,
                socialMedia: { ...editData.socialMedia, instagram: e.target.value }
              })}
              placeholder="URL de Instagram"
              className="p-2 border rounded-md w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Twitter</label>
            <input
              type="url"
              value={editData.socialMedia.twitter}
              onChange={(e) => setEditData({
                ...editData,
                socialMedia: { ...editData.socialMedia, twitter: e.target.value }
              })}
              placeholder="URL de Twitter"
              className="p-2 border rounded-md w-full"
            />
          </div>
        </div>
      </div>

      {/* Servicios de Delivery */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Servicios de Delivery</h3>
        {editData.deliveryServices.map((service, index) => (
          <div key={index} className="flex items-center gap-4 mb-4">
            <input
              type="text"
              value={service.name}
              onChange={(e) => updateDeliveryService(index, 'name', e.target.value)}
              placeholder="Nombre del servicio"
              className="p-2 border rounded-md flex-1"
            />
            <input
              type="url"
              value={service.url}
              onChange={(e) => updateDeliveryService(index, 'url', e.target.value)}
              placeholder="URL del servicio"
              className="p-2 border rounded-md flex-1"
            />
            <select
              value={service.isActive ? 'active' : 'inactive'}
              onChange={(e) => updateDeliveryService(index, 'isActive', e.target.value === 'active')}
              className="p-2 border rounded-md"
            >
              <option value="active">Activo</option>
              <option value="inactive">Inactivo</option>
            </select>
            <button
              onClick={() => removeDeliveryService(index)}
              className="text-red-600 hover:text-red-800 px-2"
            >
              Eliminar
            </button>
          </div>
        ))}
        <button
          onClick={addDeliveryService}
          className="text-blue-600 hover:text-blue-800"
        >
          + Agregar servicio de delivery
        </button>
      </div>
    </div>
  );

  const renderViewMode = () => (
    <div className="space-y-6">
      {/* Teléfonos */}
      <div className="border-b pb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Teléfonos</h3>
        <div className="space-y-2">
          {contactInfo.phones.map((phone, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className={`px-2 py-1 rounded-full text-sm ${
                phone.type === 'main' ? 'bg-blue-100 text-blue-800' :
                phone.type === 'whatsapp' ? 'bg-green-100 text-green-800' :
                'bg-purple-100 text-purple-800'
              }`}>
                {phone.type === 'main' ? 'Principal' :
                 phone.type === 'whatsapp' ? 'WhatsApp' : 'Delivery'}
              </span>
              <span className="font-medium">{phone.number}</span>
              {phone.description && (
                <span className="text-gray-500">({phone.description})</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Ubicación */}
      <div className="border-b pb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Ubicación</h3>
        <div className="space-y-2">
          <p>{contactInfo.location.address}</p>
          <p>{contactInfo.location.city}, {contactInfo.location.state}</p>
          {contactInfo.location.postalCode && (
            <p>CP: {contactInfo.location.postalCode}</p>
          )}
          {contactInfo.location.coordinates && (
            <p className="text-sm text-gray-500">
              Coordenadas: {contactInfo.location.coordinates.latitude}, 
              {contactInfo.location.coordinates.longitude}
            </p>
          )}
        </div>
      </div>

      {/* Redes Sociales */}
      <div className="border-b pb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Redes Sociales</h3>
        <div className="space-y-2">
          {contactInfo.socialMedia.facebook && (
            <a
              href={contactInfo.socialMedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <span>Facebook</span>
            </a>
          )}
          {contactInfo.socialMedia.instagram && (
            <a
              href={contactInfo.socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-pink-600 hover:text-pink-800"
            >
              <span>Instagram</span>
            </a>
          )}
          {contactInfo.socialMedia.twitter && (
            <a
              href={contactInfo.socialMedia.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-400 hover:text-blue-600"
            >
              <span>Twitter</span>
            </a>
          )}
        </div>
      </div>

      {/* Servicios de Delivery */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Servicios de Delivery</h3>
        <div className="space-y-2">
          {contactInfo.deliveryServices.map((service, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="font-medium">{service.name}</span>
                <span className={`px-2 py-1 rounded-full text-sm ${
                  service.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {service.isActive ? 'Activo' : 'Inactivo'}
                </span>
              </div>
              {service.url && (
                <a
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Ordenar
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
      




















            <h2 className="text-xl font-bold text-gray-900">
          Información de Contacto
        </h2>
        <div className="flex space-x-2">
          {editing ? (
            <>
              <button
                onClick={() => setEditing(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancelar
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Guardar
              </button>
            </>
          ) : (
            <button
              onClick={() => setEditing(true)}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Editar
            </button>
          )}
        </div>
      </div>

      <div className="mt-6">
        {editing ? renderEditMode() : renderViewMode()}
      </div>

      {/* Mensajes de retroalimentación */}
      <div className="mt-4">
        {editing && (
          <p className="text-sm text-gray-500">
            * Todos los cambios se guardarán al hacer clic en "Guardar"
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactInfo;