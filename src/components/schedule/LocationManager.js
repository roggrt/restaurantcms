// // // // // // // // // src/components/schedule/LocationManager.js
// // // // // // // // import React, { useState } from 'react';

// // // // // // // // const LocationManager = ({ location, onUpdate }) => {
// // // // // // // //   const [isEditing, setIsEditing] = useState(false);
// // // // // // // //   const [editingLocation, setEditingLocation] = useState(
// // // // // // // //     location[0] || {
// // // // // // // //       city: '',
// // // // // // // //       state: '',
// // // // // // // //       address: '',
// // // // // // // //       coordinates: { latitude: 0, longitude: 0 },
// // // // // // // //       postalCode: ''
// // // // // // // //     }
// // // // // // // //   );

// // // // // // // //   const handleSubmit = (e) => {
// // // // // // // //     e.preventDefault();
// // // // // // // //     onUpdate(editingLocation);
// // // // // // // //     setIsEditing(false);
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="bg-white rounded-lg shadow p-4">
// // // // // // // //       <div className="flex justify-between items-center mb-4">
// // // // // // // //         <h3 className="text-lg font-medium">Ubicación</h3>
// // // // // // // //         <button
// // // // // // // //           onClick={() => setIsEditing(true)}
// // // // // // // //           className="text-blue-600 hover:text-blue-800"
// // // // // // // //         >
// // // // // // // //           Editar
// // // // // // // //         </button>
// // // // // // // //       </div>

// // // // // // // //       {isEditing ? (
// // // // // // // //         <form onSubmit={handleSubmit} className="space-y-3">
// // // // // // // //           <input
// // // // // // // //             type="text"
// // // // // // // //             value={editingLocation.address}
// // // // // // // //             onChange={(e) => setEditingLocation({ 
// // // // // // // //               ...editingLocation, 
// // // // // // // //               address: e.target.value 
// // // // // // // //             })}
// // // // // // // //             placeholder="Dirección"
// // // // // // // //             className="w-full p-2 border rounded"
// // // // // // // //           />
// // // // // // // //           <div className="grid grid-cols-2 gap-2">
// // // // // // // //             <input
// // // // // // // //               type="text"
// // // // // // // //               value={editingLocation.city}
// // // // // // // //               onChange={(e) => setEditingLocation({ 
// // // // // // // //                 ...editingLocation, 
// // // // // // // //                 city: e.target.value 
// // // // // // // //               })}
// // // // // // // //               placeholder="Ciudad"
// // // // // // // //               className="p-2 border rounded"
// // // // // // // //             />
// // // // // // // //             <input
// // // // // // // //               type="text"
// // // // // // // //               value={editingLocation.state}
// // // // // // // //               onChange={(e) => setEditingLocation({ 
// // // // // // // //                 ...editingLocation, 
// // // // // // // //                 state: e.target.value 
// // // // // // // //               })}
// // // // // // // //               placeholder="Estado/Provincia"
// // // // // // // //               className="p-2 border rounded"
// // // // // // // //             />
// // // // // // // //           </div>
// // // // // // // //           <input
// // // // // // // //             type="text"
// // // // // // // //             value={editingLocation.postalCode}
// // // // // // // //             onChange={(e) => setEditingLocation({ 
// // // // // // // //               ...editingLocation, 
// // // // // // // //               postalCode: e.target.value 
// // // // // // // //             })}
// // // // // // // //             placeholder="Código Postal"
// // // // // // // //             className="w-full p-2 border rounded"
// // // // // // // //           />
// // // // // // // //           <div className="grid grid-cols-2 gap-2">
// // // // // // // //             <input
// // // // // // // //               type="number"
// // // // // // // //               value={editingLocation.coordinates.latitude}
// // // // // // // //               onChange={(e) => setEditingLocation({
// // // // // // // //                 ...editingLocation,
// // // // // // // //                 coordinates: {
// // // // // // // //                   ...editingLocation.coordinates,
// // // // // // // //                   latitude: parseFloat(e.target.value)
// // // // // // // //                 }
// // // // // // // //               })}
// // // // // // // //               placeholder="Latitud"
// // // // // // // //               step="any"
// // // // // // // //               className="p-2 border rounded"
// // // // // // // //             />
// // // // // // // //             <input
// // // // // // // //               type="number"
// // // // // // // //               value={editingLocation.coordinates.longitude}
// // // // // // // //               onChange={(e) => setEditingLocation({
// // // // // // // //                 ...editingLocation,
// // // // // // // //                 coordinates: {
// // // // // // // //                   ...editingLocation.coordinates,
// // // // // // // //                   longitude: parseFloat(e.target.value)
// // // // // // // //                 }
// // // // // // // //               })}
// // // // // // // //               placeholder="Longitud"
// // // // // // // //               step="any"
// // // // // // // //               className="p-2 border rounded"
// // // // // // // //             />
// // // // // // // //           </div>
// // // // // // // //           <div className="flex justify-end space-x-2">
// // // // // // // //             <button
// // // // // // // //               type="button"
// // // // // // // //               onClick={() => setIsEditing(false)}
// // // // // // // //               className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
// // // // // // // //             >
// // // // // // // //               Cancelar
// // // // // // // //             </button>
// // // // // // // //             <button
// // // // // // // //               type="submit"
// // // // // // // //               className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
// // // // // // // //             >
// // // // // // // //               Guardar
// // // // // // // //             </button>
// // // // // // // //           </div>
// // // // // // // //         </form>
// // // // // // // //       ) : (
// // // // // // // //         <div className="space-y-2">
// // // // // // // //           {location[0] && (
// // // // // // // //             <>
// // // // // // // //               <p><strong>Dirección:</strong> {location[0].address}</p>
// // // // // // // //               <p><strong>Ciudad:</strong> {location[0].city}</p>
// // // // // // // //               <p><strong>Estado:</strong> {location[0].state}</p>
// // // // // // // //               <p><strong>Código Postal:</strong> {location[0].postalCode}</p>
// // // // // // // //               <p><strong>Coordenadas:</strong> {location[0].coordinates.latitude}, {location[0].coordinates.longitude}</p>
// // // // // // // //             </>
// // // // // // // //           )}
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default LocationManager;


// // // // // // // // src/components/schedule/LocationManager.js
// // // // // // // import React, { useState, useCallback } from 'react';
// // // // // // // import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// // // // // // // import usePlacesAutocomplete, {
// // // // // // //   getGeocode,
// // // // // // //   getLatLng,
// // // // // // // } from 'use-places-autocomplete';

// // // // // // // // Reemplaza con tu API key de Google
// // // // // // // const GOOGLE_MAPS_API_KEY = 'TU_API_KEY';

// // // // // // // const LocationManager = ({ location, onUpdate }) => {
// // // // // // //   const [isEditing, setIsEditing] = useState(false);
// // // // // // //   const [selectedLocation, setSelectedLocation] = useState(
// // // // // // //     location[0] || {
// // // // // // //       address: '',
// // // // // // //       city: '',
// // // // // // //       state: '',
// // // // // // //       postalCode: '',
// // // // // // //       coordinates: { latitude: -12.0464, longitude: -77.0428 } // Lima como default
// // // // // // //     }
// // // // // // //   );
// // // // // // //   const [map, setMap] = useState(null);

// // // // // // //   const {
// // // // // // //     ready,
// // // // // // //     value,
// // // // // // //     suggestions: { status, data },
// // // // // // //     setValue,
// // // // // // //     clearSuggestions,
// // // // // // //   } = usePlacesAutocomplete({
// // // // // // //     requestOptions: {
// // // // // // //       componentRestrictions: { country: 'PE' }, // Restringe a Perú, cámbialo según tu país
// // // // // // //     }
// // // // // // //   });

// // // // // // //   const handleSelect = async (description) => {
// // // // // // //     setValue(description, false);
// // // // // // //     clearSuggestions();

// // // // // // //     try {
// // // // // // //       const results = await getGeocode({ address: description });
// // // // // // //       const { lat, lng } = await getLatLng(results[0]);
      
// // // // // // //       // Extraer componentes de la dirección
// // // // // // //       const addressComponents = results[0].address_components;
// // // // // // //       let city = '', state = '', postalCode = '';
      
// // // // // // //       addressComponents.forEach(component => {
// // // // // // //         if (component.types.includes('locality')) {
// // // // // // //           city = component.long_name;
// // // // // // //         }
// // // // // // //         if (component.types.includes('administrative_area_level_1')) {
// // // // // // //           state = component.long_name;
// // // // // // //         }
// // // // // // //         if (component.types.includes('postal_code')) {
// // // // // // //           postalCode = component.long_name;
// // // // // // //         }
// // // // // // //       });

// // // // // // //       setSelectedLocation({
// // // // // // //         address: description,
// // // // // // //         city,
// // // // // // //         state,
// // // // // // //         postalCode,
// // // // // // //         coordinates: {
// // // // // // //           latitude: lat,
// // // // // // //           longitude: lng
// // // // // // //         }
// // // // // // //       });

// // // // // // //       if (map) {
// // // // // // //         map.panTo({ lat, lng });
// // // // // // //         map.setZoom(15);
// // // // // // //       }
// // // // // // //     } catch (error) {
// // // // // // //       console.error('😱 Error:', error);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleMapClick = useCallback((event) => {
// // // // // // //     const lat = event.latLng.lat();
// // // // // // //     const lng = event.latLng.lng();

// // // // // // //     // Reverse geocoding para obtener la dirección
// // // // // // //     const geocoder = new window.google.maps.Geocoder();
// // // // // // //     geocoder.geocode({ location: { lat, lng } }, (results, status) => {
// // // // // // //       if (status === 'OK' && results[0]) {
// // // // // // //         const addressComponents = results[0].address_components;
// // // // // // //         let city = '', state = '', postalCode = '';
        
// // // // // // //         addressComponents.forEach(component => {
// // // // // // //           if (component.types.includes('locality')) {
// // // // // // //             city = component.long_name;
// // // // // // //           }
// // // // // // //           if (component.types.includes('administrative_area_level_1')) {
// // // // // // //             state = component.long_name;
// // // // // // //           }
// // // // // // //           if (component.types.includes('postal_code')) {
// // // // // // //             postalCode = component.long_name;
// // // // // // //           }
// // // // // // //         });

