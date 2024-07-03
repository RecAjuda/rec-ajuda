import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MapProps } from "./type";
//useMap
//{15.5}/{-8.0410559}/{-34.9109886}
export const MapComponent = ({
  scrollMap,
  popUps,
  centerMap,
  zoom,
}: MapProps) => {
  return (
    <>
      <MapContainer
        className="h-screen w-screen"
        scrollWheelZoom={scrollMap}
        center={centerMap}
        zoom={zoom}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {popUps.map((popUp) => (
          <Marker position={popUp.geoCode}>
            <Popup>{popUp.popUpContent}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};
