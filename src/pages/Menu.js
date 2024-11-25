// // // src/pages/Menu.js
// // import React, { useState, useEffect } from 'react';
// // import { 
// //   collection, 
// //   addDoc, 
// //   getDocs, 
// //   doc, 
// //   deleteDoc, 
// //   updateDoc,
// //   query,
// //   where
// // } from 'firebase/firestore';
// // import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
// // import { db, storage } from '../config/firebase';

// // const Menu = () => {
// //   const [categories, setCategories] = useState([]);
// //   const [dishes, setDishes] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [selectedCategory, setSelectedCategory] = useState(null);
// //   const [isAddingCategory, setIsAddingCategory] = useState(false);
// //   const [isAddingDish, setIsAddingDish] = useState(false);
// //   const [newCategory, setNewCategory] = useState({ name: '', description: '' });
// //   const [newDish, setNewDish] = useState({
// //     name: '',
// //     description: '',
// //     price: '',
// //     categoryId: '',
// //     image: null
// //   });

// //   // Cargar categorías y platos
// //   useEffect(() => {
// //     fetchCategories();
// //     fetchDishes();
// //   }, []);

// //   const fetchCategories = async () => {
// //     try {
// //       const querySnapshot = await getDocs(collection(db, 'categories'));
// //       const categoriesData = querySnapshot.docs.map(doc => ({
// //         id: doc.id,
// //         ...doc.data()
// //       }));
// //       setCategories(categoriesData);
// //     } catch (error) {
// //       console.error('Error al cargar categorías:', error);
// //     }
// //   };

// //   const fetchDishes = async () => {
// //     try {
// //       const querySnapshot = await getDocs(collection(db, 'dishes'));
// //       const dishesData = querySnapshot.docs.map(doc => ({
// //         id: doc.id,
// //         ...doc.data()
// //       }));
// //       setDishes(dishesData);
// //       setLoading(false);
// //     } catch (error) {
// //       console.error('Error al cargar platos:', error);
// //     }
// //   };

// //   // Manejo de categorías
// //   const handleAddCategory = async () => {
// //     try {
// //       await addDoc(collection(db, 'categories'), newCategory);
// //       setNewCategory({ name: '', description: '' });
// //       setIsAddingCategory(false);
// //       fetchCategories();
// //     } catch (error) {
// //       console.error('Error al agregar categoría:', error);
// //     }
// //   };

// //   const handleDeleteCategory = async (categoryId) => {
// //     if (window.confirm('¿Estás seguro de eliminar esta categoría?')) {
// //       try {
// //         // Primero eliminar todos los platos de esta categoría
// //         const dishesQuery = query(collection(db, 'dishes'), where('categoryId', '==', categoryId));
// //         const dishesSnapshot = await getDocs(dishesQuery);
        
// //         const deleteDishesPromises = dishesSnapshot.docs.map(async (dishDoc) => {
// //           const dishData = dishDoc.data();
// //           if (dishData.imageUrl) {
// //             const imageRef = ref(storage, dishData.imageUrl);
// //             await deleteObject(imageRef);
// //           }
// //           await deleteDoc(doc(db, 'dishes', dishDoc.id));
// //         });
        
// //         await Promise.all(deleteDishesPromises);
// //         await deleteDoc(doc(db, 'categories', categoryId));
        
// //         fetchCategories();
// //         fetchDishes();
// //       } catch (error) {
// //         console.error('Error al eliminar categoría:', error);
// //       }
// //     }
// //   };

// //   // Manejo de platos
// //   const handleAddDish = async (e) => {
// //     e.preventDefault();
// //     try {
// //       let imageUrl = '';
// //       if (newDish.image) {
// //         const imageRef = ref(storage, `dishes/${newDish.image.name}`);
// //         const snapshot = await uploadBytes(imageRef, newDish.image);
// //         imageUrl = await getDownloadURL(snapshot.ref);
// //       }

// //       await addDoc(collection(db, 'dishes'), {
// //         ...newDish,
// //         price: parseFloat(newDish.price),
// //         imageUrl,
// //         image: null
// //       });

// //       setNewDish({
// //         name: '',
// //         description: '',
// //         price: '',
// //         categoryId: '',
// //         image: null
// //       });
// //       setIsAddingDish(false);
// //       fetchDishes();
// //     } catch (error) {
// //       console.error('Error al agregar plato:', error);
// //     }
// //   };

// //   const handleDeleteDish = async (dishId, imageUrl) => {
// //     if (window.confirm('¿Estás seguro de eliminar este plato?')) {
// //       try {
// //         if (imageUrl) {
// //           const imageRef = ref(storage, imageUrl);
// //           await deleteObject(imageRef);
// //         }
// //         await deleteDoc(doc(db, 'dishes', dishId));
// //         fetchDishes();
// //       } catch (error) {
// //         console.error('Error al eliminar plato:', error);
// //       }
// //     }
// //   };