// // // // // // //         setSelectedLocation({
// // // // // // //           address: results[0].formatted_address,
// // // // // // //           city,
// // // // // // //           state,
// // // // // // //           postalCode,
// // // // // // //           coordinates: {
// // // // // // //             latitude: lat,
// // // // // // //             longitude: lng
// // // // // // //           }
// // // // // // //         });
// // // // // // //         setValue(results[0].formatted_address);
// // // // // // //       }
// // // // // // //     });
// // // // // // //   }, [setValue]);

// // // // // // //   const handleSave = () => {
// // // // // // //     onUpdate(selectedLocation);
// // // // // // //     setIsEditing(false);
// // // // // // //   };

// // // // // // //   const containerStyle = {
// // // // // // //     width: '100%',
// // // // // // //     height: '400px'
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="bg-white rounded-lg shadow p-4">
// // // // // // //       <div className="flex justify-between items-center mb-4">
// // // // // // //         <h3 className="text-lg font-medium">Ubicación</h3>
// // // // // // //         {!isEditing && (
// // // // // // //           <button
// // // // // // //             onClick={() => setIsEditing(true)}
// // // // // // //             className="text-blue-600 hover:text-blue-800"
// // // // // // //           >
// // // // // // //             Editar
// // // // // // //           </button>
// // // // // // //         )}
// // // // // // //       </div>

// // // // // // //       {isEditing ? (
// // // // // // //         <div className="space-y-4">
// // // // // // //           <LoadScript
// // // // // // //             googleMapsApiKey={GOOGLE_MAPS_API_KEY}
// // // // // // //             libraries={['places']}
// // // // // // //           >
// // // // // // //             {/* Búsqueda de lugares */}
// // // // // // //             <div className="relative">
// // // // // // //               <input
// // // // // // //                 value={value}
// // // // // // //                 onChange={(e) => setValue(e.target.value)}
// // // // // // //                 disabled={!ready}
// // // // // // //                 placeholder="Buscar dirección..."
// // // // // // //                 className="w-full p-2 border rounded"
// // // // // // //               />
// // // // // // //               {status === 'OK' && (
// // // // // // //                 <ul className="absolute z-10 w-full bg-white border rounded-b mt-1 shadow-lg">
// // // // // // //                   {data.map(({ place_id, description }) => (
// // // // // // //                     <li
// // // // // // //                       key={place_id}
// // // // // // //                       onClick={() => handleSelect(description)}
// // // // // // //                       className="p-2 hover:bg-gray-100 cursor-pointer"
// // // // // // //                     >
// // // // // // //                       {description}
// // // // // // //                     </li>
// // // // // // //                   ))}
// // // // // // //                 </ul>
// // // // // // //               )}
// // // // // // //             </div>

// // // // // // //             {/* Mapa */}
// // // // // // //             <div className="mt-4">
// // // // // // //               <GoogleMap
// // // // // // //                 mapContainerStyle={containerStyle}
// // // // // // //                 center={{
// // // // // // //                   lat: selectedLocation.coordinates.latitude,
// // // // // // //                   lng: selectedLocation.coordinates.longitude
// // // // // // //                 }}
// // // // // // //                 zoom={15}
// // // // // // //                 onClick={handleMapClick}
// // // // // // //                 onLoad={map => setMap(map)}
// // // // // // //               >
// // // // // // //                 <Marker
// // // // // // //                   position={{
// // // // // // //                     lat: selectedLocation.coordinates.latitude,
// // // // // // //                     lng: selectedLocation.coordinates.longitude
// // // // // // //                   }}
// // // // // // //                 />
// // // // // // //               </GoogleMap>
// // // // // // //             </div>
// // // // // // //           </LoadScript>

// // // // // // //           {/* Información adicional */}
// // // // // // //           <div className="grid grid-cols-2 gap-4">
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               value={selectedLocation.city}
// // // // // // //               onChange={(e) => setSelectedLocation({
// // // // // // //                 ...selectedLocation,
// // // // // // //                 city: e.target.value
// // // // // // //               })}
// // // // // // //               placeholder="Ciudad"
// // // // // // //               className="p-2 border rounded"
// // // // // // //             />
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               value={selectedLocation.state}
// // // // // // //               onChange={(e) => setSelectedLocation({
// // // // // // //                 ...selectedLocation,
// // // // // // //                 state: e.target.value
// // // // // // //               })}
// // // // // // //               placeholder="Estado/Provincia"
// // // // // // //               className="p-2 border rounded"
// // // // // // //             />
// // // // // // //           </div>

// // // // // // //           <input
// // // // // // //             type="text"
// // // // // // //             value={selectedLocation.postalCode}
// // // // // // //             onChange={(e) => setSelectedLocation({
// // // // // // //               ...selectedLocation,
// // // // // // //               postalCode: e.target.value
// // // // // // //             })}
// // // // // // //             placeholder="Código Postal"
// // // // // // //             className="w-full p-2 border rounded"
// // // // // // //           />

// // // // // // //           <div className="flex justify-end space-x-2">
// // // // // // //             <button
// // // // // // //               onClick={() => setIsEditing(false)}
// // // // // // //               className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
// // // // // // //             >
// // // // // // //               Cancelar
// // // // // // //             </button>
// // // // // // //             <button
// // // // // // //               onClick={handleSave}
// // // // // // //               className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
// // // // // // //             >
// // // // // // //               Guardar
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       ) : (
// // // // // // //         <div className="space-y-2">
// // // // // // //           {location[0] && (
// // // // // // //             <>
// // // // // // //               <LoadScript
// // // // // // //                 googleMapsApiKey={GOOGLE_MAPS_API_KEY}
// // // // // // //               >
// // // // // // //                 <div style={containerStyle}>
// // // // // // //                   <GoogleMap
// // // // // // //                     mapContainerStyle={containerStyle}
// // // // // // //                     center={{
// // // // // // //                       lat: location[0].coordinates.latitude,
// // // // // // //                       lng: location[0].coordinates.longitude
// // // // // // //                     }}
// // // // // // //                     zoom={15}
// // // // // // //                   >
// // // // // // //                     <Marker
// // // // // // //                       position={{
// // // // // // //                         lat: location[0].coordinates.latitude,
// // // // // // //                         lng: location[0].coordinates.longitude
// // // // // // //                       }}
// // // // // // //                     />
// // // // // // //                   </GoogleMap>
// // // // // // //                 </div>
// // // // // // //               </LoadScript>
// // // // // // //               <div className="mt-4">
// // // // // // //                 <p className="font-medium">{location[0].address}</p>
// // // // // // //                 <p>{location[0].city}, {location[0].state}</p>
// // // // // // //                 {location[0].postalCode && (
// // // // // // //                   <p>CP: {location[0].postalCode}</p>
// // // // // // //                 )}
// // // // // // //               </div>
// // // // // // //             </>
// // // // // // //           )}
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default LocationManager;


// // // // // // // src/components/schedule/LocationManager.js
// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import { GeoPoint } from 'firebase/firestore';

// // // // // // const LocationManager = ({ location, onUpdate }) => {
// // // // // //   const [isEditing, setIsEditing] = useState(false);
// // // // // //   const [currentLocation, setCurrentLocation] = useState(
// // // // // //     location[0] || {
// // // // // //       address: '',
// // // // // //       city: '',
// // // // // //       state: '',
// // // // // //       postalCode: '',
// // // // // //       coordinates: new GeoPoint(0, 0)
// // // // // //     }
// // // // // //   );

// // // // // //   const [mapUrl, setMapUrl] = useState('');

// // // // // //   useEffect(() => {
// // // // // //     if (currentLocation.coordinates) {
// // // // // //       const { latitude, longitude } = currentLocation.coordinates;
// // // // // //       setMapUrl(`https://www.openstreetmap.org/export/embed.html?bbox=${longitude-0.01},${latitude-0.01},${longitude+0.01},${latitude+0.01}&layer=mapnik&marker=${latitude},${longitude}`);
// // // // // //     }
// // // // // //   }, [currentLocation.coordinates]);

// // // // // //   const peruStates = [
// // // // // //     'Amazonas', 'Áncash', 'Apurímac', 'Arequipa', 'Ayacucho', 
// // // // // //     'Cajamarca', 'Cusco', 'Huancavelica', 'Huánuco', 'Ica', 
// // // // // //     'Junín', 'La Libertad', 'Lambayeque', 'Lima', 'Loreto', 
// // // // // //     'Madre de Dios', 'Moquegua', 'Pasco', 'Piura', 'Puno', 
// // // // // //     'San Martín', 'Tacna', 'Tumbes', 'Ucayali'
// // // // // //   ];

// // // // // //   // Objeto que mapea departamentos a sus principales ciudades
// // // // // //   const citiesByState = {
// // // // // //     Lima: ['Lima', 'Miraflores', 'San Isidro', 'Barranco', 'San Borja', 'La Molina'],
// // // // // //     Arequipa: ['Arequipa', 'Cayma', 'Cerro Colorado', 'Yanahuara'],
// // // // // //     // Añadir más ciudades según necesites
// // // // // //   };

// // // // // //   const handleSave = () => {
// // // // // //     onUpdate({
// // // // // //       ...currentLocation,
// // // // // //       coordinates: new GeoPoint(
// // // // // //         parseFloat(currentLocation.coordinates.latitude) || 0,
// // // // // //         parseFloat(currentLocation.coordinates.longitude) || 0
// // // // // //       )
// // // // // //     });
// // // // // //     setIsEditing(false);
// // // // // //   };

// // // // // //   const handleStateChange = (e) => {
// // // // // //     setCurrentLocation({
// // // // // //       ...currentLocation,
// // // // // //       state: e.target.value,
// // // // // //       city: '' // Resetear ciudad cuando cambia el estado
// // // // // //     });
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="bg-white rounded-lg shadow p-4">
// // // // // //       <div className="flex justify-between items-center mb-4">
// // // // // //         <h3 className="text-lg font-medium">Ubicación</h3>
// // // // // //         {!isEditing && (
// // // // // //           <button
// // // // // //             onClick={() => setIsEditing(true)}
// // // // // //             className="text-blue-600 hover:text-blue-800"
// // // // // //           >
// // // // // //             Editar
// // // // // //           </button>
// // // // // //         )}
// // // // // //       </div>

// // // // // //       {isEditing ? (
// // // // // //         <div className="space-y-4">
// // // // // //           {/* Estado/Departamento */}
// // // // // //           <div>
// // // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">
// // // // // //               Departamento
// // // // // //             </label>
// // // // // //             <select
// // // // // //               value={currentLocation.state}
// // // // // //               onChange={handleStateChange}
// // // // // //               className="w-full p-2 border rounded"
// // // // // //             >
// // // // // //               <option value="">Seleccione un departamento</option>
// // // // // //               {peruStates.map(state => (
// // // // // //                 <option key={state} value={state}>{state}</option>
// // // // // //               ))}
// // // // // //             </select>
// // // // // //           </div>

// // // // // //           {/* Ciudad */}
// // // // // //           <div>
// // // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">
// // // // // //               Ciudad
// // // // // //             </label>
// // // // // //             <select
// // // // // //               value={currentLocation.city}
// // // // // //               onChange={(e) => setCurrentLocation({
// // // // // //                 ...currentLocation,
// // // // // //                 city: e.target.value
// // // // // //               })}
// // // // // //               className="w-full p-2 border rounded"
// // // // // //               disabled={!currentLocation.state}
// // // // // //             >
// // // // // //               <option value="">Seleccione una ciudad</option>
// // // // // //               {currentLocation.state && citiesByState[currentLocation.state]?.map(city => (
// // // // // //                 <option key={city} value={city}>{city}</option>
// // // // // //               ))}
// // // // // //             </select>
// // // // // //           </div>

// // // // // //           {/* Dirección */}
// // // // // //           <div>
// // // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">
// // // // // //               Dirección
// // // // // //             </label>
// // // // // //             <input
// // // // // //               type="text"
// // // // // //               value={currentLocation.address}
// // // // // //               onChange={(e) => setCurrentLocation({
// // // // // //                 ...currentLocation,
// // // // // //                 address: e.target.value
// // // // // //               })}
// // // // // //               placeholder="Av/Calle/Jr"
// // // // // //               className="w-full p-2 border rounded"
// // // // // //             />
// // // // // //           </div>

// // // // // //           {/* Código Postal */}
// // // // // //           <div>
// // // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">
// // // // // //               Código Postal
// // // // // //             </label>
// // // // // //             <input
// // // // // //               type="text"
// // // // // //               value={currentLocation.postalCode}
// // // // // //               onChange={(e) => setCurrentLocation({
// // // // // //                 ...currentLocation,
// // // // // //                 postalCode: e.target.value
// // // // // //               })}
// // // // // //               placeholder="Código Postal"
// // // // // //               className="w-full p-2 border rounded"
// // // // // //             />
// // // // // //           </div>

// // // // // //           {/* Coordenadas */}
// // // // // //           <div>
// // // // // //             <label className="block text-sm font-medium text-gray-700 mb-1">
// // // // // //               Coordenadas
// // // // // //             </label>
// // // // // //             <div className="grid grid-cols-2 gap-2">
// // // // // //               <input
// // // // // //                 type="number"
// // // // // //                 step="any"
// // // // // //                 value={currentLocation.coordinates.latitude}
// // // // // //                 onChange={(e) => setCurrentLocation({
// // // // // //                   ...currentLocation,
// // // // // //                   coordinates: {
// // // // // //                     ...currentLocation.coordinates,
// // // // // //                     latitude: e.target.value
// // // // // //                   }
// // // // // //                 })}
// // // // // //                 placeholder="Latitud"
// // // // // //                 className="p-2 border rounded"
// // // // // //               />
// // // // // //               <input
// // // // // //                 type="number"
// // // // // //                 step="any"
// // // // // //                 value={currentLocation.coordinates.longitude}
// // // // // //                 onChange={(e) => setCurrentLocation({
// // // // // //                   ...currentLocation,
// // // // // //                   coordinates: {
// // // // // //                     ...currentLocation.coordinates,
// // // // // //                     longitude: e.target.value
// // // // // //                   }
// // // // // //                 })}
// // // // // //                 placeholder="Longitud"
// // // // // //                 className="p-2 border rounded"
// // // // // //               />
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* Previsualización del mapa */}
// // // // // //           {mapUrl && (
// // // // // //             <div className="mt-4 h-64 w-full">
// // // // // //               <iframe
// // // // // //                 title="Location Map"
// // // // // //                 width="100%"
// // // // // //                 height="100%"
// // // // // //                 frameBorder="0"
// // // // // //                 scrolling="no"
// // // // // //                 marginHeight="0"
// // // // // //                 marginWidth="0"
// // // // // //                 src={mapUrl}
// // // // // //               />
// // // // // //             </div>
// // // // // //           )}

