// src/utils/seedTestData.js
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

export const seedTestData = async () => {
  try {
    // Crear categorías de prueba
    const categoriesData = [
      {
        name: "Entradas",
        description: "Platos para comenzar",
        order: 1,
        active: true
      },
      {
        name: "Platos Principales",
        description: "Especialidades de la casa",
        order: 2,
        active: true
      },
      {
        name: "Postres",
        description: "Dulces finales",
        order: 3,
        active: true
      }
    ];

    // Agregar categorías y guardar sus IDs
    const categoryIds = {};
    for (const category of categoriesData) {
      const docRef = await addDoc(collection(db, 'categories'), category);
      categoryIds[category.name] = docRef.id;
    }

    // Crear platos de prueba
    const dishesData = [
      {
        categoryId: categoryIds["Entradas"],
        name: "Ensalada César",
        description: "Lechuga romana, crutones, parmesano y aderezo César",
        price: 12.99,
        imageUrl: "",
        active: true,
        order: 1
      },
      {
        categoryId: categoryIds["Entradas"],
        name: "Carpaccio de Res",
        description: "Finas láminas de res con alcaparras y parmesano",
        price: 15.99,
        imageUrl: "",
        active: true,
        order: 2
      },
      {
        categoryId: categoryIds["Platos Principales"],
        name: "Lomo Saltado",
        description: "Tradicional plato peruano con res, cebolla y papas fritas",
        price: 24.99,
        imageUrl: "",
        active: true,
        order: 1
      },
      {
        categoryId: categoryIds["Platos Principales"],
        name: "Risotto de Hongos",
        description: "Cremoso risotto con variedad de hongos y trufa",
        price: 22.99,
        imageUrl: "",
        active: true,
        order: 2
      },
      {
        categoryId: categoryIds["Postres"],
        name: "Tiramisú",
        description: "Clásico postre italiano con café y mascarpone",
        price: 8.99,
        imageUrl: "",
        active: true,
        order: 1
      },
      {
        categoryId: categoryIds["Postres"],
        name: "Cheesecake",
        description: "Tarta de queso con frutos rojos",
        price: 7.99,
        imageUrl: "",
        active: true,
        order: 2
      }
    ];

    // Agregar platos
    for (const dish of dishesData) {
      await addDoc(collection(db, 'dishes'), dish);
    }

    console.log('Datos de prueba agregados exitosamente');
    return true;
  } catch (error) {
    console.error('Error al agregar datos de prueba:', error);
    return false;
  }
};