

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
        <h3 className="text-lg font-medium text-gray-900 mb-4">Phones</h3>
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
              Delete
            </button>
          </div>
        ))}
        <button
          onClick={addPhone}
          className="text-blue-600 hover:text-blue-800"
        >
          + Add phone
        </button>
      </div>

      {/* Ubicación */}
      <div className="border-b pb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Location</h3>
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
        <h3 className="text-lg font-medium text-gray-900 mb-4">Social media</h3>
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
            <label className="block text-sm font-medium text-gray-700 mb-1">Z</label>
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
        <h3 className="text-lg font-medium text-gray-900 mb-4">Delivery Services</h3>
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
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <button
              onClick={() => removeDeliveryService(index)}
              className="text-red-600 hover:text-red-800 px-2"
            >
              Delete
            </button>
          </div>
        ))}
        <button
          onClick={addDeliveryService}
          className="text-blue-600 hover:text-blue-800"
        >
          + Add delivery service
        </button>
      </div>
    </div>
  );

  const renderViewMode = () => (
    <div className="space-y-6">
      {/* Teléfonos */}
      <div className="border-b pb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Phones</h3>
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
        <h3 className="text-lg font-medium text-gray-900 mb-4">Location</h3>
        <div className="space-y-2">
          <p>{contactInfo.location.address}</p>
          <p>{contactInfo.location.city}, {contactInfo.location.state}</p>
          {contactInfo.location.postalCode && (
            <p>CP: {contactInfo.location.postalCode}</p>
          )}
          {contactInfo.location.coordinates && (
            <p className="text-sm text-gray-500">
              Coordinates: {contactInfo.location.coordinates.latitude}, 
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
              <span>X</span>
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
          Contact Info
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