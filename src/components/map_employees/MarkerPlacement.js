import L from "leaflet";
import docIconImage from "../tmp/doc_icon.png";

const docIcon = new L.Icon({
  iconUrl: docIconImage,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default docIcon;