// //   if (loading) {
// //     return <div className="flex justify-center items-center h-64">Cargando...</div>;
// //   }

// //   return (
// //     <div className="container mx-auto p-4">
// //       {/* Header */}
// //       <div className="flex justify-between items-center mb-6">
// //         <h1 className="text-2xl font-bold">Gestión del Menú</h1>
// //         <div className="space-x-2">
// //           <button
// //             onClick={() => setIsAddingCategory(true)}
// //             className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
// //           >
// //             Nueva Categoría
// //           </button>
// //           <button
// //             onClick={() => setIsAddingDish(true)}
// //             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// //           >
// //             Nuevo Plato
// //           </button>
// //         </div>
// //       </div>

// //       {/* Modal Agregar Categoría */}
// //       {isAddingCategory && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
// //           <div className="bg-white rounded-lg p-6 w-full max-w-md">
// //             <h2 className="text-xl font-bold mb-4">Nueva Categoría</h2>
// //             <input
// //               type="text"
// //               placeholder="Nombre de la categoría"
// //               className="w-full p-2 mb-4 border rounded"
// //               value={newCategory.name}
// //               onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
// //             />
// //             <textarea
// //               placeholder="Descripción"
// //               className="w-full p-2 mb-4 border rounded"
// //               value={newCategory.description}
// //               onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
// //             />
// //             <div className="flex justify-end space-x-2">
// //               <button
// //                 onClick={() => setIsAddingCategory(false)}
// //                 className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
// //               >
// //                 Cancelar
// //               </button>
// //               <button
// //                 onClick={handleAddCategory}
// //                 className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
// //               >
// //                 Guardar
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       {/* Modal Agregar Plato */}
// //       {isAddingDish && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
// //           <div className="bg-white rounded-lg p-6 w-full max-w-md">
// //             <h2 className="text-xl font-bold mb-4">Nuevo Plato</h2>
// //             <form onSubmit={handleAddDish}>
// //               <select
// //                 className="w-full p-2 mb-4 border rounded"
// //                 value={newDish.categoryId}
// //                 onChange={(e) => setNewDish({ ...newDish, categoryId: e.target.value })}
// //                 required
// //               >
// //                 <option value="">Seleccionar categoría</option>
// //                 {categories.map(category => (
// //                   <option key={category.id} value={category.id}>
// //                     {category.name}
// //                   </option>
// //                 ))}
// //               </select>
// //               <input
// //                 type="text"
// //                 placeholder="Nombre del plato"
// //                 className="w-full p-2 mb-4 border rounded"
// //                 value={newDish.name}
// //                 onChange={(e) => setNewDish({ ...newDish, name: e.target.value })}
// //                 required
// //               />
// //               <textarea
// //                 placeholder="Descripción"
// //                 className="w-full p-2 mb-4 border rounded"
// //                 value={newDish.description}
// //                 onChange={(e) => setNewDish({ ...newDish, description: e.target.value })}
// //                 required
// //               />
// //               <input
// //                 type="number"
// //                 placeholder="Precio"
// //                 step="0.01"
// //                 className="w-full p-2 mb-4 border rounded"
// //                 value={newDish.price}
// //                 onChange={(e) => setNewDish({ ...newDish, price: e.target.value })}
// //                 required
// //               />
// //               <input
// //                 type="file"
// //                 accept="image/*"
// //                 className="w-full p-2 mb-4 border rounded"
// //                 onChange={(e) => setNewDish({ ...newDish, image: e.target.files[0] })}
// //               />
// //               <div className="flex justify-end space-x-2">
// //                 <button
// //                   type="button"
// //                   onClick={() => setIsAddingDish(false)}
// //                   className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
// //                 >
// //                   Cancelar
// //                 </button>
// //                 <button
// //                   type="submit"
// //                   className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// //                 >
// //                   Guardar
// //                 </button>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //       )}

// //       {/* Lista de Categorías */}
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //         {categories.map(category => (
// //           <div key={category.id} className="bg-white rounded-lg shadow p-6">
// //             <div className="flex justify-between items-center mb-4">
// //               <h3 className="text-xl font-bold">{category.name}</h3>
// //               <button
// //                 onClick={() => handleDeleteCategory(category.id)}
// //                 className="text-red-500 hover:text-red-700"
// //               >
// //                 Eliminar
// //               </button>
// //             </div>
// //             <p className="text-gray-600 mb-4">{category.description}</p>
            
