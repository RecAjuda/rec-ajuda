import { ModalAddress } from "./ModalAddress";
import { ModalInfo } from "./ModalInfo";

export const Shelter = () => {
  return (
    <div className="h-screen w-screen">
      <ModalAddress street="Mirante do Paço - Tv. do Amorim" cep="50030-070" />
      <div className="z-0 relative h-screen flex items-center justify-content flex-col text-black">
        <ModalInfo />
      </div>
    </div>
  );
};
