import { Link } from "react-router-dom";
import Arrow from "../../../assets/shelter/arrow.svg";
import { ModalShelterProps, shelterIcons } from "./types";

export const ModalShelter = ({
  street = "Rua da Regeneração, 345",
  phone = "(81) 987655-0989",
  near = "0.2",
  title = "ABRIGO DOS AMIGOS",
  changedStyles,
}: ModalShelterProps) => {
  const bgColor = changedStyles
    ? " bg-sky-700 text-white"
    : "bg-gray-300 text-sky-700";

  const colorText = changedStyles
    ? " bg-sky-700 text-white"
    : "bg-gray-300 text-sky-700";

  return (
    <div
      className={`flex gap-4 rounded-s-3xl items-center pl-5 h-16 w-[90%]  ${bgColor}`}
    >
      <div className={`flex h-10 w-10 ${colorText}`}>
        <img src={shelterIcons["shelter"]} alt="" />
      </div>
      <div className="flex flex-col w-screen">
        <div className="flex justify-between">
          <p className={`${colorText} font-semibold text-xs`}>{title}</p>
          <p className={`${colorText} font-semibold text-xs`}>{near} km</p>
        </div>
        <div className="flex gap-1">
          <p className={`${colorText} font-semibold text-xs`}>Endereço:</p>
          <p className={`${colorText} font-extralight text-xs`}>{street}</p>
        </div>
        <div className="flex gap-1">
          <p className={`${colorText} font-semibold text-xs`}>Telefone:</p>
          <p className={`${colorText} font-extralight text-xs`}>{phone}</p>
        </div>
      </div>
      <Link to="/rec-ajuda-client/">
        <img className="p-4" src={Arrow} alt={Arrow} />
      </Link>
    </div>
  );
};