// //             {/* Platos de la categoría */}
// //             <div className="space-y-4">
// //               {dishes
// //                 .filter(dish => dish.categoryId === category.id)
// //                 .map(dish => (
// //                   <div key={dish.id} className="border rounded p-4">
// //                     {dish.imageUrl && (
// //                       <img
// //                         src={dish.imageUrl}
// //                         alt={dish.name}
// //                         className="w-full h-48 object-cover rounded mb-4"
// //                       />
// //                     )}
// //                     <div className="flex justify-between items-start">
// //                       <div>
// //                         <h4 className="font-bold">{dish.name}</h4>
// //                         <p className="text-sm text-gray-600">{dish.description}</p>
// //                         <p className="text-lg font-bold text-green-600">
// //                           ${dish.price.toFixed(2)}
// //                         </p>
// //                       </div>
// //                       <button
// //                         onClick={() => handleDeleteDish(dish.id, dish.imageUrl)}
// //                         className="text-red-500 hover:text-red-700"
// //                       >
// //                         Eliminar
// //                       </button>
// //                     </div>
// //                   </div>
// //                 ))}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Menu;


// // src/pages/Menu.js
// import React, { useState, useEffect } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../config/firebase';
// import { seedTestData } from '../utils/seedTestData';

// const Menu = () => {
//   const [categories, setCategories] = useState([]);
//   const [dishes, setDishes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       // Obtener categorías
//       const categoriesSnapshot = await getDocs(collection(db, 'categories'));
//       const categoriesData = categoriesSnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));

//       // Obtener platos
//       const dishesSnapshot = await getDocs(collection(db, 'dishes'));
//       const dishesData = dishesSnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));

//       setCategories(categoriesData);
//       setDishes(dishesData);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleSeedData = async () => {
//     if (window.confirm('¿Estás seguro de querer agregar datos de prueba? Esto podría duplicar datos existentes.')) {
//       setLoading(true);
//       await seedTestData();
//       await fetchData();
//     }
//   };

//   if (loading) {
//     return <div className="flex justify-center items-center h-64">Cargando...</div>;
//   }

//   if (error) {
//     return (
//       <div className="p-4 bg-red-100 text-red-700 rounded">
//         Error: {error}
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">Gestión del Menú</h1>
//         <button
//           onClick={handleSeedData}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Agregar Datos de Prueba
//         </button>
//       </div>

//       {/* Visualización de datos */}
//       {categories.map(category => (
//         <div key={category.id} className="mb-8">
//           <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {dishes
//               .filter(dish => dish.categoryId === category.id)
//               .map(dish => (
//                 <div key={dish.id} className="bg-white p-4 rounded-lg shadow">
//                   <h3 className="font-bold">{dish.name}</h3>
//                   <p className="text-gray-600 text-sm">{dish.description}</p>
//                   <p className="text-green-600 font-bold mt-2">${dish.price}</p>
//                 </div>
//               ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Menu;



// src/pages/Menu.js
import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from '../config/firebase';
import CategoryModal from '../components/menu/CategoryModal';
import DishModal from '../components/menu/DishModal';

