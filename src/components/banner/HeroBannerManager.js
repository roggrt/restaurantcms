// import React, { useState } from 'react';

// const HeroBannerManager = ({ banners = [], onUpdate, onDelete }) => {
//   const [isAdding, setIsAdding] = useState(false);
//   const [newBanner, setNewBanner] = useState({
//     title: '',
//     subtitle: '',
//     imageUrl: '',
//     buttonText: '',
//     buttonUrl: '#',
//     secondaryButtonText: '',
//     secondaryButtonUrl: '#',
//     isActive: true,
//     style: 'centered', // centered, left-aligned, right-aligned
//     overlayOpacity: 50,
//     textColor: 'white',
//     startDate: '',
//     endDate: '',
//     priority: 1
//   });

//   const handleAdd = () => {
//     if (!newBanner.title || !newBanner.imageUrl) {
//       alert('Por favor complete los campos requeridos');
//       return;
//     }

//     onUpdate(newBanner);
//     setIsAdding(false);
//     setNewBanner({
//       title: '',
//       subtitle: '',
//       imageUrl: '',
//       buttonText: '',
//       buttonUrl: '#',
//       secondaryButtonText: '',
//       secondaryButtonUrl: '#',
//       isActive: true,
//       style: 'centered',
//       overlayOpacity: 50,
//       textColor: 'white',
//       startDate: '',
//       endDate: '',
//       priority: 1
//     });
//   };

//   const bannerStyles = [
//     { value: 'centered', label: 'Centrado' },
//     { value: 'left-aligned', label: 'Alineado a la Izquierda' },
//     { value: 'right-aligned', label: 'Alineado a la Derecha' }
//   ];

//   return (
//     <div className="bg-white rounded-lg shadow mt-6">
//       <div className="p-4">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-lg font-semibold">Banners Hero</h2>
//           <button
//             onClick={() => setIsAdding(true)}
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           >
//             Agregar Banner
//           </button>
//         </div>

//         {isAdding && (
//           <div className="mb-4 p-4 bg-gray-50 rounded">
//             <div className="grid grid-cols-1 gap-4">
//               <div>
//                 <label className="block mb-1">Título *</label>
//                 <input
//                   type="text"
//                   value={newBanner.title}
//                   onChange={(e) => setNewBanner({...newBanner, title: e.target.value})}
//                   className="w-full p-2 border rounded"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1">Subtítulo</label>
//                 <input
//                   type="text"
//                   value={newBanner.subtitle}
//                   onChange={(e) => setNewBanner({...newBanner, subtitle: e.target.value})}
//                   className="w-full p-2 border rounded"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1">URL de Imagen *</label>
//                 <input
//                   type="url"
//                   value={newBanner.imageUrl}
//                   onChange={(e) => setNewBanner({...newBanner, imageUrl: e.target.value})}
//                   className="w-full p-2 border rounded"
//                   required
//                 />
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block mb-1">Texto del Botón Principal</label>
//                   <input
//                     type="text"
//                     value={newBanner.buttonText}
//                     onChange={(e) => setNewBanner({...newBanner, buttonText: e.target.value})}
//                     className="w-full p-2 border rounded"
//                   />
//                 </div>
//                 <div>
//                   <label className="block mb-1">URL del Botón Principal</label>
//                   <input
//                     type="text"
//                     value={newBanner.buttonUrl}
//                     onChange={(e) => setNewBanner({...newBanner, buttonUrl: e.target.value})}
//                     className="w-full p-2 border rounded"
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block mb-1">Texto del Botón Secundario</label>
//                   <input
//                     type="text"
//                     value={newBanner.secondaryButtonText}
//                     onChange={(e) => setNewBanner({...newBanner, secondaryButtonText: e.target.value})}
//                     className="w-full p-2 border rounded"
//                   />
//                 </div>
//                 <div>
//                   <label className="block mb-1">URL del Botón Secundario</label>
//                   <input
//                     type="text"
//                     value={newBanner.secondaryButtonUrl}
//                     onChange={(e) => setNewBanner({...newBanner, secondaryButtonUrl: e.target.value})}
//                     className="w-full p-2 border rounded"
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block mb-1">Fecha de Inicio</label>
//                   <input
//                     type="datetime-local"
//                     value={newBanner.startDate}
//                     onChange={(e) => setNewBanner({...newBanner, startDate: e.target.value})}
//                     className="w-full p-2 border rounded"
//                   />
//                 </div>
//                 <div>
//                   <label className="block mb-1">Fecha de Fin</label>
//                   <input
//                     type="datetime-local"
//                     value={newBanner.endDate}
//                     onChange={(e) => setNewBanner({...newBanner, endDate: e.target.value})}
//                     className="w-full p-2 border rounded"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block mb-1">Estilo de Presentación</label>
//                 <select
//                   value={newBanner.style}
//                   onChange={(e) => setNewBanner({...newBanner, style: e.target.value})}
//                   className="w-full p-2 border rounded"
//                 >
//                   {bannerStyles.map(style => (
//                     <option key={style.value} value={style.value}>
//                       {style.label}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="block mb-1">Opacidad del Overlay ({newBanner.overlayOpacity}%)</label>
//                 <input
//                   type="range"
//                   min="0"
//                   max="100"
//                   value={newBanner.overlayOpacity}
//                   onChange={(e) => setNewBanner({...newBanner, overlayOpacity: e.target.value})}
//                   className="w-full"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1">Prioridad</label>
//                 <input
//                   type="number"
//                   value={newBanner.priority}
//                   onChange={(e) => setNewBanner({...newBanner, priority: parseInt(e.target.value)})}
//                   className="w-full p-2 border rounded"
//                   min="1"
//                 />
//               </div>

