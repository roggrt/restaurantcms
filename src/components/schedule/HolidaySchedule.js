
// src/components/schedule/HolidaySchedule.js
import React, { useState } from 'react';

const HolidaySchedule = ({ holidays, onAdd, onDelete }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newHoliday, setNewHoliday] = useState({
    date: '',
    description: '',
    isOpen: false,
    openTime: '',
    closeTime: '',
    type: 'holiday'
  });

  const handleAdd = () => {
    if (!newHoliday.date || !newHoliday.description) {
      alert('Por favor complete todos los campos requeridos');
      return;
    }

    onAdd(newHoliday);
    setIsAdding(false);
    setNewHoliday({
      date: '',
      description: '',
      isOpen: false,
      openTime: '',
      closeTime: '',
      type: 'holiday'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow mt-6">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Holidays and Special Days Schedule</h2>
          <button
            onClick={() => setIsAdding(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        {isAdding && (
          <div className="mb-4 p-4 bg-gray-50 rounded">
            <input
              type="date"
              value={newHoliday.date}
              onChange={(e) => setNewHoliday({...newHoliday, date: e.target.value})}
              className="mb-2 p-2 border rounded w-full"
            />
            <input
              type="text"
              placeholder="Descripción"
              value={newHoliday.description}
              onChange={(e) => setNewHoliday({...newHoliday, description: e.target.value})}
              className="mb-2 p-2 border rounded w-full"
            />
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={newHoliday.isOpen}
                onChange={(e) => setNewHoliday({...newHoliday, isOpen: e.target.checked})}
                className="mr-2"
              />
              <span>Open this day?</span>
            </div>
            {newHoliday.isOpen && (
              <div className="flex space-x-2 mb-2">
                <input
                  type="time"
                  value={newHoliday.openTime}
                  onChange={(e) => setNewHoliday({...newHoliday, openTime: e.target.value})}
                  className="p-2 border rounded"
                  placeholder="Hora de apertura"
                />
                <input
                  type="time"
                  value={newHoliday.closeTime}
                  onChange={(e) => setNewHoliday({...newHoliday, closeTime: e.target.value})}
                  className="p-2 border rounded"
                  placeholder="Hora de cierre"
                />
              </div>
            )}
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsAdding(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleAdd}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        )}

        <div className="space-y-2">
          {holidays.map((holiday) => (
            <div key={holiday.id} className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <div>
                <div className="font-medium">{holiday.description}</div>
                <div className="text-sm text-gray-600">
                  {new Date(holiday.date).toLocaleDateString()}
                  {holiday.isOpen && ` - ${holiday.openTime} a ${holiday.closeTime}`}
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => onDelete(holiday.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HolidaySchedule;