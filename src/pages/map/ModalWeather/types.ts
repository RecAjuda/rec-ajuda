import LogoStorm from "../../../assets/weathers/storm.svg";
import LogoWind from "../../../assets/weathers/wind.svg";

export const weatherIcons: Record<string, string> = {
  storm: LogoStorm,
  wind: LogoWind,
  // Adicione outros mapeamentos aqui
};

export type ModalWeatherProps = {
  degrees: number;
  mmRain: number;
  windMileage: number;
};