//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   checked={newBanner.isActive}
//                   onChange={(e) => setNewBanner({...newBanner, isActive: e.target.checked})}
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
//           {banners.map((banner) => (
//             <div key={banner.id} className="border rounded p-4">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h3 className="font-medium">{banner.title}</h3>
//                   <p className="text-sm text-gray-600">{banner.subtitle}</p>
//                   <div className="mt-2">
//                     <span className={`px-2 py-1 rounded text-sm ${banner.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
//                       {banner.isActive ? 'Activo' : 'Inactivo'}
//                     </span>
//                     <span className="ml-2 text-sm text-gray-600">
//                       Prioridad: {banner.priority}
//                     </span>
//                   </div>
//                   {banner.startDate && banner.endDate && (
//                     <div className="mt-2 text-sm text-gray-600">
//                       Vigencia: {new Date(banner.startDate).toLocaleDateString()} - {new Date(banner.endDate).toLocaleDateString()}
//                     </div>
//                   )}
//                 </div>
//                 <button
//                   onClick={() => onDelete(banner.id)}
//                   className="text-red-600 hover:text-red-800"
//                 >
//                   Eliminar
//                 </button>
//               </div>
//               <div className="mt-2">
//                 <img
//                   src={banner.imageUrl}
//                   alt={banner.title}
//                   className="w-full h-32 object-cover rounded"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroBannerManager;



import React, { useState, useRef } from 'react';