const Menu = () => {
  // Estados
  const [categories, setCategories] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Estados para modales
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isDishModalOpen, setIsDishModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState({ name: '', description: '' });
  const [currentDish, setCurrentDish] = useState({
    name: '',
    description: '',
    price: '',
    categoryId: '',
    imageFile: null,
    imageUrl: '',
    imagePreview: null
  });
  const [isEditing, setIsEditing] = useState(false);

  // Cargar datos
  const fetchData = async () => {
    try {
      const categoriesSnapshot = await getDocs(collection(db, 'categories'));
      const dishesSnapshot = await getDocs(collection(db, 'dishes'));

      setCategories(categoriesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })));

      setDishes(dishesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })));

      setLoading(false);
    } catch (err) {
      setError('Error al cargar los datos: ' + err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Funciones para categorías
  const handleSaveCategory = async () => {
    try {
      if (!currentCategory.name.trim()) {
        alert('El nombre de la categoría es requerido');
        return;
      }

      if (isEditing && currentCategory.id) {
        await updateDoc(doc(db, 'categories', currentCategory.id), {
          name: currentCategory.name,
          description: currentCategory.description
        });
      } else {
        await addDoc(collection(db, 'categories'), {
          name: currentCategory.name,
          description: currentCategory.description,
          order: categories.length + 1
        });
      }

      setIsCategoryModalOpen(false);
      setCurrentCategory({ name: '', description: '' });
      fetchData();
    } catch (err) {
      setError('Error al guardar la categoría: ' + err.message);
    }
  };

  const handleDeleteCategory = async (categoryId) => {
    if (!window.confirm('¿Estás seguro de eliminar esta categoría? Se eliminarán todos los platos asociados.')) {
      return;
    }

    try {
      // Eliminar platos de la categoría
      const categoryDishes = dishes.filter(dish => dish.categoryId === categoryId);
      for (const dish of categoryDishes) {
        if (dish.imageUrl) {
          const imageRef = ref(storage, dish.imageUrl);
          await deleteObject(imageRef);
        }
        await deleteDoc(doc(db, 'dishes', dish.id));
      }

      // Eliminar categoría
      await deleteDoc(doc(db, 'categories', categoryId));
      fetchData();
    } catch (err) {
      setError('Error al eliminar la categoría: ' + err.message);
    }
  };

  // Funciones para platos
  const handleSaveDish = async () => {
    try {
      if (!currentDish.name.trim() || !currentDish.categoryId || !currentDish.price) {
        alert('Nombre, categoría y precio son requeridos');
        return;
      }

      let imageUrl = currentDish.imageUrl;

      if (currentDish.imageFile) {
        const imageRef = ref(storage, `dishes/${Date.now()}_${currentDish.imageFile.name}`);
        const uploadResult = await uploadBytes(imageRef, currentDish.imageFile);
        imageUrl = await getDownloadURL(uploadResult.ref);
      }

      const dishData = {
        name: currentDish.name,
        description: currentDish.description,
        price: parseFloat(currentDish.price),
        categoryId: currentDish.categoryId,
        imageUrl,
        order: dishes.filter(d => d.categoryId === currentDish.categoryId).length + 1
      };

      if (isEditing && currentDish.id) {
        await updateDoc(doc(db, 'dishes', currentDish.id), dishData);
      } else {
        await addDoc(collection(db, 'dishes'), dishData);
      }

      setIsDishModalOpen(false);
      setCurrentDish({
        name: '',
        description: '',
        price: '',
        categoryId: '',
        imageFile: null,
        imageUrl: '',
        imagePreview: null
      });
      fetchData();
    } catch (err) {
      setError('Error al guardar el plato: ' + err.message);
    }
  };

  const handleDeleteDish = async (dish) => {
    if (!window.confirm('¿Estás seguro de eliminar este plato?')) {
      return;
    }

    try {
      if (dish.imageUrl) {
        const imageRef = ref(storage, dish.imageUrl);
        await deleteObject(imageRef);
      }
      await deleteDoc(doc(db, 'dishes', dish.id));
      fetchData();
    } catch (err) {
      setError('Error al eliminar el plato: ' + err.message);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gestión del Menú</h1>
        <div className="space-x-2">
          <button
            onClick={() => {
              setIsEditing(false);
              setCurrentCategory({ name: '', description: '' });
              setIsCategoryModalOpen(true);
            }}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Nueva Categoría
          </button>
          <button
            onClick={() => {
              setIsEditing(false);
              setCurrentDish({
                name: '',
                description: '',
                price: '',
                categoryId: '',
                imageFile: null,
                imageUrl: '',
                imagePreview: null
              });
              setIsDishModalOpen(true);
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Nuevo Plato
          </button>
        </div>
      </div>

      {/* Lista de categorías y platos */}
      <div className="space-y-8">
        {categories.map(category => (
          <div key={category.id} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-xl font-bold">{category.name}</h2>
                <p className="text-gray-600">{category.description}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => {
                    setIsEditing(true);
                    setCurrentCategory(category);
                    setIsCategoryModalOpen(true);
                  }}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDeleteCategory(category.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Eliminar
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           
















{dishes
    .filter(dish => dish.categoryId === category.id)
    .map(dish => (
      <div key={dish.id} className="border rounded-lg p-4 bg-gray-50">
        {dish.imageUrl && (
          <div className="relative h-48 mb-4 group">
            <img
              src={dish.imageUrl}
              alt={dish.name}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-200 rounded-lg" />
          </div>
        )}
        <div className="space-y-2">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-lg">{dish.name}</h3>
            <span className="text-green-600 font-bold">
              ${parseFloat(dish.price).toFixed(2)}
            </span>
          </div>
          <p className="text-gray-600 text-sm">{dish.description}</p>
          <div className="flex justify-end space-x-2 pt-2">
            <button
              onClick={() => {
                setIsEditing(true);
                setCurrentDish({
                  ...dish,
                  imageFile: null,
                  imagePreview: null
                });
                setIsDishModalOpen(true);
              }}
              className="text-blue-500 hover:text-blue-700 text-sm"
            >
              Editar
            </button>
            <button
              onClick={() => handleDeleteDish(dish)}
              className="text-red-500 hover:text-red-700 text-sm"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    ))}
</div>
</div>
))}
</div>

{/* Modales */}
<CategoryModal
isOpen={isCategoryModalOpen}
onClose={() => setIsCategoryModalOpen(false)}
category={currentCategory}
setCategory={setCurrentCategory}
onSave={handleSaveCategory}
isEditing={isEditing}
/>

<DishModal
isOpen={isDishModalOpen}
onClose={() => setIsDishModalOpen(false)}
dish={currentDish}
setDish={setCurrentDish}
onSave={handleSaveDish}
categories={categories}
isEditing={isEditing}
/>
</div>
);
};

export default Menu;