// import React, { useState } from 'react';

// const WeeklySchedule = ({ schedule, onUpdate }) => {
//   const [editingDay, setEditingDay] = useState(null);

//   const days = [
//     { name: 'Lunes', order: 1 },
//     { name: 'Martes', order: 2 },
//     { name: 'Miércoles', order: 3 },
//     { name: 'Jueves', order: 4 },
//     { name: 'Viernes', order: 5 },
//     { name: 'Sábado', order: 6 },
//     { name: 'Domingo', order: 7 }
//   ];

//   const handleSaveDay = (dayData) => {
//     onUpdate(dayData);
//     setEditingDay(null);
//   };

//   return (
//     <div className="bg-white rounded-lg shadow">
//       <div className="p-4">
//         <h2 className="text-lg font-semibold mb-4">Horario Semanal</h2>
//         <div className="space-y-2">
//           {days.map((day) => {
//             const daySchedule = schedule.find(s => s.dayOrder === day.order);
//             const isEditing = editingDay === day.order;

//             return (
//               <div key={day.order} className="flex items-center justify-between p-3 bg-gray-50 rounded">
//                 <div className="flex items-center space-x-4">
//                   <span className="font-medium w-24">{day.name}</span>
//                   {!isEditing ? (
//                     <span className={daySchedule?.isOpen ? 'text-green-600' : 'text-red-600'}>
//                       {daySchedule?.isOpen 
//                         ? `${daySchedule.openTime} - ${daySchedule.closeTime}`
//                         : 'Cerrado'}
//                     </span>
//                   ) : (
//                     <div className="flex space-x-2">
//                       <input
//                         type="checkbox"
//                         checked={daySchedule?.isOpen}
//                         onChange={(e) => handleSaveDay({
//                           ...daySchedule,
//                           isOpen: e.target.checked
//                         })}
//                       />
//                       <input
//                         type="time"
//                         value={daySchedule?.openTime || ''}
//                         onChange={(e) => handleSaveDay({
//                           ...daySchedule,
//                           openTime: e.target.value
//                         })}
//                         disabled={!daySchedule?.isOpen}
//                       />
//                       <input
//                         type="time"
//                         value={daySchedule?.closeTime || ''}
//                         onChange={(e) => handleSaveDay({
//                           ...daySchedule,
//                           closeTime: e.target.value
//                         })}
//                         disabled={!daySchedule?.isOpen}
//                       />
//                     </div>
//                   )}
//                 </div>
//                 <button
//                   onClick={() => setEditingDay(isEditing ? null : day.order)}
//                   className="text-blue-600 hover:text-blue-800"
//                 >
//                   {isEditing ? 'Guardar' : 'Editar'}
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };


// src/components/schedule/WeeklySchedule.js
import React, { useState } from 'react';

const WeeklySchedule = ({ schedule, onUpdate }) => {
  const [editingDay, setEditingDay] = useState(null);

  const days = [
    { name: 'Lunes', order: 1 },
    { name: 'Martes', order: 2 },
    { name: 'Miércoles', order: 3 },
    { name: 'Jueves', order: 4 },
    { name: 'Viernes', order: 5 },
    { name: 'Sábado', order: 6 },
    { name: 'Domingo', order: 7 }
  ];

  const handleSaveDay = (dayData) => {
    onUpdate(dayData);
    setEditingDay(null);
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Horario Semanal</h2>
        <div className="space-y-2">
          {days.map((day) => {
            const daySchedule = schedule.find(s => s.dayOrder === day.order);
            const isEditing = editingDay === day.order;

            return (
              <div key={day.order} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <div className="flex items-center space-x-4">
                  <span className="font-medium w-24">{day.name}</span>
                  {!isEditing ? (
                    <span className={daySchedule?.isOpen ? 'text-green-600' : 'text-red-600'}>
                      {daySchedule?.isOpen 
                        ? `${daySchedule.openTime} - ${daySchedule.closeTime}`
                        : 'Cerrado'}
                    </span>
                  ) : (
                    <div className="flex space-x-2">
                      <input
                        type="checkbox"
                        checked={daySchedule?.isOpen}
                        onChange={(e) => handleSaveDay({
                          ...daySchedule,
                          isOpen: e.target.checked
                        })}
                      />
                      <input
                        type="time"
                        value={daySchedule?.openTime || ''}
                        onChange={(e) => handleSaveDay({
                          ...daySchedule,
                          openTime: e.target.value
                        })}
                        disabled={!daySchedule?.isOpen}
                      />
                      <input
                        type="time"
                        value={daySchedule?.closeTime || ''}
                        onChange={(e) => handleSaveDay({
                          ...daySchedule,
                          closeTime: e.target.value
                        })}
                        disabled={!daySchedule?.isOpen}
                      />
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setEditingDay(isEditing ? null : day.order)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {isEditing ? 'Guardar' : 'Editar'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WeeklySchedule;