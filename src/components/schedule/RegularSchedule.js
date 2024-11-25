// // import React, { useState } from 'react';

// // const RegularSchedule = ({ schedule, onUpdate }) => {
// //   const [scheduleData, setScheduleData] = useState(schedule || {
// //     monday: { isOpen: true, open: '09:00', close: '18:00' },
// //     tuesday: { isOpen: true, open: '09:00', close: '18:00' },
// //     wednesday: { isOpen: true, open: '09:00', close: '18:00' },
// //     thursday: { isOpen: true, open: '09:00', close: '18:00' },
// //     friday: { isOpen: true, open: '09:00', close: '18:00' },
// //     saturday: { isOpen: true, open: '10:00', close: '16:00' },
// //     sunday: { isOpen: false, open: '', close: '' }
// //   });

// //   const handleChange = (day, field, value) => {
// //     setScheduleData(prev => ({
// //       ...prev,
// //       [day]: {
// //         ...prev[day],
// //         [field]: value
// //       }
// //     }));
// //   };

// //   const handleSubmit = () => {
// //     onUpdate(scheduleData);
// //   };

// //   const days = [
// //     { key: 'monday', label: 'Lunes' },
// //     { key: 'tuesday', label: 'Martes' },
// //     { key: 'wednesday', label: 'Miércoles' },
// //     { key: 'thursday', label: 'Jueves' },
// //     { key: 'friday', label: 'Viernes' },
// //     { key: 'saturday', label: 'Sábado' },
// //     { key: 'sunday', label: 'Domingo' }
// //   ];

// //   return (
// //     <div className="bg-white rounded-lg shadow">
// //       <div className="p-4">
// //         <h2 className="text-lg font-semibold mb-4">Horario Regular</h2>
// //         <div className="space-y-4">
// //           {days.map(({ key, label }) => (
// //             <div key={key} className="flex items-center space-x-4">
// //               <div className="w-32">{label}</div>
// //               <input
// //                 type="checkbox"
// //                 checked={scheduleData[key].isOpen}
// //                 onChange={(e) => handleChange(key, 'isOpen', e.target.checked)}
// //                 className="mr-2"
// //               />
// //               <span className="w-20">Abierto</span>
// //               {scheduleData[key].isOpen && (
// //                 <>
// //                   <input
// //                     type="time"
// //                     value={scheduleData[key].open}
// //                     onChange={(e) => handleChange(key, 'open', e.target.value)}
// //                     className="p-2 border rounded"
// //                   />
// //                   <span>a</span>
// //                   <input
// //                     type="time"
// //                     value={scheduleData[key].close}
// //                     onChange={(e) => handleChange(key, 'close', e.target.value)}
// //                     className="p-2 border rounded"
// //                   />
// //                 </>
// //               )}
// //             </div>
// //           ))}
// //         </div>
// //         <div className="mt-4">
// //           <button
// //             onClick={handleSubmit}
// //             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// //           >
// //             Guardar Horario
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default RegularSchedule;


// import React, { useState, useEffect } from 'react';

// const RegularSchedule = ({ schedules = [], onUpdate }) => {
//   const days = [
//     { key: 'monday', label: 'Lunes', order: '1' },
//     { key: 'tuesday', label: 'Martes', order: '2' },
//     { key: 'wednesday', label: 'Miércoles', order: '3' },
//     { key: 'thursday', label: 'Jueves', order: '4' },
//     { key: 'friday', label: 'Viernes', order: '5' },
//     { key: 'saturday', label: 'Sábado', order: '6' },
//     { key: 'sunday', label: 'Domingo', order: '7' }
//   ];

//   const defaultSchedule = {
//     day: '',
//     dayOrder: '',
//     isActive: true,
//     isOpen: true,
//     openTime: '',
//     closeTime: '',
//     breakStart: '',
//     breakEnd: ''
//   };

//   const [scheduleData, setScheduleData] = useState(new Map());

//   useEffect(() => {
//     const scheduleMap = new Map();
    