// // // // // //           <div className="flex justify-end space-x-2">
// // // // // //             <button
// // // // // //               onClick={() => setIsEditing(false)}
// // // // // //               className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
// // // // // //             >
// // // // // //               Cancelar
// // // // // //             </button>
// // // // // //             <button
// // // // // //               onClick={handleSave}
// // // // // //               className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
// // // // // //             >
// // // // // //               Guardar
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       ) : (
// // // // // //         <div className="space-y-4">
// // // // // //           {location[0] && (
// // // // // //             <>
// // // // // //               <div className="space-y-2">
// // // // // //                 <p><strong>Dirección:</strong> {location[0].address}</p>
// // // // // //                 <p><strong>Ciudad:</strong> {location[0].city}</p>
// // // // // //                 <p><strong>Departamento:</strong> {location[0].state}</p>
// // // // // //                 {location[0].postalCode && (
// // // // // //                   <p><strong>Código Postal:</strong> {location[0].postalCode}</p>
// // // // // //                 )}
// // // // // //                 <p><strong>Coordenadas:</strong> {location[0].coordinates.latitude}, {location[0].coordinates.longitude}</p>
// // // // // //               </div>
// // // // // //               {mapUrl && (
// // // // // //                 <div className="h-64 w-full">
// // // // // //                   <iframe
// // // // // //                     title="Location Map"
// // // // // //                     width="100%"
// // // // // //                     height="100%"
// // // // // //                     frameBorder="0"
// // // // // //                     scrolling="no"
// // // // // //                     marginHeight="0"
// // // // // //                     marginWidth="0"
// // // // // //                     src={mapUrl}
// // // // // //                   />
// // // // // //                 </div>
// // // // // //               )}
// // // // // //             </>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default LocationManager;



// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { GeoPoint } from 'firebase/firestore';

// // // // // const LocationManager = ({ location, onUpdate }) => {
// // // // //   const [isEditing, setIsEditing] = useState(!location?.[0]); // Si no hay ubicación, mostrar modo edición
// // // // //   const [states, setStates] = useState([]);
// // // // //   const [cities, setCities] = useState([]);
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [error, setError] = useState(null);
// // // // //   const [searchingCoordinates, setSearchingCoordinates] = useState(false);

// // // // //   const emptyLocation = {
// // // // //     address: '',
// // // // //     city: '',
// // // // //     state: '',
// // // // //     postalCode: '',
// // // // //     coordinates: {
// // // // //       _lat: 0,
// // // // //       _long: 0
// // // // //     }
// // // // //   };

// // // // //   const [currentLocation, setCurrentLocation] = useState(location?.[0] || emptyLocation);

// // // // //   // Fetch US states
// // // // //   useEffect(() => {
// // // // //     const fetchStates = async () => {
// // // // //       try {
// // // // //         const response = await fetch('https://countriesnow.space/api/v0.1/countries/states', {
// // // // //           method: 'POST',
// // // // //           headers: {
// // // // //             'Content-Type': 'application/json'
// // // // //           },
// // // // //           body: JSON.stringify({
// // // // //             country: 'United States'
// // // // //           })
// // // // //         });
// // // // //         const data = await response.json();
// // // // //         if (data.data.states) {
// // // // //           setStates(data.data.states.map(state => state.name));
// // // // //         }
// // // // //       } catch (err) {
// // // // //         console.error('Error fetching states:', err);
// // // // //         setError('Could not load states. Please try again.');
// // // // //       }
// // // // //     };

// // // // //     fetchStates();
// // // // //   }, []);

// // // // //   // Fetch cities when state changes
// // // // //   useEffect(() => {
// // // // //     const fetchCities = async () => {
// // // // //       if (!currentLocation.state) return;

// // // // //       try {
// // // // //         setLoading(true);
// // // // //         const response = await fetch('https://countriesnow.space/api/v0.1/countries/state/cities', {
// // // // //           method: 'POST',
// // // // //           headers: {
// // // // //             'Content-Type': 'application/json'
// // // // //           },
// // // // //           body: JSON.stringify({
// // // // //             country: 'United States',
// // // // //             state: currentLocation.state
// // // // //           })
// // // // //         });
// // // // //         const data = await response.json();
// // // // //         if (data.data) {
// // // // //           setCities(data.data);
// // // // //         }
// // // // //       } catch (err) {
// // // // //         console.error('Error fetching cities:', err);
// // // // //         setError('Could not load cities. Please try again.');
// // // // //       } finally {
// // // // //         setLoading(false);
// // // // //       }
// // // // //     };

// // // // //     if (currentLocation.state) {
// // // // //       fetchCities();
// // // // //     }
// // // // //   }, [currentLocation.state]);

// // // // //   const getCoordinates = async (address) => {
// // // // //     try {
// // // // //       setSearchingCoordinates(true);
// // // // //       const query = encodeURIComponent(
// // // // //         `${address}, ${currentLocation.city}, ${currentLocation.state}, USA`
// // // // //       );
// // // // //       const response = await fetch(
// // // // //         `https://nominatim.openstreetmap.org/search?format=json&q=${query}`
// // // // //       );
// // // // //       const data = await response.json();
      
// // // // //       if (data && data[0]) {
// // // // //         return {
// // // // //           _lat: parseFloat(data[0].lat),
// // // // //           _long: parseFloat(data[0].lon)
// // // // //         };
// // // // //       }
// // // // //       return null;
// // // // //     } catch (err) {
// // // // //       console.error('Error getting coordinates:', err);
// // // // //       return null;
// // // // //     } finally {
// // // // //       setSearchingCoordinates(false);
// // // // //     }
// // // // //   };

// // // // //   const handleSave = async () => {
// // // // //     try {
// // // // //       // Validación básica
// // // // //       if (!currentLocation.state || !currentLocation.city || !currentLocation.address) {
// // // // //         setError('Please fill in all required fields (State, City, and Address)');
// // // // //         return;
// // // // //       }

// // // // //       // Obtener coordenadas
// // // // //       const coordinates = await getCoordinates(currentLocation.address);
      
// // // // //       const locationToSave = {
// // // // //         ...currentLocation,
// // // // //         coordinates: coordinates || currentLocation.coordinates
// // // // //       };

// // // // //       await onUpdate(locationToSave);
// // // // //       setIsEditing(false);
// // // // //       setError(null);
// // // // //     } catch (err) {
// // // // //       console.error('Error saving location:', err);
// // // // //       setError('Error saving location. Please try again.');
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="bg-white rounded-lg shadow-md p-6">
// // // // //       <div className="flex justify-between items-center mb-6">
// // // // //         <h2 className="text-xl font-bold text-gray-800">Restaurant Location</h2>
// // // // //         {!isEditing && (
// // // // //           <button
// // // // //             onClick={() => setIsEditing(true)}
// // // // //             className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
// // // // //           >
// // // // //             Edit Location
// // // // //           </button>
// // // // //         )}
// // // // //       </div>

// // // // //       {error && (
// // // // //         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
// // // // //           {error}
// // // // //         </div>
// // // // //       )}

// // // // //       {isEditing ? (
// // // // //         <div className="space-y-4">
// // // // //           {/* State Selection */}
// // // // //           <div>
// // // // //             <label className="block text-gray-700 font-medium mb-2">
// // // // //               State *
// // // // //             </label>
// // // // //             <select
// // // // //               value={currentLocation.state}
// // // // //               onChange={(e) => {
// // // // //                 setCurrentLocation({
// // // // //                   ...currentLocation,
// // // // //                   state: e.target.value,
// // // // //                   city: ''
// // // // //                 });
// // // // //                 setCities([]); // Reset cities when state changes
// // // // //               }}
// // // // //               className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
// // // // //             >
// // // // //               <option value="">Select a State</option>
// // // // //               {Array.isArray(states) && states.map((state, index) => (
// // // // //                 <option key={index} value={state}>
// // // // //                   {state}
// // // // //                 </option>
// // // // //               ))}
// // // // //             </select>
// // // // //           </div>

// // // // //           {/* City Selection */}
// // // // //           <div>
// // // // //             <label className="block text-gray-700 font-medium mb-2">
// // // // //               City *
// // // // //             </label>
// // // // //             <select
// // // // //               value={currentLocation.city}
// // // // //               onChange={(e) => setCurrentLocation({
// // // // //                 ...currentLocation,
// // // // //                 city: e.target.value
// // // // //               })}
// // // // //               className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
// // // // //               disabled={!currentLocation.state || loading}
// // // // //             >
// // // // //               <option value="">Select a City</option>
// // // // //               {Array.isArray(cities) && cities.map((city, index) => (
// // // // //                 <option key={index} value={city}>
// // // // //                   {city}
// // // // //                 </option>
// // // // //               ))}
// // // // //             </select>
// // // // //           </div>

// // // // //           {/* Address */}
// // // // //           <div>
// // // // //             <label className="block text-gray-700 font-medium mb-2">
// // // // //               Street Address *
// // // // //             </label>
// // // // //             <input
// // // // //               type="text"
// // // // //               value={currentLocation.address}
// // // // //               onChange={(e) => setCurrentLocation({
// // // // //                 ...currentLocation,
// // // // //                 address: e.target.value
// // // // //               })}
// // // // //               className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
// // // // //               placeholder="123 Restaurant Street"
// // // // //             />
// // // // //           </div>

// // // // //           {/* Postal Code */}
// // // // //           <div>
// // // // //             <label className="block text-gray-700 font-medium mb-2">
// // // // //               Postal Code
// // // // //             </label>
// // // // //             <input
// // // // //               type="text"
// // // // //               value={currentLocation.postalCode}
// // // // //               onChange={(e) => setCurrentLocation({
// // // // //                 ...currentLocation,
// // // // //                 postalCode: e.target.value
// // // // //               })}
// // // // //               className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
// // // // //               placeholder="12345"
// // // // //             />
// // // // //           </div>

// // // // //           {/* Botones */}
// // // // //           <div className="flex justify-end space-x-2 pt-4">
// // // // //             {location?.[0] && (
// // // // //               <button
// // // // //                 onClick={() => {
// // // // //                   setIsEditing(false);
// // // // //                   setCurrentLocation(location[0]);
// // // // //                   setError(null);
// // // // //                 }}
// // // // //                 className="px-4 py-2 text-gray-600 hover:text-gray-800"
// // // // //               >
// // // // //                 Cancel
// // // // //               </button>
// // // // //             )}
// // // // //             <button
// // // // //               onClick={handleSave}
// // // // //               disabled={searchingCoordinates}
// // // // //               className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded disabled:bg-blue-300"
// // // // //             >
// // // // //               {searchingCoordinates ? 'Saving...' : 'Save Changes'}
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>
// // // // //       ) : (
// // // // //         <div className="space-y-4">
// // // // //           {location?.[0] ? (
// // // // //             <>
// // // // //               <div>
// // // // //                 <p className="text-sm text-gray-500 mb-1">Address</p>
// // // // //                 <p className="font-medium">
// // // // //                   {location[0].address}<br />
// // // // //                   {location[0].city}, {location[0].state} {location[0].postalCode}
// // // // //                 </p>
// // // // //               </div>

// // // // //               {location[0].coordinates?._lat && location[0].coordinates?._long && (
// // // // //                 <div className="h-64 border rounded overflow-hidden">
// // // // //                   <iframe
// // // // //                     title="Location Map"
// // // // //                     width="100%"
// // // // //                     height="100%"
// // // // //                     frameBorder="0"
// // // // //                     src={`https://www.openstreetmap.org/export/embed.html?bbox=${location[0].coordinates._long-0.01},${location[0].coordinates._lat-0.01},${location[0].coordinates._long+0.01},${location[0].coordinates._lat+0.01}&layer=mapnik&marker=${location[0].coordinates._lat},${location[0].coordinates._long}`}
// // // // //                   />
// // // // //                 </div>
// // // // //               )}
// // // // //             </>
// // // // //           ) : (
// // // // //             <div className="text-center py-8 text-gray-500">
// // // // //               No location set. Click Edit Location to add your restaurant's location.
// // // // //             </div>
// // // // //           )}
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default LocationManager;


// // // // import React, { useState, useEffect } from 'react';
// // // // import { GeoPoint } from 'firebase/firestore';
// // // // import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
// // // // import 'leaflet/dist/leaflet.css';
// // // // import L from 'leaflet';

// // // // // Arreglar el ícono del marcador por defecto
// // // // delete L.Icon.Default.prototype._getIconUrl;
// // // // L.Icon.Default.mergeOptions({
// // // //   iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
// // // //   iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
// // // //   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
// // // // });

// // // // // Componente que maneja los eventos del mapa
// // // // const LocationPicker = ({ position, onPositionChange }) => {
// // // //   useMapEvents({
// // // //     click(e) {
// // // //       onPositionChange([e.latlng.lat, e.latlng.lng]);
// // // //     },
// // // //   });

// // // //   return position ? <Marker position={position} /> : null;
// // // // };

// // // // const LocationManager = ({ location, onUpdate }) => {
// // // //   const [currentLocation, setCurrentLocation] = useState({
// // // //     address: location?.[0]?.address || '',
// // // //     city: location?.[0]?.city || '',
// // // //     state: location?.[0]?.state || '',
// // // //     postalCode: location?.[0]?.postalCode || '',
// // // //     coordinates: location?.[0]?.coordinates || new GeoPoint(0, 0)
// // // //   });

// // // //   const [markerPosition, setMarkerPosition] = useState(
// // // //     location?.[0]?.coordinates?._lat ? 
// // // //     [location[0].coordinates._lat, location[0].coordinates._long] : 
// // // //     [-2.897333, -79.004430] // Coordenadas por defecto
// // // //   );

// // // //   const handlePositionChange = (newPosition) => {
// // // //     setMarkerPosition(newPosition);
// // // //     setCurrentLocation(prev => ({
// // // //       ...prev,
// // // //       coordinates: {
// // // //         _lat: newPosition[0],
// // // //         _long: newPosition[1]
// // // //       }
// // // //     }));
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       const locationData = {
// // // //         ...currentLocation,
// // // //         coordinates: new GeoPoint(markerPosition[0], markerPosition[1])
// // // //       };
// // // //       await onUpdate(locationData);
// // // //       alert('Location updated successfully');
// // // //     } catch (error) {
// // // //       console.error('Error updating location:', error);
// // // //       alert('Error updating location');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="p-4">
// // // //       <form onSubmit={handleSubmit} className="space-y-4">
// // // //         {/* Mapa */}
// // // //         <div className="h-[400px] rounded border mb-4">
// // // //           <MapContainer
// // // //             center={markerPosition}
// // // //             zoom={13}
// // // //             style={{ height: '100%', width: '100%' }}
// // // //           >
// // // //             <TileLayer
// // // //               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// // // //               attribution='&copy; OpenStreetMap contributors'
// // // //             />
// // // //             <LocationPicker 
// // // //               position={markerPosition}
// // // //               onPositionChange={handlePositionChange}
// // // //             />
// // // //           </MapContainer>
// // // //         </div>

// // // //         {/* Coordenadas actuales */}
// // // //         <div className="bg-gray-100 p-2 rounded">
// // // //           <p className="text-sm">
// // // //             Selected coordinates: {markerPosition[0].toFixed(6)}, {markerPosition[1].toFixed(6)}
// // // //           </p>
// // // //         </div>

// // // //         {/* Campos de dirección */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //           <div>
// // // //             <label className="block mb-1">Address</label>
// // // //             <input
// // // //               type="text"
// // // //               value={currentLocation.address}
// // // //               onChange={(e) => setCurrentLocation({
// // // //                 ...currentLocation,
// // // //                 address: e.target.value
// // // //               })}
// // // //               className="w-full p-2 border rounded"
// // // //               required
// // // //             />
// // // //           </div>

// // // //           <div>
// // // //             <label className="block mb-1">City</label>
// // // //             <input
// // // //               type="text"
// // // //               value={currentLocation.city}
// // // //               onChange={(e) => setCurrentLocation({
// // // //                 ...currentLocation,
// // // //                 city: e.target.value
// // // //               })}
// // // //               className="w-full p-2 border rounded"
// // // //               required
// // // //             />
// // // //           </div>

// // // //           <div>
// // // //             <label className="block mb-1">State</label>
// // // //             <input
// // // //               type="text"
// // // //               value={currentLocation.state}
// // // //               onChange={(e) => setCurrentLocation({
// // // //                 ...currentLocation,
// // // //                 state: e.target.value
// // // //               })}
// // // //               className="w-full p-2 border rounded"
// // // //               required
// // // //             />
// // // //           </div>

// // // //           <div>
// // // //             <label className="block mb-1">Postal Code</label>
// // // //             <input
// // // //               type="text"
// // // //               value={currentLocation.postalCode}
// // // //               onChange={(e) => setCurrentLocation({
// // // //                 ...currentLocation,
// // // //                 postalCode: e.target.value
// // // //               })}
// // // //               className="w-full p-2 border rounded"
// // // //             />
// // // //           </div>
// // // //         </div>

// // // //         <button
// // // //           type="submit"
// // // //           className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
// // // //         >
// // // //           Save Location
// // // //         </button>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default LocationManager;


// // // import React, { useState } from 'react';
// // // import { GeoPoint } from 'firebase/firestore';
// // // import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
// // // import 'leaflet/dist/leaflet.css';
// // // import L from 'leaflet';

// // // // Arreglar el ícono del marcador
// // // delete L.Icon.Default.prototype._getIconUrl;
// // // L.Icon.Default.mergeOptions({
// // //   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
// // //   iconUrl: require('leaflet/dist/images/marker-icon.png'),
// // //   shadowUrl: require('leaflet/dist/images/marker-shadow.png')
// // // });

// // // // Datos estáticos para estados y ciudades
// // // const STATES_DATA = {
// // //   'Connecticut': ['Stratford', 'Hartford', 'New Haven', 'Bridgeport'],
// // //   'New York': ['New York City', 'Buffalo', 'Albany', 'Syracuse'],
// // //   'New Jersey': ['Newark', 'Jersey City', 'Paterson', 'Elizabeth'],
// // //   'Massachusetts': ['Boston', 'Worcester', 'Springfield', 'Cambridge']
// // // };

// // // // Componente para el marcador en el mapa
// // // const LocationPicker = ({ position, onPositionChange }) => {
// // //   useMapEvents({
// // //     click(e) {
// // //       onPositionChange([e.latlng.lat, e.latlng.lng]);
// // //     },
// // //   });
// // //   return position ? <Marker position={position} /> : null;
// // // };

// // // const LocationManager = ({ locations = [], onUpdate, onDelete }) => {
// // //   const [isAdding, setIsAdding] = useState(false);
// // //   const [error, setError] = useState(null);

// // //   const emptyLocation = {
// // //     id: null,
// // //     branchName: '',
// // //     address: '',
// // //     city: '',
// // //     state: '',
// // //     postalCode: '',
// // //     coordinates: new GeoPoint(41.1873, -73.1279) // Coordenadas por defecto (Stratford, CT)
// // //   };

// // //   const [currentLocation, setCurrentLocation] = useState(emptyLocation);
// // //   const [markerPosition, setMarkerPosition] = useState([41.1873, -73.1279]);
// // //   const [cities, setCities] = useState([]);

// // //   const handleStateChange = (stateName) => {
// // //     setCurrentLocation(prev => ({
// // //       ...prev,
// // //       state: stateName,
// // //       city: '' // Resetear ciudad cuando cambia el estado
// // //     }));
// // //     setCities(STATES_DATA[stateName] || []);
// // //   };

// // //   const handlePositionChange = (newPosition) => {
// // //     setMarkerPosition(newPosition);
// // //     setCurrentLocation(prev => ({
// // //       ...prev,
// // //       coordinates: new GeoPoint(newPosition[0], newPosition[1])
// // //     }));
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       if (!currentLocation.address || !currentLocation.city || !currentLocation.state) {
// // //         setError('Please fill all required fields');
// // //         return;
// // //       }

// // //       await onUpdate({
// // //         ...currentLocation,
// // //         coordinates: new GeoPoint(markerPosition[0], markerPosition[1])
// // //       });

// // //       setCurrentLocation(emptyLocation);
// // //       setMarkerPosition([41.1873, -73.1279]);
// // //       setIsAdding(false);
// // //       setError(null);
// // //     } catch (err) {
// // //       console.error('Error saving location:', err);
// // //       setError('Error saving location');
// // //     }
// // //   };

// // //   const handleEdit = (location) => {
// // //     setCurrentLocation(location);
// // //     setMarkerPosition([
// // //       location.coordinates._lat || location.coordinates.latitude,
// // //       location.coordinates._long || location.coordinates.longitude
// // //     ]);
// // //     setCities(STATES_DATA[location.state] || []);
// // //     setIsAdding(true);
// // //   };

// // //   const handleCancel = () => {
// // //     setCurrentLocation(emptyLocation);
// // //     setMarkerPosition([41.1873, -73.1279]);
// // //     setIsAdding(false);
// // //     setError(null);
// // //   };

// // //   return (
// // //     <div className="p-4">
// // //       <div className="mb-6">
// // //         <div className="flex justify-between items-center mb-4">
// // //           <h2 className="text-xl font-bold">Restaurant Locations</h2>
// // //           {!isAdding && (
// // //             <button
// // //               onClick={() => setIsAdding(true)}
// // //               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// // //             >
// // //               Add Location
// // //             </button>
// // //           )}
// // //         </div>

// // //         {/* Lista de ubicaciones existentes */}
// // //         {!isAdding && locations.length > 0 && (
// // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //             {locations.map((loc) => (
// // //               <div key={loc.id} className="border rounded p-4">
// // //                 <h3 className="font-bold mb-2">{loc.branchName || 'Branch'}</h3>
// // //                 <p className="text-sm text-gray-600 mb-2">
// // //                   {loc.address}<br />
// // //                   {loc.city}, {loc.state} {loc.postalCode}
// // //                 </p>
// // //                 <div className="flex space-x-2">
// // //                   <button
// // //                     onClick={() => handleEdit(loc)}
// // //                     className="text-blue-500 hover:text-blue-700"
// // //                   >
// // //                     Edit
// // //                   </button>
// // //                   <button
// // //                     onClick={() => onDelete(loc.id)}
// // //                     className="text-red-500 hover:text-red-700"
// // //                   >
// // //                     Delete
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         )}
// // //       </div>

// // //       {/* Formulario de edición */}
// // //       {isAdding && (
// // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// // //           <form onSubmit={handleSubmit} className="space-y-4">
// // //             {error && (
// // //               <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
// // //                 {error}
// // //               </div>
// // //             )}

// // //             <div className="grid grid-cols-2 gap-4">
// // //               <div className="col-span-2">
// // //                 <label className="block mb-1">Branch Name *</label>
// // //                 <input
// // //                   type="text"
// // //                   value={currentLocation.branchName || ''}
// // //                   onChange={(e) => setCurrentLocation({
// // //                     ...currentLocation,
// // //                     branchName: e.target.value
// // //                   })}
// // //                   className="w-full p-2 border rounded"
// // //                   required
// // //                 />
// // //               </div>

// // //               <div className="col-span-2">
// // //                 <label className="block mb-1">Address *</label>
// // //                 <input
// // //                   type="text"
// // //                   value={currentLocation.address}
// // //                   onChange={(e) => setCurrentLocation({
// // //                     ...currentLocation,
// // //                     address: e.target.value
// // //                   })}
// // //                   className="w-full p-2 border rounded"
// // //                   required
// // //                 />
// // //               </div>

// // //               <div>
// // //                 <label className="block mb-1">State *</label>
// // //                 <select
// // //                   value={currentLocation.state}
// // //                   onChange={(e) => handleStateChange(e.target.value)}
// // //                   className="w-full p-2 border rounded"
// // //                   required
// // //                 >
// // //                   <option value="">Select State</option>
// // //                   {Object.keys(STATES_DATA).map((state) => (
// // //                     <option key={state} value={state}>
// // //                       {state}
// // //                     </option>
// // //                   ))}
// // //                 </select>
// // //               </div>

// // //               <div>
// // //                 <label className="block mb-1">City *</label>
// // //                 <select
// // //                   value={currentLocation.city}
// // //                   onChange={(e) => setCurrentLocation({
// // //                     ...currentLocation,
// // //                     city: e.target.value
// // //                   })}
// // //                   className="w-full p-2 border rounded"
// // //                   required
// // //                   disabled={!currentLocation.state}
// // //                 >
// // //                   <option value="">Select City</option>
// // //                   {cities.map((city) => (
// // //                     <option key={city} value={city}>
// // //                       {city}
// // //                     </option>
// // //                   ))}
// // //                 </select>
// // //               </div>

// // //               <div>
// // //                 <label className="block mb-1">Postal Code</label>
// // //                 <input
// // //                   type="text"
// // //                   value={currentLocation.postalCode}
// // //                   onChange={(e) => setCurrentLocation({
// // //                     ...currentLocation,
// // //                     postalCode: e.target.value
// // //                   })}
// // //                   className="w-full p-2 border rounded"
// // //                   placeholder="12345"
// // //                 />
// // //               </div>

// // //               <div>
// // //                 <label className="block mb-1">Coordinates</label>
// // //                 <input
// // //                   type="text"
// // //                   value={`${markerPosition[0].toFixed(6)}, ${markerPosition[1].toFixed(6)}`}
// // //                   className="w-full p-2 border rounded bg-gray-50"
// // //                   readOnly
// // //                 />
// // //               </div>
// // //             </div>

// // //             <div className="flex justify-end space-x-2 pt-4">
// // //               <button
// // //                 type="button"
// // //                 onClick={handleCancel}
// // //                 className="px-4 py-2 text-gray-600 hover:text-gray-800"
// // //               >
// // //                 Cancel
// // //               </button>
// // //               <button
// // //                 type="submit"
// // //                 className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
// // //               >
// // //                 {currentLocation.id ? 'Update Location' : 'Add Location'}
// // //               </button>
// // //             </div>
// // //           </form>

// // //           {/* Mapa */}
// // //           <div className="h-[600px] rounded border">
// // //             <MapContainer
// // //               center={markerPosition}
// // //               zoom={13}
// // //               style={{ height: '100%', width: '100%' }}
// // //             >
// // //               <TileLayer
// // //                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// // //                 attribution='&copy; OpenStreetMap contributors'
// // //               />
// // //               <LocationPicker 
// // //                 position={markerPosition}
// // //                 onPositionChange={handlePositionChange}
// // //               />
// // //             </MapContainer>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default LocationManager;


// // import React, { useState, useEffect, useRef } from 'react';
// // import { GeoPoint } from 'firebase/firestore';
// // import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from 'react-leaflet';
// // import 'leaflet/dist/leaflet.css';
// // import L from 'leaflet';

// // // Fix default marker icon
// // delete L.Icon.Default.prototype._getIconUrl;
// // L.Icon.Default.mergeOptions({
// //   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
// //   iconUrl: require('leaflet/dist/images/marker-icon.png'),
// //   shadowUrl: require('leaflet/dist/images/marker-shadow.png')
// // });

// // // Map center updater component
// // const MapUpdater = ({ center }) => {
// //   const map = useMap();
// //   useEffect(() => {
// //     if (center) {
// //       map.setView(center, 13);
// //     }
// //   }, [center, map]);
// //   return null;
// // };

// // // Location picker component
// // const LocationPicker = ({ position, onPositionChange }) => {
// //   useMapEvents({
// //     click(e) {
// //       onPositionChange([e.latlng.lat, e.latlng.lng]);
// //     },
// //   });
// //   return position ? <Marker position={position} /> : null;
// // };

// // const LocationManager = ({ locations = [], onUpdate, onDelete }) => {
// //   const [isAdding, setIsAdding] = useState(false);
// //   const [error, setError] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const [states, setStates] = useState([]);
// //   const [cities, setCities] = useState([]);
// //   const mapRef = useRef(null);

// //   const emptyLocation = {
// //     id: null,
// //     branchName: '',
// //     address: '',
// //     city: '',
// //     state: '',
// //     postalCode: '',
// //     coordinates: new GeoPoint(41.1873, -73.1279)
// //   };

// //   const [currentLocation, setCurrentLocation] = useState(emptyLocation);
// //   const [markerPosition, setMarkerPosition] = useState([41.1873, -73.1279]);

// //   // Fetch states on component mount
// //   useEffect(() => {
// //     const fetchStates = async () => {
// //       try {
// //         setLoading(true);
// //         const response = await fetch('https://api.census.gov/data/2019/pep/population?get=NAME&for=state:*');
// //         const data = await response.json();
// //         // Transform census data to our format
// //         const statesList = data.slice(1).map(state => ({
// //           name: state[0],
// //           id: state[1]
// //         })).sort((a, b) => a.name.localeCompare(b.name));
// //         setStates(statesList);
// //       } catch (err) {
// //         console.error('Error fetching states:', err);
// //         setError('Error loading states. Please try again.');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchStates();
// //   }, []);

// //   // Fetch cities when state changes
// //   const handleStateChange = async (stateName) => {
// //     try {
// //       setLoading(true);
// //       const state = states.find(s => s.name === stateName);
// //       if (!state) return;

// //       const response = await fetch(
// //         `https://api.census.gov/data/2019/pep/population?get=NAME&for=place:*&in=state:${state.id}`
// //       );
// //       const data = await response.json();
      
// //       // Transform census data to our format (remove "city" and "CDP" suffixes)
// //       const citiesList = data.slice(1)
// //         .map(city => city[0].replace(' city', '').replace(' CDP', ''))
// //         .sort();

// //       setCities(citiesList);
// //       setCurrentLocation(prev => ({
// //         ...prev,
// //         state: stateName,
// //         city: ''
// //       }));
// //     } catch (err) {
// //       console.error('Error fetching cities:', err);
// //       setError('Error loading cities. Please try again.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Geocode location using OpenStreetMap Nominatim
// //   const geocodeLocation = async (address, city, state) => {
// //     try {
// //       const query = encodeURIComponent(`${address}, ${city}, ${state}, USA`);
// //       const response = await fetch(
// //         `https://nominatim.openstreetmap.org/search?format=json&q=${query}&limit=1`
// //       );
// //       const data = await response.json();
      
// //       if (data && data[0]) {
// //         return {
// //           lat: parseFloat(data[0].lat),
// //           lng: parseFloat(data[0].lon)
// //         };
// //       }
// //       return null;
// //     } catch (err) {
// //       console.error('Geocoding error:', err);
// //       return null;
// //     }
// //   };

// //   // Handle city selection
// //   const handleCityChange = async (cityName) => {
// //     try {
// //       setLoading(true);
// //       const geoData = await geocodeLocation('', cityName, currentLocation.state);
      
// //       if (geoData) {
// //         const newPosition = [geoData.lat, geoData.lng];
// //         setMarkerPosition(newPosition);
// //         setCurrentLocation(prev => ({
// //           ...prev,
// //           city: cityName,
// //           coordinates: new GeoPoint(geoData.lat, geoData.lng)
// //         }));
// //       }
// //     } catch (err) {
// //       console.error('Error updating city location:', err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Handle address change
// //   const handleAddressChange = async (address) => {
// //     setCurrentLocation(prev => ({
// //       ...prev,
// //       address
// //     }));

// //     if (address && currentLocation.city && currentLocation.state) {
// //       try {
// //         setLoading(true);
// //         const geoData = await geocodeLocation(
// //           address,
// //           currentLocation.city,
// //           currentLocation.state
// //         );

// //         if (geoData) {
// //           const newPosition = [geoData.lat, geoData.lng];
// //           setMarkerPosition(newPosition);
// //           setCurrentLocation(prev => ({
// //             ...prev,
// //             coordinates: new GeoPoint(geoData.lat, geoData.lng)
// //           }));
// //         }
// //       } catch (err) {
// //         console.error('Error geocoding address:', err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       if (!currentLocation.branchName || !currentLocation.address || !currentLocation.city || !currentLocation.state) {
// //         setError('Please fill all required fields');
// //         return;
// //       }

// //       const locationToSave = {
// //         ...currentLocation,
// //         coordinates: new GeoPoint(markerPosition[0], markerPosition[1])
// //       };

// //       await onUpdate(locationToSave);
// //       setCurrentLocation(emptyLocation);
// //       setMarkerPosition([41.1873, -73.1279]);
// //       setIsAdding(false);
// //       setError(null);
// //     } catch (err) {
// //       console.error('Error saving location:', err);
// //       setError('Error saving location');
// //     }
// //   };

// //   const handleEdit = (location) => {
// //     setCurrentLocation(location);
// //     setMarkerPosition([
// //       location.coordinates._lat || location.coordinates.latitude,
// //       location.coordinates._long || location.coordinates.longitude
// //     ]);
// //     handleStateChange(location.state);
// //     setIsAdding(true);
// //   };

// //   return (
// //     <div className="p-4">
// //       {/* Header and locations list */}
// //       <div className="mb-6">
// //         <div className="flex justify-between items-center mb-4">
// //           <h2 className="text-xl font-bold">Restaurant Locations</h2>
// //           {!isAdding && (
// //             <button
// //               onClick={() => setIsAdding(true)}
// //               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// //             >
// //               Add Location
// //             </button>
// //           )}
// //         </div>

// //         {/* Existing locations */}
// //         {!isAdding && locations.length > 0 && (
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //             {locations.map((loc) => (
// //               <div key={loc.id} className="border rounded p-4">
// //                 <h3 className="font-bold mb-2">{loc.branchName}</h3>
// //                 <p className="text-sm text-gray-600 mb-2">
// //                   {loc.address}<br />
// //                   {loc.city}, {loc.state} {loc.postalCode}
// //                 </p>
// //                 <div className="flex space-x-2">
// //                   <button
// //                     onClick={() => handleEdit(loc)}
// //                     className="text-blue-500 hover:text-blue-700"
// //                   >
// //                     Edit
// //                   </button>
// //                   <button
// //                     onClick={() => onDelete(loc.id)}
// //                     className="text-red-500 hover:text-red-700"
// //                   >
// //                     Delete
// //                   </button>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>

// //       {/* Edit form */}
// //       {isAdding && (
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// //           <form onSubmit={handleSubmit} className="space-y-4">
// //             {error && (
// //               <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
// //                 {error}
// //               </div>
// //             )}

// //             <div className="grid grid-cols-1 gap-4">
// //               <div>
// //                 <label className="block mb-1">Branch Name *</label>
// //                 <input
// //                   type="text"
// //                   value={currentLocation.branchName}
// //                   onChange={(e) => setCurrentLocation(prev => ({
// //                     ...prev,
// //                     branchName: e.target.value
// //                   }))}
// //                   className="w-full p-2 border rounded"
// //                   placeholder="Main Branch"
// //                   required
// //                 />
// //               </div>

// //               <div>
// //                 <label className="block mb-1">State *</label>
// //                 <select
// //                   value={currentLocation.state}
// //                   onChange={(e) => handleStateChange(e.target.value)}
// //                   className="w-full p-2 border rounded"
// //                   required
// //                   disabled={loading}
// //                 >
// //                   <option value="">Select State</option>
// //                   {states.map((state) => (
// //                     <option key={state.id} value={state.name}>
// //                       {state.name}
// //                     </option>
// //                   ))}
// //                 </select>
// //               </div>

// //               <div>
// //                 <label className="block mb-1">City *</label>
// //                 <select
// //                   value={currentLocation.city}
// //                   onChange={(e) => handleCityChange(e.target.value)}
// //                   className="w-full p-2 border rounded"
// //                   required
// //                   disabled={!currentLocation.state || loading}
// //                 >
// //                   <option value="">Select City</option>
// //                   {cities.map((city, index) => (
// //                     <option key={index} value={city}>
// //                       {city}
// //                     </option>
// //                   ))}
// //                 </select>
// //               </div>

// //               <div>
// //                 <label className="block mb-1">Address *</label>
// //                 <input
// //                   type="text"
// //                   value={currentLocation.address}
// //                   onChange={(e) => handleAddressChange(e.target.value)}
// //                   className="w-full p-2 border rounded"
// //                   placeholder="1234 Main St"
// //                   required
// //                   disabled={!currentLocation.city}
// //                 />
// //               </div>

// //               <div>
// //                 <label className="block mb-1">Postal Code</label>
// //                 <input
// //                   type="text"
// //                   value={currentLocation.postalCode}
// //                   onChange={(e) => setCurrentLocation(prev => ({
// //                     ...prev,
// //                     postalCode: e.target.value
// //                   }))}
// //                   className="w-full p-2 border rounded"
// //                   placeholder="12345"
// //                 />
// //               </div>
// //             </div>

// //             <div className="flex justify-end space-x-2">
// //               <button
// //                 type="button"
// //                 onClick={() => {
// //                   setIsAdding(false);
// //                   setCurrentLocation(emptyLocation);
// //                 }}
// //                 className="px-4 py-2 text-gray-600 hover:text-gray-800"
// //               >
// //                 Cancel
// //               </button>
// //               <button
// //                 type="submit"
// //                 className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
// //                 disabled={loading}
// //               >
// //                 {currentLocation.id ? 'Update Location' : 'Add Location'}
// //               </button>
// //             </div>
// //           </form>

// //           {/* Map */}
// //           <div className="h-[600px] rounded border">
// //             <MapContainer
// //               center={markerPosition}
// //               zoom={13}
// //               style={{ height: '100%', width: '100%' }}
// //               ref={mapRef}
// //             >
// //               <TileLayer
// //                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// //                 attribution='&copy; OpenStreetMap contributors'
// //               />
// //               <LocationPicker 
// //                 position={markerPosition}
// //                 onPositionChange={setMarkerPosition}
// //               />
// //               <MapUpdater center={markerPosition} />
// //             </MapContainer>
// //           </div>
// //         </div>
// //       )}

// //       {/* Loading overlay */}
// //       {loading && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
// //           <div className="bg-white p-4 rounded-lg">
// //             <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
// //             <p className="mt-2">Loading...</p>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default LocationManager;




// import React, { useState, useEffect, useRef } from 'react';
// import { GeoPoint } from 'firebase/firestore';
// import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// // Fix default marker icon
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png')
// });

// // Map center updater component
// const MapUpdater = ({ center }) => {
//   const map = useMap();
//   useEffect(() => {
//     if (center) {
//       map.setView(center, 13);
//     }
//   }, [center, map]);
//   return null;
// };

// // Location picker component
// const LocationPicker = ({ position, onPositionChange }) => {
//   useMapEvents({
//     click(e) {
//       onPositionChange([e.latlng.lat, e.latlng.lng]);
//     },
//   });
//   return position ? <Marker position={position} /> : null;
// };

// const LocationManager = ({ locations = [], onUpdate, onDelete }) => {
//   const [isAdding, setIsAdding] = useState(false);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [states, setStates] = useState([]);
//   const [cities, setCities] = useState([]);
//   const mapRef = useRef(null);

//   const emptyLocation = {
//     id: null,
//     branchName: '',
//     address: '',
//     city: '',
//     state: '',
//     postalCode: '',
//     coordinates: new GeoPoint(41.1873, -73.1279)
//   };

//   const [currentLocation, setCurrentLocation] = useState(emptyLocation);
//   const [markerPosition, setMarkerPosition] = useState([41.1873, -73.1279]);

//   // Fetch states on component mount
//   useEffect(() => {
//     const fetchStates = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch('https://api.census.gov/data/2019/pep/population?get=NAME&for=state:*');
//         const data = await response.json();
//         // Transform census data to our format
//         const statesList = data.slice(1).map(state => ({
//           name: state[0],
//           id: state[1]
//         })).sort((a, b) => a.name.localeCompare(b.name));
//         setStates(statesList);
//       } catch (err) {
//         console.error('Error fetching states:', err);
//         setError('Error loading states. Please try again.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStates();
//   }, []);

//   // Fetch cities when state changes
//   const handleStateChange = async (stateName) => {
//     try {
//       setLoading(true);
//       const state = states.find(s => s.name === stateName);
//       if (!state) return;

//       const response = await fetch(
//         `https://api.census.gov/data/2019/pep/population?get=NAME&for=place:*&in=state:${state.id}`
//       );
//       const data = await response.json();
      
//       // Transform census data to our format (remove "city" and "CDP" suffixes)
//       const citiesList = data.slice(1)
//         .map(city => city[0].replace(' city', '').replace(' CDP', ''))
//         .sort();

//       setCities(citiesList);
//       setCurrentLocation(prev => ({
//         ...prev,
//         state: stateName,
//         city: ''
//       }));
//     } catch (err) {
//       console.error('Error fetching cities:', err);
//       setError('Error loading cities. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Geocode location using OpenStreetMap Nominatim
//   const geocodeLocation = async (address, city, state) => {
//     try {
//       const query = encodeURIComponent(`${address}, ${city}, ${state}, USA`);
//       const response = await fetch(
//         `https://nominatim.openstreetmap.org/search?format=json&q=${query}&limit=1`
//       );
//       const data = await response.json();
      
//       if (data && data[0]) {
//         return {
//           lat: parseFloat(data[0].lat),
//           lng: parseFloat(data[0].lon)
//         };
//       }
//       return null;
//     } catch (err) {
//       console.error('Geocoding error:', err);
//       return null;
//     }
//   };

//   // Handle city selection
//   const handleCityChange = async (cityName) => {
//     try {
//       setLoading(true);
//       const geoData = await geocodeLocation('', cityName, currentLocation.state);
      
//       if (geoData) {
//         const newPosition = [geoData.lat, geoData.lng];
//         setMarkerPosition(newPosition);
//         setCurrentLocation(prev => ({
//           ...prev,
//           city: cityName,
//           coordinates: new GeoPoint(geoData.lat, geoData.lng)
//         }));
//       }
//     } catch (err) {
//       console.error('Error updating city location:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle address change
//   const handleAddressChange = async (address) => {
//     setCurrentLocation(prev => ({
//       ...prev,
//       address
//     }));

//     if (address && currentLocation.city && currentLocation.state) {
//       try {
//         setLoading(true);
//         const geoData = await geocodeLocation(
//           address,
//           currentLocation.city,
//           currentLocation.state
//         );

//         if (geoData) {
//           const newPosition = [geoData.lat, geoData.lng];
//           setMarkerPosition(newPosition);
//           setCurrentLocation(prev => ({
//             ...prev,
//             coordinates: new GeoPoint(geoData.lat, geoData.lng)
//           }));
//         }
//       } catch (err) {
//         console.error('Error geocoding address:', err);
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (!currentLocation.branchName || !currentLocation.address || !currentLocation.city || !currentLocation.state) {
//         setError('Please fill all required fields');
//         return;
//       }

//       const locationToSave = {
//         ...currentLocation,
//         coordinates: new GeoPoint(markerPosition[0], markerPosition[1])
//       };

//       await onUpdate(locationToSave);
//       setCurrentLocation(emptyLocation);
//       setMarkerPosition([41.1873, -73.1279]);
//       setIsAdding(false);
//       setError(null);
//     } catch (err) {
//       console.error('Error saving location:', err);
//       setError('Error saving location');
//     }
//   };

//   const handleEdit = (location) => {
//     if (!location || !location.coordinates) {
//       console.error('Invalid location data:', location);
//       return;
//     }

//     // Extract coordinates correctly regardless of the GeoPoint format
//     const lat = location.coordinates._lat || location.coordinates.latitude;
//     const lng = location.coordinates._long || location.coordinates.longitude;

//     if (!lat || !lng) {
//       console.error('Invalid coordinates:', location.coordinates);
//       return;
//     }

//     setCurrentLocation(location);
//     setMarkerPosition([lat, lng]);
//     handleStateChange(location.state);
//     setIsAdding(true);
//   };

//   const handleDelete = async (locationId) => {
//     if (!locationId) {
//       console.error('No location ID provided for deletion');
//       return;
//     }
    
//     try {
//       await onDelete(locationId);
//     } catch (err) {
//       console.error('Error during deletion:', err);
//       setError('Error deleting location');
//     }
//   };

//   return (
//     <div className="p-4">
//       {/* Header and locations list */}
//       <div className="mb-6">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-bold">Restaurant Locations</h2>
//           {!isAdding && (
//             <button
//               onClick={() => {
//                 setIsAdding(true);
//                 setCurrentLocation(emptyLocation);
//                 setMarkerPosition([41.1873, -73.1279]);
//               }}
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//             >
//               Add Location
//             </button>
//           )}
//         </div>

//         {/* Existing locations */}
//         {!isAdding && locations && locations.length > 0 && (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {locations.map((loc) => (
//               <div key={loc.id || Math.random().toString(36)} className="border rounded p-4">
//                 <h3 className="font-bold mb-2">{loc.branchName}</h3>
//                 <p className="text-sm text-gray-600 mb-2">
//                   {loc.address}<br />
//                   {loc.city}, {loc.state} {loc.postalCode}
//                 </p>
//                 <div className="flex space-x-2">
//                   <button
//                     onClick={() => handleEdit(loc)}
//                     className="text-blue-500 hover:text-blue-700"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(loc.id)}
//                     className="text-red-500 hover:text-red-700"
//                     disabled={!loc.id}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Edit form */}
//       {isAdding && (
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           <form onSubmit={handleSubmit} className="space-y-4">
//             {error && (
//               <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
//                 {error}
//               </div>
//             )}

//             <div className="grid grid-cols-1 gap-4">
//               <div>
//                 <label className="block mb-1">Branch Name *</label>
//                 <input
//                   type="text"
//                   value={currentLocation.branchName}
//                   onChange={(e) => setCurrentLocation(prev => ({
//                     ...prev,
//                     branchName: e.target.value
//                   }))}
//                   className="w-full p-2 border rounded"
//                   placeholder="Main Branch"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1">State *</label>
//                 <select
//                   value={currentLocation.state}
//                   onChange={(e) => handleStateChange(e.target.value)}
//                   className="w-full p-2 border rounded"
//                   required
//                   disabled={loading}
//                 >
//                   <option value="">Select State</option>
//                   {states.map((state) => (
//                     <option key={state.id} value={state.name}>
//                       {state.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="block mb-1">City *</label>
//                 <select
//                   value={currentLocation.city}
//                   onChange={(e) => handleCityChange(e.target.value)}
//                   className="w-full p-2 border rounded"
//                   required
//                   disabled={!currentLocation.state || loading}
//                 >
//                   <option value="">Select City</option>
//                   {cities.map((city, index) => (
//                     <option key={index} value={city}>
//                       {city}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="block mb-1">Address *</label>
//                 <input
//                   type="text"
//                   value={currentLocation.address}
//                   onChange={(e) => handleAddressChange(e.target.value)}
//                   className="w-full p-2 border rounded"
//                   placeholder="1234 Main St"
//                   required
//                   disabled={!currentLocation.city}
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1">Postal Code</label>
//                 <input
//                   type="text"
//                   value={currentLocation.postalCode}
//                   onChange={(e) => setCurrentLocation(prev => ({
//                     ...prev,
//                     postalCode: e.target.value
//                   }))}
//                   className="w-full p-2 border rounded"
//                   placeholder="12345"
//                 />
//               </div>
//             </div>

//             <div className="flex justify-end space-x-2">
//               <button
//                 type="button"
//                 onClick={() => {
//                   setIsAdding(false);
//                   setCurrentLocation(emptyLocation);
//                   setError(null);
//                 }}
//                 className="px-4 py-2 text-gray-600 hover:text-gray-800"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//                 disabled={loading}
//               >
//                 {currentLocation.id ? 'Update Location' : 'Add Location'}
//               </button>
//             </div>
//           </form>

//           {/* Map */}
//           <div className="h-[600px] rounded border">
//             <MapContainer
//               center={markerPosition}
//               zoom={13}
//               style={{ height: '100%', width: '100%' }}
//               ref={mapRef}
//             >
//               <TileLayer
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 attribution='&copy; OpenStreetMap contributors'
//               />
//               <LocationPicker 
//                 position={markerPosition}
//                 onPositionChange={setMarkerPosition}
//               />
//               <MapUpdater center={markerPosition} />
//             </MapContainer>
//           </div>
//         </div>
//       )}

//       {/* Loading overlay */}
//       {loading && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-4 rounded-lg">
//             <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
//             <p className="mt-2">Loading...</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LocationManager;


import React, { useState, useEffect, useRef } from 'react';
import { GeoPoint } from 'firebase/firestore';
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

// Map center updater component
const MapUpdater = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, 13);
    }
  }, [center, map]);
  return null;
};

