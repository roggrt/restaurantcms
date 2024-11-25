// src/components/schedule/DeliveryServicesManager.js
import React, { useState } from 'react';

const DeliveryServicesManager = ({ services, onUpdate, onDelete }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newService, setNewService] = useState({
    name: '',
    url: '',
    isActive: true
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(newService);
    setIsAdding(false);
    setNewService({ name: '', url: '', isActive: true });
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Servicios de Delivery</h3>
        <button
          onClick={() => setIsAdding(true)}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Agregar Servicio
        </button>
      </div>

      {isAdding && (
        <form onSubmit={handleSubmit} className="mb-4 space-y-3">
          <input
            type="text"
            value={newService.name}
            onChange={(e) => setNewService({ ...newService, name: e.target.value })}
            placeholder="Nombre del servicio"
            className="w-full p-2 border rounded"
          />
          <input
            type="url"
            value={newService.url}
            onChange={(e) => setNewService({ ...newService, url: e.target.value })}
            placeholder="URL del servicio"
            className="w-full p-2 border rounded"
          />
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={newService.isActive}
              onChange={(e) => setNewService({ ...newService, isActive: e.target.checked })}
              className="mr-2"
            />
            <label>Activo</label>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={() => setIsAdding(false)}
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
        {services.map((service) => (
          <div 
            key={service.id}
            className="flex justify-between items-center p-3 bg-gray-50 rounded"
          >
            <div className="flex items-center space-x-4">
              <span className="font-medium">{service.name}</span>
              {service.url && (
                <a
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  Ver enlace
                </a>
              )}
              <span className={`px-2 py-1 rounded-full text-sm ${
                service.isActive 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {service.isActive ? 'Activo' : 'Inactivo'}
              </span>
            </div>
            <button
              onClick={() => onDelete(service.id)}
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

export default DeliveryServicesManager;