//     // Primero, inicializa con valores por defecto
//     days.forEach(day => {
//       scheduleMap.set(day.key, {
//         ...defaultSchedule,
//         id: '',
//         day: day.key,
//         dayOrder: day.order
//       });
//     });

//     // Luego, sobrescribe con datos existentes
//     schedules.forEach(schedule => {
//       const day = schedule.day.toLowerCase();
//       if (scheduleMap.has(day)) {
//         scheduleMap.set(day, {
//           ...schedule,
//           openTime: schedule.openTime || '',
//           closeTime: schedule.closeTime || '',
//           breakStart: schedule.breakStart || '',
//           breakEnd: schedule.breakEnd || ''
//         });
//       }
//     });

//     setScheduleData(scheduleMap);
//   }, [schedules]);

//   const handleChange = (day, field, value) => {
//     setScheduleData(prev => {
//       const newMap = new Map(prev);
//       newMap.set(day, {
//         ...newMap.get(day),
//         [field]: value
//       });
//       return newMap;
//     });
//   };

//   const handleSubmit = async (dayKey) => {
//     const daySchedule = scheduleData.get(dayKey);
//     const dayInfo = days.find(d => d.key === dayKey);

//     const scheduleToSave = {
//       ...daySchedule,
//       day: dayKey,
//       dayOrder: dayInfo.order,
//       isActive: true
//     };

//     await onUpdate(scheduleToSave);
//   };

//   return (
//     <div className="bg-white rounded-lg shadow">
//       <div className="p-4">
//         <h2 className="text-lg font-semibold mb-4">Horario Regular</h2>
//         <div className="space-y-4">
//           {days.map(({ key, label }) => {
//             const daySchedule = scheduleData.get(key) || defaultSchedule;
//             return (
//               <div key={key} className="flex flex-wrap items-center gap-4 p-4 border rounded">
//                 <div className="w-32 font-medium">{label}</div>
//                 <div className="flex items-center gap-2">
//                   <input
//                     type="checkbox"
//                     checked={daySchedule.isOpen}
//                     onChange={(e) => handleChange(key, 'isOpen', e.target.checked)}
//                     className="mr-2"
//                   />
//                   <span className="w-20">Abierto</span>
//                 </div>

//                 {daySchedule.isOpen && (
//                   <div className="flex flex-wrap items-center gap-4">
//                     <div className="flex items-center gap-2">
//                       <span>Apertura:</span>
//                       <input
//                         type="time"
//                         value={daySchedule.openTime}
//                         onChange={(e) => handleChange(key, 'openTime', e.target.value)}
//                         className="p-2 border rounded"
//                       />
//                     </div>

//                     <div className="flex items-center gap-2">
//                       <span>Cierre:</span>
//                       <input
//                         type="time"
//                         value={daySchedule.closeTime}
//                         onChange={(e) => handleChange(key, 'closeTime', e.target.value)}
//                         className="p-2 border rounded"
//                       />
//                     </div>

//                     <div className="flex items-center gap-2">
//                       <span>Descanso:</span>
//                       <input
//                         type="time"
//                         value={daySchedule.breakStart}
//                         onChange={(e) => handleChange(key, 'breakStart', e.target.value)}
//                         className="p-2 border rounded"
//                       />
//                       <span>a</span>
//                       <input
//                         type="time"
//                         value={daySchedule.breakEnd}
//                         onChange={(e) => handleChange(key, 'breakEnd', e.target.value)}
//                         className="p-2 border rounded"
//                       />
//                     </div>

//                     <button
//                       onClick={() => handleSubmit(key)}
//                       className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-auto"
//                     >
//                       {daySchedule.id ? 'Actualizar' : 'Guardar'}
//                     </button>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegularSchedule;


import React, { useState } from 'react';

