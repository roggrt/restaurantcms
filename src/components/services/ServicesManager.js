


import React, { useState, useRef } from 'react';

const ServicesManager = ({ services = [], onUpdate, onDelete }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [imageError, setImageError] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef();
  const IMGBB_API_KEY = '6e292f439c62a633de6137bd80966da3';

  const [newService, setNewService] = useState({
    name: '',
    description: '',
    imageUrl: '',
    imagePreview: null,
    price: '',
    category: '',
    features: [],
    isActive: true,
    order: 1
  });

  const serviceCategories = [
    'Eventos Corporativos',
    'Celebraciones',
    'Música en Vivo',
    'Cenas Especiales',
    'Catering',
    'Área VIP',
    'Eventos Privados',
    'Chef a Domicilio'
  ];

  const uploadToImgBB = async (file) => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Error al subir la imagen');
      }

      const data = await response.json();
      return {
        url: data.data.url,
        delete_url: data.data.delete_url
      };
    } catch (error) {
      console.error('Error al subir a ImgBB:', error);
      throw new Error('Error al procesar la imagen');
    }
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validaciones
    const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      setImageError('Solo se permiten imágenes en formato JPG, PNG o WEBP');
      return;
    }

    // Recomendado: 800x600 para servicios
    const maxSize = 2 * 1024 * 1024; // 2MB
    if (file.size > maxSize) {
      setImageError('La imagen no debe superar los 2MB');
      return;
    }

    try {
      setIsUploading(true);
      setImageError('');

      // Crear preview local
      const localPreview = URL.createObjectURL(file);
      setNewService(prev => ({
        ...prev,
        imagePreview: localPreview
      }));

      // Subir a ImgBB
      const imageData = await uploadToImgBB(file);
      
      // Actualizar servicio con la URL de ImgBB
      setNewService(prev => ({
        ...prev,
        imageUrl: imageData.url,
        imageDeleteUrl: imageData.delete_url,
        imagePreview: localPreview
      }));

    } catch (error) {
      setImageError('Error al subir la imagen. Por favor, intenta de nuevo.');
      console.error('Error:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveImage = () => {
    setNewService(prev => ({
      ...prev,
      imageUrl: '',
      imageDeleteUrl: '',
      imagePreview: null
    }));
  };

  const handleFeatureAdd = () => {
    setNewService(prev => ({
      ...prev,
      features: [...prev.features, '']
    }));
  };

  const handleFeatureChange = (index, value) => {
    const newFeatures = [...newService.features];
    newFeatures[index] = value;
    setNewService(prev => ({
      ...prev,
      features: newFeatures
    }));
  };

  const handleFeatureRemove = (index) => {
    setNewService(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }));
  };

  const handleAdd = () => {
    if (!newService.name || !newService.description || !newService.imageUrl) {
      alert('Por favor complete los campos obligatorios e incluya una imagen');
      return;
    }

    onUpdate(newService);
    setIsAdding(false);
    setNewService({
      name: '',
      description: '',
      imageUrl: '',
      imagePreview: null,
      price: '',
      category: '',
      features: [],
      isActive: true,
      order: 1
    });
  };

  return (
    <div className="bg-white rounded-lg shadow mt-6">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Servicios Especiales</h2>
          <button
            onClick={() => setIsAdding(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Service
          </button>
        </div>

        {isAdding && (
          <div className="mb-4 p-4 bg-gray-50 rounded">
            <div className="grid grid-cols-1 gap-4">
              {/* Imagen */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image of service
                  <span className="text-sm text-gray-500 ml-2">
                    (Recomendado: 800x600px, Máx: 2MB)
                  </span>
                </label>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={handleImageChange}
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current.click()}
                  className="w-full p-2 bg-gray-100 text-gray-700 rounded border border-dashed border-gray-300 hover:bg-gray-200 disabled:opacity-50"
                  disabled={isUploading}
                >
                  {isUploading ? 'Subiendo...' :
                    newService.imageUrl ? 'Cambiar imagen' : 'Seleccionar imagen'}
                </button>
                
                {imageError && (
                  <p className="mt-1 text-sm text-red-600">
                    {imageError}
                  </p>
                )}

                {(newService.imagePreview || newService.imageUrl) && (
                  <div className="mt-4 relative">
                    <p className="text-sm text-gray-600 mb-2">Preview:</p>
                    <div className="relative rounded-lg overflow-hidden bg-white shadow-md">
                      <img
                        src={newService.imagePreview || newService.imageUrl}
                        alt="Preview"
                        className="w-full h-64 object-cover"
                      />
                      {!isUploading && (
                        <button
                          type="button"
                          onClick={handleRemoveImage}
                          className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label className="block mb-1">Name of service *</label>
                <input
                  type="text"
                  value={newService.name}
                  onChange={(e) => setNewService({...newService, name: e.target.value})}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div>
                <label className="block mb-1">Descripción *</label>
                <textarea
                  value={newService.description}
                  onChange={(e) => setNewService({...newService, description: e.target.value})}
                  className="w-full p-2 border rounded h-24"
                  required
                />
              </div>

              <div>
                <label className="block mb-1">Category</label>
                <select
                  value={newService.category}
                  onChange={(e) => setNewService({...newService, category: e.target.value})}
                  className="w-full p-2 border rounded"
                >
                  <option value="">Seleccionar categoría</option>
                  {serviceCategories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-1">Price</label>
                <input
                  type="text"
                  value={newService.price}
                  onChange={(e) => setNewService({...newService, price: e.target.value})}
                  className="w-full p-2 border rounded"
                  placeholder="Ej: Desde $99.99 o A consultar"
                />
              </div>

              <div>
                <label className="block mb-1">Detail</label>
                <div className="space-y-2">
                  {newService.features.map((feature, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={feature}
                        onChange={(e) => handleFeatureChange(index, e.target.value)}
                        className="flex-1 p-2 border rounded"
                        placeholder="Característica del servicio"
                      />
                      <button
                        type="button"
                        onClick={() => handleFeatureRemove(index)}
                        className="text-red-600 hover:text-red-800 px-2"
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={handleFeatureAdd}
                    className="text-blue-500 hover:text-blue-700 text-sm"
                  >
                    + Add detail
                  </button>
                </div>
              </div>

              <div>
                <label className="block mb-1">Orden</label>
                <input
                  type="number"
                  value={newService.order}
                  onChange={(e) => setNewService({...newService, order: parseInt(e.target.value)})}
                  className="w-full p-2 border rounded"
                  min="1"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={newService.isActive}
                  onChange={(e) => setNewService({...newService, isActive: e.target.checked})}
                  className="mr-2"
                />
                <label>Active</label>
              </div>

              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsAdding(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAdd}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  disabled={isUploading}
                >
                  {isUploading ? 'Procesando...' : 'Guardar'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Lista de servicios existentes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow overflow-hidden">
              {service.imageUrl && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">{service.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                  </div>
                  <button
                    onClick={() => onDelete(service.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </div>
                
                <div className="mt-2 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${service.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {service.isActive ? 'Activo' : 'Inactivo'}
                    </span>
                    {service.category && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                        {service.category}
                      </span>
                    )}
                    <span className="text-xs text-gray-600">
                      Order: {service.order}
                    </span>
                  </div>

                  {service.price && (
                    <p className="font-semibold text-blue-600">{service.price}</p>
                  )}

                  {service.features && service.features.length > 0 && (
                    <div className="mt-3">
                      <p className="text-sm font-medium mb-1">Details:</p>
                      <ul className="list-disc list-inside text-sm text-gray-600">
                        {service.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesManager;


// import React, { useState } from 'react';

// const ServicesManager = ({ services = [], onUpdate, onDelete }) => {
//   const [isAdding, setIsAdding] = useState(false);
//   const [newService, setNewService] = useState({
//     name: '',
//     description: '',
//     imageUrl: '',
//     price: '',
//     category: '',
//     features: [],
//     isActive: true,
//     order: 1
//   });

//   const serviceCategories = [
//     'Eventos Corporativos',
//     'Celebraciones',
//     'Música en Vivo',
//     'Cenas Especiales',
//     'Catering',
//     'Área VIP',
//     'Eventos Privados',
//     'Chef a Domicilio'
//   ];

//   const handleAdd = () => {
//     if (!newService.name || !newService.description) {
//       alert('Por favor complete los campos requeridos');
//       return;
//     }

//     onUpdate(newService);
//     setIsAdding(false);
//     setNewService({
//       name: '',
//       description: '',
//       imageUrl: '',
//       price: '',
//       category: '',
//       features: [],
//       isActive: true,
//       order: 1
//     });
//   };

//   const handleFeatureAdd = () => {
//     setNewService(prev => ({
//       ...prev,
//       features: [...prev.features, '']
//     }));
//   };

//   const handleFeatureChange = (index, value) => {
//     const newFeatures = [...newService.features];
//     newFeatures[index] = value;
//     setNewService(prev => ({
//       ...prev,
//       features: newFeatures
//     }));
//   };

//   const handleFeatureRemove = (index) => {
//     setNewService(prev => ({
//       ...prev,
//       features: prev.features.filter((_, i) => i !== index)
//     }));
//   };

//   return (
//     <div className="bg-white rounded-lg shadow mt-6">
//       <div className="p-4">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-lg font-semibold">Servicios Especiales</h2>
//           <button
//             onClick={() => setIsAdding(true)}
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           >
//             Agregar Servicio
//           </button>
//         </div>

//         {isAdding && (
//           <div className="mb-4 p-4 bg-gray-50 rounded">
//             <div className="grid grid-cols-1 gap-4">
//               <div>
//                 <label className="block mb-1">Nombre del Servicio *</label>
//                 <input
//                   type="text"
//                   value={newService.name}
//                   onChange={(e) => setNewService({...newService, name: e.target.value})}
//                   className="w-full p-2 border rounded"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1">Descripción *</label>
//                 <textarea
//                   value={newService.description}
//                   onChange={(e) => setNewService({...newService, description: e.target.value})}
//                   className="w-full p-2 border rounded h-24"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1">Categoría</label>
//                 <select
//                   value={newService.category}
//                   onChange={(e) => setNewService({...newService, category: e.target.value})}
//                   className="w-full p-2 border rounded"
//                 >
//                   <option value="">Seleccionar categoría</option>
//                   {serviceCategories.map(category => (
//                     <option key={category} value={category}>
//                       {category}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="block mb-1">URL de Imagen</label>
//                 <input
//                   type="url"
//                   value={newService.imageUrl}
//                   onChange={(e) => setNewService({...newService, imageUrl: e.target.value})}
//                   className="w-full p-2 border rounded"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1">Precio Base</label>
//                 <input
//                   type="text"
//                   value={newService.price}
//                   onChange={(e) => setNewService({...newService, price: e.target.value})}
//                   className="w-full p-2 border rounded"
//                   placeholder="Ej: Desde $99.99 o A consultar"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1">Características</label>
//                 {newService.features.map((feature, index) => (
//                   <div key={index} className="flex gap-2 mb-2">
//                     <input
//                       type="text"
//                       value={feature}
//                       onChange={(e) => handleFeatureChange(index, e.target.value)}
//                       className="flex-1 p-2 border rounded"
//                       placeholder="Característica del servicio"
//                     />
//                     <button
//                       onClick={() => handleFeatureRemove(index)}
//                       className="text-red-600 hover:text-red-800"
//                     >
//                       <i className="fas fa-times"></i>
//                     </button>
//                   </div>
//                 ))}
//                 <button
//                   type="button"
//                   onClick={handleFeatureAdd}
//                   className="text-blue-500 hover:text-blue-700 text-sm"
//                 >
//                   + Agregar característica
//                 </button>
//               </div>

//               <div>
//                 <label className="block mb-1">Orden</label>
//                 <input
//                   type="number"
//                   value={newService.order}
//                   onChange={(e) => setNewService({...newService, order: parseInt(e.target.value)})}
//                   className="w-full p-2 border rounded"
//                   min="1"
//                 />
//               </div>

//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   checked={newService.isActive}
//                   onChange={(e) => setNewService({...newService, isActive: e.target.checked})}
//                   className="mr-2"
//                 />
//                 <label>Activo</label>
//               </div>
//             </div>

//             <div className="flex justify-end space-x-2 mt-4">
//               <button
//                 onClick={() => setIsAdding(false)}
//                 className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
//               >
//                 Cancelar
//               </button>
//               <button
//                 onClick={handleAdd}
//                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//               >
//                 Guardar
//               </button>
//             </div>
//           </div>
//         )}

//         <div className="space-y-4">
//           {services.map((service) => (
//             <div key={service.id} className="border rounded p-4">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h3 className="font-medium">{service.name}</h3>
//                   <p className="text-sm text-gray-600">{service.description}</p>
//                   <div className="mt-2">
//                     <span className={`px-2 py-1 rounded text-sm ${service.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
//                       {service.isActive ? 'Activo' : 'Inactivo'}
//                     </span>
//                     {service.category && (
//                       <span className="ml-2 px-2 py-1 bg-gray-100 rounded text-sm">
//                         {service.category}
//                       </span>
//                     )}
//                     <span className="ml-2 text-sm text-gray-600">
//                       Orden: {service.order}
//                     </span>
//                   </div>
//                   {service.price && (
//                     <div className="mt-2 font-medium">
//                       {service.price}
//                     </div>
//                   )}
//                   {service.features && service.features.length > 0 && (
//                     <div className="mt-2">
//                       <p className="text-sm font-medium">Características:</p>
//                       <ul className="list-disc list-inside text-sm text-gray-600">
//                         {service.features.map((feature, index) => (
//                           <li key={index}>{feature}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                 </div>
//                 <button
//                   onClick={() => onDelete(service.id)}
//                   className="text-red-600 hover:text-red-800"
//                 >
//                   Eliminar
//                 </button>
//               </div>
//               {service.imageUrl && (
//                 <div className="mt-2">
//                   <img
//                     src={service.imageUrl}
//                     alt={service.name}
//                     className="w-full h-32 object-cover rounded"
//                   />
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesManager;