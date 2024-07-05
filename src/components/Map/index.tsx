import { MapContainer, TileLayer } from "react-leaflet";
import { MapProps, PopsUpProps } from "./type";
import { HeatmapLayerFactory } from "@vgrid/react-leaflet-heatmap-layer";

export const MapComponent = ({
  scrollMap,
  popUps,
  centerMap,
  zoom,
}: MapProps) => {
  const HeatmapLayer = HeatmapLayerFactory<number[]>();

  const data = popUps.map((val: PopsUpProps) => {
    return [
      val.geometry.coordinates[0],
      val.geometry.coordinates[1],
      val.properties.rating,
    ];
  });

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

        <HeatmapLayer
          fitBoundsOnLoad
          fitBoundsOnUpdate
          points={data}
          radius={20}
          longitudeExtractor={(m) => m[1]}
          latitudeExtractor={(m) => m[0]}
          intensityExtractor={() => 1}
        />
      </MapContainer>
    </>
  );
};
