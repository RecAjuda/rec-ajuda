import { ModalWeather } from "../../pages/map/ModalWeather";
import { ModalRiskType } from "./ModalRiskType";
import { PointMapComponent } from "../../components/PointMap";
import { GeoLocation } from "../../components/PointMap/type";

const DEFAULT_MAP_ZOOM = 17;
const geoLocations: GeoLocation[] = [
  {
    latitude: -8.001247,
    longitude: -34.927187,
    description: "Abrigo",
    color: "green",
  },
  {
    latitude: -8.001733,
    longitude: -34.928811,
    description: "Ponto de Apoio",
    color: "green",
  },
  {
    latitude: -8.000799,
    longitude: -34.929713,
    description: "Abrigo",
    color: "green",
  },
  {
    latitude: -8.000968,
    longitude: -34.928444,
    description: "Ponto de Apoio",
    color: "green",
  },
  {
    latitude: -8.001454,
    longitude: -34.928962,
    description: "Ponto de Apoio",
    color: "green",
  },
  {
    latitude: -8.001436,
    longitude: -34.928538,
    description: "Abrigo",
    color: "green",
  },
  {
    latitude: -8.001845,
    longitude: -34.929593,
    description: "Abrigo",
    color: "green",
  },
  {
    latitude: -8.002312,
    longitude: -34.932288,
    description: "Ponto de Apoio",
    color: "green",
  },
  {
    latitude: -8.002433,
    longitude: -34.932709,
    description: "Abrigo",
    color: "green",
  },
];

const CENTER_MAP: [number, number] = [-8.002312, -34.932288];

export const RiskPointMap = () => {
  return (
    <>
      <div className="z-0 relative h-screen w-screen flex items-center justify-content flex-col text-black">
        <PointMapComponent
          centerMap={CENTER_MAP}
          zoom={DEFAULT_MAP_ZOOM}
          points={geoLocations}
        ></PointMapComponent>
      </div>
      <ModalWeather mmRain={26} degrees={31} windMileage={20} />
      <ModalRiskType />
    </>
  );
};
