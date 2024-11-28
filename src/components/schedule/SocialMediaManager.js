// src/components/schedule/SocialMediaManager.js
import React, { useState } from 'react';

const SocialMediaManager = ({ socialMedia, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingSocialMedia, setEditingSocialMedia] = useState(
    socialMedia[0] || {
      facebook: '',
      instagram: '',
      twitter: ''
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(editingSocialMedia);
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Social Media</h3>
        <button
          onClick={() => setIsEditing(true)}
          className="text-blue-600 hover:text-blue-800"
        >
          Editar
        </button>
      </div>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Facebook</label>
            <input
              type="url"
              value={editingSocialMedia.facebook}
              onChange={(e) => setEditingSocialMedia({ 
                ...editingSocialMedia, 
                facebook: e.target.value 
              })}
              placeholder="URL de Facebook"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Instagram</label>
            <input
              type="url"
              value={editingSocialMedia.instagram}
              onChange={(e) => setEditingSocialMedia({ 
                ...editingSocialMedia, 
                instagram: e.target.value 
              })}
              placeholder="URL de Instagram"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">X</label>
            <input
              type="url"
              value={editingSocialMedia.twitter}
              onChange={(e) => setEditingSocialMedia({ 
                ...editingSocialMedia, 
                twitter: e.target.value 
              })}
              placeholder="URL de Twitter"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      ) : (
        <div className="space-y-2">
          {socialMedia[0] && (
            <div className="space-y-2">
              {socialMedia[0].facebook && (
                <p className="flex items-center">
                  <span className="font-medium mr-2">Facebook:</span>
                  <a href={socialMedia[0].facebook} target="_blank" rel="noopener noreferrer" 
                     className="text-blue-600 hover:text-blue-800">
                    {socialMedia[0].facebook}
                  </a>
                </p>
              )}
              {socialMedia[0].instagram && (
                <p className="flex items-center">
                  <span className="font-medium mr-2">Instagram:</span>
                  <a href={socialMedia[0].instagram} target="_blank" rel="noopener noreferrer"
                     className="text-pink-600 hover:text-pink-800">
                    {socialMedia[0].instagram}
                  </a>
                </p>
              )}
              {socialMedia[0].twitter && (
                <p className="flex items-center">
                  <span className="font-medium mr-2">X:</span>
                  <a href={socialMedia[0].twitter} target="_blank" rel="noopener noreferrer"
                     className="text-blue-400 hover:text-blue-600">
                    {socialMedia[0].twitter}
                  </a>
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SocialMediaManager;