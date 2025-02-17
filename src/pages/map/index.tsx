import { MapComponent } from "../../components";
import { ModalWeather } from "./ModalWeather";
import { ModalRisk } from "./ModalRisk";
import { popsUps } from "./utils";

export const Map = () => {
  return (
    <div className="z-0 relative h-screen flex items-center justify-content flex-col text-black">
      <MapComponent
        centerMap={[-8.0410559, -34.9109886]}
        scrollMap={false}
        zoom={15}
        popUps={popsUps}
      />
      <ModalWeather mmRain={26} degrees={31} windMileage={20} />
      <ModalRisk />
    </div>
  );
};
