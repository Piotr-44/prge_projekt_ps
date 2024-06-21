// import React, { useState } from "react";
// import { Marker, Popup, useMapEvent } from "react-leaflet";
// import { docIcon } from "../tmp/doc_icon.png";

// function MarkerPlacement() {
//   const [position, setPosition] = useState(null);
//   const map = useMapEvent({
//     click: (e) => {
//       console.log(e.latlng);
//       setPosition(e.latlng);
//     },
//   });

//   return (
//     <>
//       {position && (
//         <Marker icon={docIcon} position={position}>
//           <Popup>
//             Nowy marker na pozycji {position.lat}, {position.lng}
//           </Popup>
//         </Marker>
//       )}
//     </>
//   );
// }

// export default MarkerPlacement;