// Location picker component
const LocationPicker = ({ position, onPositionChange }) => {
  useMapEvents({
    click(e) {
      onPositionChange([e.latlng.lat, e.latlng.lng]);
    },
  });
  return position ? <Marker position={position} /> : null;
};

const LocationManager = ({ locations = [], onUpdate, onDelete }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const mapRef = useRef(null);

  const emptyLocation = {
    branchName: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    coordinates: new GeoPoint(41.1873, -73.1279)
  };

  const [currentLocation, setCurrentLocation] = useState(emptyLocation);
  const [markerPosition, setMarkerPosition] = useState([41.1873, -73.1279]);

  // Fetch states on component mount
  useEffect(() => {
    const fetchStates = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.census.gov/data/2019/pep/population?get=NAME&for=state:*');
        const data = await response.json();
        // Transform census data to our format
        const statesList = data.slice(1).map(state => ({
          name: state[0],
          id: state[1]
        })).sort((a, b) => a.name.localeCompare(b.name));
        setStates(statesList);
      } catch (err) {
        console.error('Error fetching states:', err);
        setError('Error loading states. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchStates();
  }, []);

  // Fetch cities when state changes
  const handleStateChange = async (stateName) => {
    try {
      setLoading(true);
      const state = states.find(s => s.name === stateName);
      if (!state) return;

      const response = await fetch(
        `https://api.census.gov/data/2019/pep/population?get=NAME&for=place:*&in=state:${state.id}`
      );
      const data = await response.json();
      
      // Transform census data to our format (remove "city" and "CDP" suffixes)
      const citiesList = data.slice(1)
        .map(city => city[0].replace(' city', '').replace(' CDP', ''))
        .sort();

      setCities(citiesList);
      setCurrentLocation(prev => ({
        ...prev,
        state: stateName,
        city: ''
      }));
    } catch (err) {
      console.error('Error fetching cities:', err);
      setError('Error loading cities. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Geocode location using OpenStreetMap Nominatim
  const geocodeLocation = async (address, city, state) => {
    try {
      const query = encodeURIComponent(`${address}, ${city}, ${state}, USA`);
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${query}&limit=1`
      );
      const data = await response.json();
      
      if (data && data[0]) {
        return {
          lat: parseFloat(data[0].lat),
          lng: parseFloat(data[0].lon)
        };
      }
      return null;
    } catch (err) {
      console.error('Geocoding error:', err);
      return null;
    }
  };

  // Handle city selection
  const handleCityChange = async (cityName) => {
    try {
      setLoading(true);
      const geoData = await geocodeLocation('', cityName, currentLocation.state);
      
      if (geoData) {
        const newPosition = [geoData.lat, geoData.lng];
        setMarkerPosition(newPosition);
        setCurrentLocation(prev => ({
          ...prev,
          city: cityName,
          coordinates: new GeoPoint(geoData.lat, geoData.lng)
        }));
      }
    } catch (err) {
      console.error('Error updating city location:', err);
    } finally {
      setLoading(false);
    }
  };

  // Handle address change
  const handleAddressChange = async (address) => {
    setCurrentLocation(prev => ({
      ...prev,
      address
    }));

    if (address && currentLocation.city && currentLocation.state) {
      try {
        setLoading(true);
        const geoData = await geocodeLocation(
          address,
          currentLocation.city,
          currentLocation.state
        );

        if (geoData) {
          const newPosition = [geoData.lat, geoData.lng];
          setMarkerPosition(newPosition);
          setCurrentLocation(prev => ({
            ...prev,
            coordinates: new GeoPoint(geoData.lat, geoData.lng)
          }));
        }
      } catch (err) {
        console.error('Error geocoding address:', err);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!currentLocation.branchName || !currentLocation.address || !currentLocation.city || !currentLocation.state) {
        setError('Please fill all required fields');
        return;
      }

      const locationToSave = {...currentLocation};
      if (!locationToSave.id) {
        delete locationToSave.id; // Eliminar el id si es null o undefined para que Firestore lo genere
      }

      locationToSave.coordinates = new GeoPoint(markerPosition[0], markerPosition[1]);

      await onUpdate(locationToSave);
      setCurrentLocation(emptyLocation);
      setMarkerPosition([41.1873, -73.1279]);
      setIsAdding(false);
      setError(null);
    } catch (err) {
      console.error('Error saving location:', err);
      setError('Error saving location');
    }
  };

  const handleEdit = (location) => {
    if (!location) return;
    
    const lat = location.coordinates._lat || location.coordinates.latitude;
    const lng = location.coordinates._long || location.coordinates.longitude;

    setCurrentLocation(location);
    setMarkerPosition([lat, lng]);
    handleStateChange(location.state);
    setIsAdding(true);
  };

  return (
    <div className="p-4">
      {/* Header and locations list */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Restaurant Locations</h2>
          {!isAdding && (
            <button
              onClick={() => {
                setIsAdding(true);
                setCurrentLocation(emptyLocation);
                setMarkerPosition([41.1873, -73.1279]);
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Location
            </button>
          )}
        </div>

        {/* Existing locations */}
        {!isAdding && locations && locations.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {locations.map((loc) => (
              <div key={loc.id} className="border rounded p-4">
                <h3 className="font-bold mb-2">{loc.branchName}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {loc.address}<br />
                  {loc.city}, {loc.state} {loc.postalCode}
                </p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(loc)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(loc.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Edit form */}
      {isAdding && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block mb-1">Branch Name *</label>
                <input
                  type="text"
                  value={currentLocation.branchName}
                  onChange={(e) => setCurrentLocation(prev => ({
                    ...prev,
                    branchName: e.target.value
                  }))}
                  className="w-full p-2 border rounded"
                  placeholder="Main Branch"
                  required
                />
              </div>

              <div>
                <label className="block mb-1">State *</label>
                <select
                  value={currentLocation.state}
                  onChange={(e) => handleStateChange(e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                  disabled={loading}
                >
                  <option value="">Select State</option>
                  {states.map((state) => (
                    <option key={state.id} value={state.name}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-1">City *</label>
                <select
                  value={currentLocation.city}
                  onChange={(e) => handleCityChange(e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                  disabled={!currentLocation.state || loading}
                >
                  <option value="">Select City</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-1">Address *</label>
                <input
                  type="text"
                  value={currentLocation.address}
                  onChange={(e) => handleAddressChange(e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="1234 Main St"
                  required
                  disabled={!currentLocation.city}
                />
              </div>

              <div>
                <label className="block mb-1">Postal Code</label>
                <input
                  type="text"
                  value={currentLocation.postalCode}
                  onChange={(e) => setCurrentLocation(prev => ({
                    ...prev,
                    postalCode: e.target.value
                  }))}
                  className="w-full p-2 border rounded"
                  placeholder="12345"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => {
                  setIsAdding(false);
                  setCurrentLocation(emptyLocation);
                  setError(null);
                }}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                disabled={loading}
              >
                {currentLocation.id ? 'Update Location' : 'Add Location'}
              </button>
            </div>
          </form>

          {/* Map */}
          <div className="h-[600px] rounded border">
            <MapContainer
              center={markerPosition}
              zoom={13}
              style={{ height: '100%', width: '100%' }}
              ref={mapRef}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; OpenStreetMap contributors'
              />
              <LocationPicker 
                position={markerPosition}
                onPositionChange={setMarkerPosition}
              />
              <MapUpdater center={markerPosition} />
            </MapContainer>
          </div>
        </div>
      )}

      {/* Loading overlay */}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-2">Loading...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationManager;