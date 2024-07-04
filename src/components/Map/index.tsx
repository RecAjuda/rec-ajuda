import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MapProps } from "./type";
import { HeatmapLayerFactory } from "@vgrid/react-leaflet-heatmap-layer";
// import HeatmapLayer from "react-leaflet-heatmap-layer-v3";
//useMap
//{15.5}/{-8.0410559}/{-34.9109886}
export const MapComponent = ({
  scrollMap,
  popUps,
  centerMap,
  zoom,
}: MapProps) => {
  const HeatmapLayer = HeatmapLayerFactory<number>();

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
            <HeatmapLayer
              fitBoundsOnLoad
              fitBoundsOnUpdate
              points={popUp.geoCode}
              radius={100}
              longitudeExtractor={() => popUp.geoCode[1]}
              latitudeExtractor={() => popUp.geoCode[0]}
              intensityExtractor={() => 10}
            />
            <Marker position={popUp.geoCode}>
              <Popup>{popUp.popUpContent}</Popup>
            </Marker>
          </>
        ))}
      </MapContainer>
    </>
  );
};
