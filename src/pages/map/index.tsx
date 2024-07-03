import { MapComponent } from "../../components";
import Logo from "../../assets/rec-ajuda-icon.svg";
import { Header } from "./Header";

export const Map = () => {
  return (
    <div id="map">
      <Header
        src={Logo}
        altImage="Logo"
        onClickBack={() => null}
        onClickMenu={() => null}
      />
      <MapComponent
        centerMap={[-8.0410559, -34.9109886]}
        scrollMap={false}
        zoom={13}
        popUps={[
          {
            geoCode: [-8.0429757, -34.9475296],
            popUpContent: "Augustinho",
          },
          {
            geoCode: [-8.0461919, -34.919971],
            popUpContent: "Davizinhuuuuuu",
          },
        ]}
      />
    </div>
  );
};