const RegularSchedule = ({ schedules = [], onUpdate, onDelete }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newSchedule, setNewSchedule] = useState({
    day: '',
    dayOrder: '',
    isActive: true,
    isOpen: true,
    openTime: '',
    closeTime: '',
    breakStart: '',
    breakEnd: ''
  });

  const days = [
    { value: 'Lunes', order: '1' },
    { value: 'Martes', order: '2' },
    { value: 'Miércoles', order: '3' },
    { value: 'Jueves', order: '4' },
    { value: 'Viernes', order: '5' },
    { value: 'Sábado', order: '6' },
    { value: 'Domingo', order: '7' }
  ];

  const handleAdd = () => {
    if (!newSchedule.day) {
      alert('Por favor seleccione un día');
      return;
    }

    onUpdate(newSchedule);
    setIsAdding(false);
    setNewSchedule({
      day: '',
      dayOrder: '',
      isActive: true,
      isOpen: true,
      openTime: '',
      closeTime: '',
      breakStart: '',
      breakEnd: ''
    });
  };

  const handleDayChange = (selectedDay) => {
    const dayInfo = days.find(d => d.value === selectedDay);
    setNewSchedule({
      ...newSchedule,
      day: selectedDay,
      dayOrder: dayInfo ? dayInfo.order : ''
    });
  };

  return (
    <div className="bg-white rounded-lg shadow mt-6">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Horarios Regulares</h2>
          <button
            onClick={() => setIsAdding(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Agregar
          </button>
        </div>

        {isAdding && (
          <div className="mb-4 p-4 bg-gray-50 rounded">
            <select
              value={newSchedule.day}
              onChange={(e) => handleDayChange(e.target.value)}
              className="mb-2 p-2 border rounded w-full"
            >
              <option value="">Seleccionar día</option>
              {days.map((day) => (
                <option key={day.value} value={day.value}>
                  {day.value}
                </option>
              ))}
            </select>

            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={newSchedule.isOpen}
                onChange={(e) => setNewSchedule({...newSchedule, isOpen: e.target.checked})}
                className="mr-2"
              />
              <span>¿Abierto este día?</span>
            </div>

            {newSchedule.isOpen && (
              <div className="space-y-2">
                <div className="flex space-x-2">
                  <label className="w-24">Apertura:</label>
                  <input
                    type="time"
                    value={newSchedule.openTime}
                    onChange={(e) => setNewSchedule({...newSchedule, openTime: e.target.value})}
                    className="p-2 border rounded"
                  />
                </div>
                <div className="flex space-x-2">
                  <label className="w-24">Cierre:</label>
                  <input
                    type="time"
                    value={newSchedule.closeTime}
                    onChange={(e) => setNewSchedule({...newSchedule, closeTime: e.target.value})}
                    className="p-2 border rounded"
                  />
                </div>
                <div className="flex space-x-2">
                  <label className="w-24">Descanso:</label>
                  <input
                    type="time"
                    value={newSchedule.breakStart}
                    onChange={(e) => setNewSchedule({...newSchedule, breakStart: e.target.value})}
                    className="p-2 border rounded"
                    placeholder="Inicio"
                  />
                  <span>a</span>
                  <input
                    type="time"
                    value={newSchedule.breakEnd}
                    onChange={(e) => setNewSchedule({...newSchedule, breakEnd: e.target.value})}
                    className="p-2 border rounded"
                    placeholder="Fin"
                  />
                </div>
              </div>
            )}

            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => setIsAdding(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancelar
              </button>
              <button
                onClick={handleAdd}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Guardar
              </button>
            </div>
          </div>
        )}

        <div className="space-y-2">
          {schedules.map((schedule) => (
            <div key={schedule.id} className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <div>
                <div className="font-medium">{schedule.day}</div>
                <div className="text-sm text-gray-600">
                  {schedule.isOpen ? (
                    <>
                      {schedule.openTime} a {schedule.closeTime}
                      {schedule.breakStart && schedule.breakEnd && 
                        ` (Descanso: ${schedule.breakStart} a ${schedule.breakEnd})`
                      }
                    </>
                  ) : 'Cerrado'}
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => onDelete(schedule.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegularSchedule;