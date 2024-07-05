import { ModalWeather } from "../../pages/map/ModalWeather";
import { ModalRiskType } from "./ModalRiskType";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { PointMapComponent } from "../../components/PointMap";
import { GeoLocation } from "../../components/PointMap/type";

const DEFAULT_MAP_ZOOM = 16;
let geoLocations: GeoLocation[] = [{
    latitude: -8.001247,
    longitude: -34.927187,
    description: "tester",
    color: "green"
}];

const CENTER_MAP: [number, number] = [-8.0623551, -34.8775358]

export const RiskPointMap = () => {
    return (
        <>
            <div className="z-0 relative h-screen w-screen flex items-center justify-content flex-col text-black">
                <PointMapComponent centerMap={CENTER_MAP} zoom={DEFAULT_MAP_ZOOM} points={geoLocations}>
                </PointMapComponent>
            </div>
            <ModalWeather mmRain={26} degrees={31} windMileage={20} />
            <ModalRiskType />
        </>

    );
};
