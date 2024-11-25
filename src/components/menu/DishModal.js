// // src/components/menu/DishModal.js
// import React, { useRef } from 'react';

// const DishModal = ({ 
//   isOpen, 
//   onClose, 
//   dish, 
//   setDish, 
//   onSave, 
//   categories,
//   isEditing 
// }) => {
//   const fileInputRef = useRef();

//   if (!isOpen) return null;

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setDish({
//         ...dish,
//         imageFile: file,
//         imagePreview: URL.createObjectURL(file)
//       });
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//       <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
//         <h2 className="text-xl font-bold mb-4">
//           {isEditing ? 'Editar Plato' : 'Nuevo Plato'}
//         </h2>
        
//         <select
//           className="w-full p-2 mb-4 border rounded"
//           value={dish.categoryId}
//           onChange={(e) => setDish({ ...dish, categoryId: e.target.value })}
//           required
//         >
//           <option value="">Seleccionar categoría</option>
//           {categories.map(category => (
//             <option key={category.id} value={category.id}>
//               {category.name}
//             </option>
//           ))}
//         </select>

//         <input
//           type="text"
//           placeholder="Nombre del plato"
//           className="w-full p-2 mb-4 border rounded"
//           value={dish.name}
//           onChange={(e) => setDish({ ...dish, name: e.target.value })}
//         />

//         <textarea
//           placeholder="Descripción"
//           className="w-full p-2 mb-4 border rounded h-24"
//           value={dish.description}
//           onChange={(e) => setDish({ ...dish, description: e.target.value })}
//         />

//         <input
//           type="number"
//           placeholder="Precio"
//           className="w-full p-2 mb-4 border rounded"
//           value={dish.price}
//           onChange={(e) => setDish({ ...dish, price: e.target.value })}
//           step="0.01"
//         />

//         <div className="mb-4">
//           <input
//             type="file"
//             ref={fileInputRef}
//             className="hidden"
//             accept="image/*"
//             onChange={handleImageChange}
//           />
//           <button
//             type="button"
//             onClick={() => fileInputRef.current.click()}
//             className="w-full p-2 bg-gray-100 text-gray-700 rounded border border-dashed border-gray-300 hover:bg-gray-200"
//           >
//             {dish.imageFile || dish.imageUrl ? 'Cambiar imagen' : 'Seleccionar imagen'}
//           </button>
//           {(dish.imagePreview || dish.imageUrl) && (
//             <div className="mt-2">
//               <img
//                 src={dish.imagePreview || dish.imageUrl}
//                 alt="Preview"
//                 className="w-full h-48 object-cover rounded"
//               />
//             </div>
//           )}
//         </div>

//         <div className="flex justify-end space-x-2">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
//           >
//             Cancelar
//           </button>
//           <button
//             onClick={onSave}
//             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           >
//             Guardar
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DishModal;


// src/components/menu/DishModal.js
import React, { useRef, useState } from 'react';

const DishModal = ({ 
  isOpen, 
  onClose, 
  dish, 
  setDish, 
  onSave, 
  categories,
  isEditing 
}) => {
  const fileInputRef = useRef();
  const [imageError, setImageError] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const IMGBB_API_KEY = '6e292f439c62a633de6137bd80966da3'; // Tu API key de ImgBB

  if (!isOpen) return null;

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
        delete_url: data.data.delete_url,
        thumbnail: data.data.thumb?.url || data.data.url
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

    if (file.size > 2 * 1024 * 1024) {
      setImageError('La imagen no debe superar los 2MB');
      return;
    }

    try {
      setIsUploading(true);
      setImageError('');

      // Crear preview local
      const localPreview = URL.createObjectURL(file);
      setDish(prev => ({
        ...prev,
        imagePreview: localPreview
      }));

      // Subir a ImgBB
      const imageData = await uploadToImgBB(file);
      
      // Actualizar dish con la URL de ImgBB
      setDish(prev => ({
        ...prev,
        imageUrl: imageData.url,
        imageDeleteUrl: imageData.delete_url, // Guardar URL de eliminación por si se necesita
        thumbnailUrl: imageData.thumbnail,
        imagePreview: localPreview // Mantener el preview local
      }));

    } catch (error) {
      setImageError('Error al subir la imagen. Por favor, intenta de nuevo.');
      console.error('Error:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveImage = () => {
    setDish(prev => ({
      ...prev,
      imageFile: null,
      imageUrl: '',
      imageDeleteUrl: '',
      thumbnailUrl: '',
      imagePreview: null
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">
          {isEditing ? 'Editar Plato' : 'Nuevo Plato'}
        </h2>
        
        <form onSubmit={(e) => {
          e.preventDefault();
          onSave();
        }}>
          {/* Categoría */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Categoría
            </label>
            <select
              className="w-full p-2 border rounded-md"
              value={dish.categoryId}
              onChange={(e) => setDish({ ...dish, categoryId: e.target.value })}
              required
            >
              <option value="">Seleccionar categoría</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Nombre */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nombre del plato
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              value={dish.name}
              onChange={(e) => setDish({ ...dish, name: e.target.value })}
              required
            />
          </div>

          {/* Descripción */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Descripción
            </label>
            <textarea
              className="w-full p-2 border rounded-md h-24"
              value={dish.description}
              onChange={(e) => setDish({ ...dish, description: e.target.value })}
              required
            />
          </div>

          {/* Precio */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Precio
            </label>
            <input
              type="number"
              className="w-full p-2 border rounded-md"
              value={dish.price}
              onChange={(e) => setDish({ ...dish, price: e.target.value })}
              step="0.01"
              min="0"
              required
            />
          </div>

          {/* Imagen */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Imagen del plato
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
                dish.imageUrl ? 'Cambiar imagen' : 'Seleccionar imagen'}
            </button>
            
            {imageError && (
              <p className="mt-1 text-sm text-red-600">
                {imageError}
              </p>
            )}

            {(dish.imagePreview || dish.imageUrl) && (
              <div className="mt-2 relative">
                <img
                  src={dish.imagePreview || dish.imageUrl}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded"
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
            )}
          </div>

          {/* Botones de acción */}
          <div className="flex justify-end space-x-2 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              disabled={isUploading}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              disabled={isUploading}
            >
              {isUploading ? 'Procesando...' : 'Guardar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DishModal;