// src/components/menu/CategoryModal.js
import React from 'react';

const CategoryModal = ({ 
  isOpen, 
  onClose, 
  category, 
  setCategory, 
  onSave, 
  isEditing 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">
          {isEditing ? 'Editar Categoría' : 'Nueva Categoría'}
        </h2>
        <input
          type="text"
          placeholder="Nombre de la categoría"
          className="w-full p-2 mb-4 border rounded"
          value={category.name}
          onChange={(e) => setCategory({ ...category, name: e.target.value })}
        />
        <textarea
          placeholder="Descripción"
          className="w-full p-2 mb-4 border rounded h-24"
          value={category.description}
          onChange={(e) => setCategory({ ...category, description: e.target.value })}
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;