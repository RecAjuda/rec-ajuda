import LogoRecife from "../../../assets/logo-recife.svg";

import { ModalWeatherProps, weatherIcons } from "./types";

export const ModalWeather = ({
  degrees,
  mmRain,
  windMileage,
}: ModalWeatherProps) => {
  return (
    <div className="absolute z-20 bg-white w-screen m-2 top-11 h-9 px-3 items-center justify-between flex rounded-lg ">
      <div className="flex mr-12">
        <img className="w-14 h-6" src={LogoRecife} />
      </div>
      <div className="flex gap-1">
        <div className=" flex gap-1">
          <p className="font-bold text-blue-600">{degrees}</p>
          <p className="font-bold text-blue-800">°C</p>
        </div>
        <div className=" flex gap-1 ml-2">
          <img className="w-7 h-7" src={weatherIcons["storm"]} />
          <p className="font-bold text-blue-500">{mmRain}</p>
          <p className="font-bold text-blue-700">mm</p>
        </div>
      </div>
      <div className=" flex gap-1">
        <img className="w-7 h-7" src={weatherIcons["wind"]} />
        <p className="text-blue-500">{windMileage}</p>
        <p className="text-blue-700">km/h</p>
      </div>
    </div>
  );
};
