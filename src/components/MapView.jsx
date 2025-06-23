
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const khulnaCoordinates = [22.8456, 89.5403];
const MapView = () => {
  return (
    <MapContainer  center={[22.8456, 89.5403]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
       <Marker position={khulnaCoordinates}>
        <Popup>
          You are here: <strong>Hotel Jeal,Khulna, Bangladesh</strong>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;
