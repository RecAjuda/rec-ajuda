import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MapProps } from "./type";
// import HeatmapLayer from "react-leaflet-heatmap-layer-v3";
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
        className="relative z-10 h-screen w-screen "
        zoomControl={false}
        scrollWheelZoom={scrollMap}
        center={centerMap}
        zoom={zoom}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {popUps.map((popUp) => (
          <>
            {/* <HeatmapLayer
              fitBoundsOnLoad
              fitBoundsOnUpdate
              points={popUp.geoCode}
              longitudeExtractor={(m) => m[1]}
              latitudeExtractor={(m) => m[0]}
              intensityExtractor={(m) => parseFloat(m[2])}
            /> */}
            <Marker position={popUp.geoCode}>
              <Popup>{popUp.popUpContent}</Popup>
            </Marker>
          </>
        ))}
      </MapContainer>
    </>
  );
};