const HeroBannerManager = ({ banners = [], onUpdate, onDelete }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [imageError, setImageError] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef();
  const IMGBB_API_KEY = '6e292f439c62a633de6137bd80966da3';

  const [newBanner, setNewBanner] = useState({
    title: '',
    subtitle: '',
    imageUrl: '',
    imagePreview: null,
    buttonText: '',
    buttonUrl: '#',
    secondaryButtonText: '',
    secondaryButtonUrl: '#',
    isActive: true,
    style: 'centered',
    overlayOpacity: 50,
    textColor: 'white',
    startDate: '',
    endDate: '',
    priority: 1
  });

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

    // Recomendado: 1920x1080 o similar ratio 16:9
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      setImageError('La imagen no debe superar los 5MB');
      return;
    }

    try {
      setIsUploading(true);
      setImageError('');

      // Crear preview local
      const localPreview = URL.createObjectURL(file);
      setNewBanner(prev => ({
        ...prev,
        imagePreview: localPreview
      }));

      // Subir a ImgBB
      const imageData = await uploadToImgBB(file);
      
      // Actualizar banner con la URL de ImgBB
      setNewBanner(prev => ({
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
    setNewBanner(prev => ({
      ...prev,
      imageUrl: '',
      imageDeleteUrl: '',
      imagePreview: null
    }));
  };

  const handleAdd = () => {
    if (!newBanner.title || !newBanner.imageUrl) {
      alert('Por favor complete los campos requeridos y agregue una imagen');
      return;
    }

    onUpdate(newBanner);
    setIsAdding(false);
    setNewBanner({
      title: '',
      subtitle: '',
      imageUrl: '',
      imagePreview: null,
      buttonText: '',
      buttonUrl: '#',
      secondaryButtonText: '',
      secondaryButtonUrl: '#',
      isActive: true,
      style: 'centered',
      overlayOpacity: 50,
      textColor: 'white',
      startDate: '',
      endDate: '',
      priority: 1
    });
  };

  const bannerStyles = [
    { value: 'centered', label: 'Centrado' },
    { value: 'left-aligned', label: 'Alineado a la Izquierda' },
    { value: 'right-aligned', label: 'Alineado a la Derecha' }
  ];

  return (
    <div className="bg-white rounded-lg shadow mt-6">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Banners Hero</h2>
          <button
            onClick={() => setIsAdding(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Agregar Banner
          </button>
        </div>

        {isAdding && (
          <div className="mb-4 p-4 bg-gray-50 rounded">
            <div className="grid grid-cols-1 gap-4">
              {/* Imagen */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Imagen del Banner 
                  <span className="text-sm text-gray-500 ml-2">
                    (Recomendado: 1920x1080px, Máx: 5MB)
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
                    newBanner.imageUrl ? 'Cambiar imagen' : 'Seleccionar imagen'}
                </button>
                
                {imageError && (
                  <p className="mt-1 text-sm text-red-600">
                    {imageError}
                  </p>
                )}

                {(newBanner.imagePreview || newBanner.imageUrl) && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-600 mb-2">Vista previa del Banner:</p>
                    <div className="relative w-full h-[calc(9/16*100%)] bg-black rounded overflow-hidden">
                      <img
                        src={newBanner.imagePreview || newBanner.imageUrl}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black opacity-50" 
                           style={{ opacity: newBanner.overlayOpacity / 100 }}></div>
                      <div className={`absolute inset-0 flex flex-col items-${newBanner.style === 'centered' ? 'center' : newBanner.style === 'left-aligned' ? 'start' : 'end'} justify-center p-8`}>
                        <h2 className="text-3xl font-bold mb-2" style={{ color: newBanner.textColor }}>
                          {newBanner.title || 'Título del Banner'}
                        </h2>
                        <p className="text-xl mb-4" style={{ color: newBanner.textColor }}>
                          {newBanner.subtitle || 'Subtítulo del Banner'}
                        </p>
                        <div className="flex gap-4">
                          {newBanner.buttonText && (
                            <button className="px-6 py-2 bg-white text-gray-900 rounded-full">
                              {newBanner.buttonText}
                            </button>
                          )}
                          {newBanner.secondaryButtonText && (
                            <button className="px-6 py-2 border-2 border-white text-white rounded-full">
                              {newBanner.secondaryButtonText}
                            </button>
                          )}
                        </div>
                      </div>
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
                <label className="block mb-1">Título *</label>
                <input
                  type="text"
                  value={newBanner.title}
                  onChange={(e) => setNewBanner({...newBanner, title: e.target.value})}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div>
                <label className="block mb-1">Subtítulo</label>
                <input
                  type="text"
                  value={newBanner.subtitle}
                  onChange={(e) => setNewBanner({...newBanner, subtitle: e.target.value})}
                  className="w-full p-2 border rounded"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1">Texto del Botón Principal</label>
                  <input
                    type="text"
                    value={newBanner.buttonText}
                    onChange={(e) => setNewBanner({...newBanner, buttonText: e.target.value})}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1">URL del Botón Principal</label>
                  <input
                    type="text"
                    value={newBanner.buttonUrl}
                    onChange={(e) => setNewBanner({...newBanner, buttonUrl: e.target.value})}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1">Texto del Botón Secundario</label>
                  <input
                    type="text"
                    value={newBanner.secondaryButtonText}
                    onChange={(e) => setNewBanner({...newBanner, secondaryButtonText: e.target.value})}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1">URL del Botón Secundario</label>
                  <input
                    type="text"
                    value={newBanner.secondaryButtonUrl}
                    onChange={(e) => setNewBanner({...newBanner, secondaryButtonUrl: e.target.value})}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1">Fecha de Inicio</label>
                  <input
                    type="datetime-local"
                    value={newBanner.startDate}
                    onChange={(e) => setNewBanner({...newBanner, startDate: e.target.value})}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1">Fecha de Fin</label>
                  <input
                    type="datetime-local"
                    value={newBanner.endDate}
                    onChange={(e) => setNewBanner({...newBanner, endDate: e.target.value})}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1">Estilo de Presentación</label>
                <select
                  value={newBanner.style}
                  onChange={(e) => setNewBanner({...newBanner, style: e.target.value})}
                  className="w-full p-2 border rounded"
                >
                  {bannerStyles.map(style => (
                    <option key={style.value} value={style.value}>
                      {style.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-1">Opacidad del Overlay ({newBanner.overlayOpacity}%)</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={newBanner.overlayOpacity}
                  onChange={(e) => setNewBanner({...newBanner, overlayOpacity: parseInt(e.target.value)})}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block mb-1">Color del Texto</label>
                <input
                  type="color"
                  value={newBanner.textColor}
                  onChange={(e) => setNewBanner({...newBanner, textColor: e.target.value})}
                  className="w-full p-1 h-10 border rounded"
                />
              </div>

              <div>
                <label className="block mb-1">Prioridad</label>
                <input
                  type="number"
                  value={newBanner.priority}
                  onChange={(e) => setNewBanner({...newBanner, priority: parseInt(e.target.value)})}
                  className="w-full p-2 border rounded"
                  min="1"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={newBanner.isActive}
                  onChange={(e) => setNewBanner({...newBanner, isActive: e.target.checked})}
                  className="mr-2"
                />
                <label>Activo</label>
              </div>
            </div>

            <div className="flex justify-end space-x-2 mt-4">
            




















                    <button
                onClick={() => setIsAdding(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancelar
              </button>
              <button
                onClick={handleAdd}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                disabled={isUploading}
              >
                {isUploading ? 'Procesando...' : 'Guardar'}
              </button>
            </div>
          </div>
        )}

        {/* Lista de banners existentes */}
        <div className="space-y-6">
          {banners.map((banner) => (
            <div key={banner.id} className="border rounded-lg overflow-hidden">
              <div className="relative w-full h-48">
                <img
                  src={banner.imageUrl}
                  alt={banner.title}
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute inset-0 bg-black" 
                  style={{ opacity: banner.overlayOpacity / 100 }}
                ></div>
                <div className={`absolute inset-0 flex flex-col items-${banner.style === 'centered' ? 'center' : banner.style === 'left-aligned' ? 'start' : 'end'} justify-center p-6`}>
                  <h3 className="text-xl font-bold mb-1" style={{ color: banner.textColor }}>
                    {banner.title}
                  </h3>
                  {banner.subtitle && (
                    <p className="text-sm mb-2" style={{ color: banner.textColor }}>
                      {banner.subtitle}
                    </p>
                  )}
                  {/* Vista previa de botones */}
                  <div className="flex gap-2 scale-75 origin-left">
                    {banner.buttonText && (
                      <span className="px-4 py-1 bg-white text-gray-900 rounded-full text-sm">
                        {banner.buttonText}
                      </span>
                    )}
                    {banner.secondaryButtonText && (
                      <span className="px-4 py-1 border border-white text-white rounded-full text-sm">
                        {banner.secondaryButtonText}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Información y controles del banner */}
              <div className="p-4 bg-white">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${banner.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {banner.isActive ? 'Activo' : 'Inactivo'}
                      </span>
                      <span className="text-sm text-gray-600">
                        Prioridad: {banner.priority}
                      </span>
                    </div>
                    {(banner.startDate || banner.endDate) && (
                      <div className="text-sm text-gray-600">
                        {banner.startDate && (
                          <span>Desde: {new Date(banner.startDate).toLocaleDateString()}</span>
                        )}
                        {banner.endDate && (
                          <span className="ml-2">Hasta: {new Date(banner.endDate).toLocaleDateString()}</span>
                        )}
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => onDelete(banner.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Eliminar
                  </button>
                </div>

                {/* Detalles adicionales */}
                <div className="mt-2 text-sm text-gray-600">
                  <div className="grid grid-cols-2 gap-4">
                    {banner.buttonUrl && (
                      <div>
                        <span className="font-medium">URL Principal:</span> {banner.buttonUrl}
                      </div>
                    )}
                    {banner.secondaryButtonUrl && (
                      <div>
                        <span className="font-medium">URL Secundaria:</span> {banner.secondaryButtonUrl}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroBannerManager;