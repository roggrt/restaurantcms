// src/components/schedule/PhoneManager.js
import React, { useState } from 'react';

const PhoneManager = ({ phones, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingPhone, setEditingPhone] = useState({
    number: '',
    type: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(editingPhone);
    setIsEditing(false);
    setEditingPhone({ number: '', type: '', description: '' });
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Teléfonos</h3>
        <button
          onClick={() => setIsEditing(true)}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Agregar Teléfono
        </button>
      </div>

      {isEditing && (
        <form onSubmit={handleSubmit} className="mb-4 space-y-3">
          <input
            type="text"
            value={editingPhone.number}
            onChange={(e) => setEditingPhone({ ...editingPhone, number: e.target.value })}
            placeholder="Número"
            className="w-full p-2 border rounded"
          />
          <select
            value={editingPhone.type}
            onChange={(e) => setEditingPhone({ ...editingPhone, type: e.target.value })}
            className="w-full p-2 border rounded"
          >
            <option value="">Seleccionar tipo</option>
            <option value="main">Principal</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="delivery">Delivery</option>
          </select>
          <input
            type="text"
            value={editingPhone.description}
            onChange={(e) => setEditingPhone({ ...editingPhone, description: e.target.value })}
            placeholder="Descripción"
            className="w-full p-2 border rounded"
          />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Guardar
            </button>
          </div>
        </form>
      )}

      <div className="space-y-2">
        {phones.map((phone) => (
          <div 
            key={phone.id} 
            className="flex justify-between items-center p-3 bg-gray-50 rounded"
          >
            <div>
              <span className="font-medium">{phone.number}</span>
              {phone.type && (
                <span className="ml-2 px-2 py-1 bg-gray-200 rounded text-sm">
                  {phone.type}
                </span>
              )}
              {phone.description && (
                <span className="ml-2 text-gray-600 text-sm">
                  ({phone.description})
                </span>
              )}
            </div>
            <button
              onClick={() => onDelete(phone.id)}
              className="text-red-600 hover:text-red-800"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhoneManager;