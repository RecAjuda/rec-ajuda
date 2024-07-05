import { ModalAddressProps } from "../ModalAddress/types";
import { shelterIcons } from "./types";

export const ModalAddress = ({ street, cep }: ModalAddressProps) => {
  return (
    <div className="absolute z-20 bg-white w-screen top-11 m-2 h-9 px-3 flex items-center justify-center rounded-lg">
      <div className="flex items-center justify-center w-full max-w-md">
        <div className="flex gap-1">
          <p className="font-bold text-blue-700">{street}</p>
        </div>
        <div className="flex gap-1 ml-2">
          <p className="font-bold text-blue-700">{cep}</p>
        </div>
        <div className="flex gap-1 ml-2">
          <img className="w-7 h-7" src={shelterIcons["arrow"]} />
        </div>
      </div>
    </div>
  );
};
