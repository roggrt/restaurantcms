


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
        alert('Category name is required');
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
    if (!window.confirm('Are you sure you want to delete this category? All associated dishes will be deleted.')) {
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
      setError('Erreur lors de la suppression de la catégorie: ' + err.message);
    }
  };

  // Funciones para platos
  const handleSaveDish = async () => {
    try {
      if (!currentDish.name.trim() || !currentDish.categoryId || !currentDish.price) {
        alert('Name, Kategorie und Preis sind erforderlich');
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
      setError('Error on saving the product: ' + err.message);
    }
  };

  const handleDeleteDish = async (dish) => {
    if (!window.confirm('Are you sure you want to delete this dish?')) {
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
        <h1 className="text-2xl font-bold">Menu Management</h1>
        <div className="space-x-2">
          <button
            onClick={() => {
              setIsEditing(false);
              setCurrentCategory({ name: '', description: '' });
              setIsCategoryModalOpen(true);
            }}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            New Category
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
            New Product
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
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteCategory(category.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
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
              Edit
            </button>
            <button
              onClick={() => handleDeleteDish(dish)}
              className="text-red-500 hover:text-red-700 text-sm"
            >
              Delete
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