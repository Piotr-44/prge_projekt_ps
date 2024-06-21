// import React, { useEffect, useState } from "react";
// import { LayersControl, MapContainer, TileLayer, GeoJSON } from "react-leaflet";
// import "./Map_employee.css";
// import "leaflet/dist/leaflet.css";
// import axios from "axios";
// import Btn_employee_list from "../tmp/list.png";
// import { Link } from "react-router-dom";
// import L from "leaflet";
// import docIcon from "../tmp/doc_icon.png";

// function Map_employee() {
//   const [pracownicy, setPracownicy] = useState(null);

//   const docIcon = new L.Icon({
//     iconUrl: docIconImage,
//     iconSize: [25, 41], // Adjust the size as needed
//     iconAnchor: [12, 41], // Adjust the anchor point as needed
//     popupAnchor: [1, -34],
//     shadowSize: [41, 41],
//   });

//   const makePopup = (feature, layer) => {
//     if (feature.properties) {
//       layer.bindPopup(
//         `<strong>${feature.properties.imie} ${feature.properties.nazwisko}</strong><br>${feature.properties.funkcja}`
//       );
//     }
//   };

//   const pointToLayer = (feature, latlng) => {
//     return L.marker(latlng, { icon: docIcon });
//   };

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Apracownicy&maxFeatures=50&outputFormat=application%2Fjson"
//         );
//         setPracownicy(response.data);
//       } catch (error) {
//         console.error("Error fetching WFS data: ", error);
//       }
//     };
//     getData();
//   }, []);

//   return (
//     <div>
//       <MapContainer center={[52.232222, 21.0]} zoom={10}>
//         <LayersControl>
//           <LayersControl.BaseLayer checked name="OSM">
//             <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//           </LayersControl.BaseLayer>
//           <LayersControl.BaseLayer name="GoogleSatelite">
//             <TileLayer url="http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}" />
//           </LayersControl.BaseLayer>
//           <LayersControl.BaseLayer name="OpenTopoMap">
//             <TileLayer url="https://tile.opentopomap.org/{z}/{x}/{y}.png" />
//           </LayersControl.BaseLayer>
//           <LayersControl.Overlay checked name="Pracownicy WFS">
//             {pracownicy && (
//               <GeoJSON
//                 data={pracownicy}
//                 pointToLayer={pointToLayer}
//                 onEachFeature={makePopup}
//               />
//             )}
//           </LayersControl.Overlay>
//         </LayersControl>
//       </MapContainer>
//       <Link to="/dashboard_employees_list">
//         <img
//           className="employee_list_icon"
//           src={Btn_employee_list}
//           alt="Employee List"
//         />
//       </Link>
//     </div>
//   );
// }

// export default Map_employee;
