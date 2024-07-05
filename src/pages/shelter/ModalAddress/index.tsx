import { ModalAddressProps, shelterIcons } from "./types";

export const ModalAddress = ({ street, cep }: ModalAddressProps) => {
  return (
    <div className="absolute z-10 bg-white w-screen top-11 h-9 px-3 flex items-center justify-center rounded-lg">
      <div className="flex items-center justify-center w-full max-w-md">
        <div className="flex">
          <p className="font-bold text-[10px] text-blue-800">{street},</p>
        </div>
        <div className="flex ml-1">
          <p className="font-bold text-[10px] text-blue-800">{cep}</p>
        </div>
        <div className="flex ml-1">
          <img className="w-3 h-9" src={shelterIcons["arrow"]} />
        </div>
      </div>
    </div>
  );
};
