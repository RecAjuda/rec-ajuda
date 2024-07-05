import { ModalWeather } from "../../pages/map/ModalWeather";
import { ModalRiskType } from "./ModalRiskType";
import { PointMapComponent } from "../../components/PointMap";
import { GeoLocation } from "../../components/PointMap/type";

const DEFAULT_MAP_ZOOM = 17;
const geoLocations: GeoLocation[] = [
  {
    latitude: -8.030336,
    longitude: -34.93478,
    openStatus : "Fechado",
    title: "Escola Municipal Diná de Oliveira",
    type : "Abrigo",
    color: "green",
  },
  {
    latitude: -8.028799,
    longitude: -34.934646,
    openStatus : "Fechado",
    title : "Escola Municipal Casarão do Barbalho",
    type: "Abrigo",
    color: "green",
  },
  {
    latitude: -8.0726561,
    longitude: -34.8865122,
    type: "Abrigo",
    openStatus: "Aberto",
    title : "Abrigo Noturno Irmã Dulce dos Pobres",
    color: "green",
  },
  {
    latitude: -8.000968,
    longitude: -34.928444,
    title :"Escola Municipal Poeta Paulo Bandeira da Cruz",
    openStatus: "Fechado",
    type: "Abrigo",
    color: "green",
  },
  {
    latitude: -8.001454,
    longitude: -34.928962,
    title: "Escola Municipal Adauto Pontes",
    openStatus: "Fechado",
    type : "Abrigo",
    color: "green",
  },
  {
    latitude: -8.121217,
    longitude: -34.934046,
    title: "CENTRO DE APOIO SOCIAL ESPORTIVO E CULTURAL DO IBURA",
    type: "Ponto de apoio",
    openStatus : "Fechado",
    color: "green",
  },
  {
    latitude: -8.127664525588713,
    longitude: -34.94966677446167,
    title: "ASSOCIAÇÃO ASA BRANCA",
    type:"Ponto de apoio",
    openStatus:"Fechado",
    color: "green",
  },
  {
    latitude: -8.065737426075472,
    longitude: -34.908335474462476,
    type: "Ponto de apoio",
    openStatus: "Fechado",
    title: "PARÓQUIA NOSSA SRA. DOS REMÉDIOS",
    color: "green",
  },
  {
    latitude: -8.0796376,
    longitude: -34.9702217,
    type: "Ponto de apoio",
    openStatus: "Fechado",
    title: "PARÓQUIA NOSSA SRA. DOS REMÉDIOS",
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
