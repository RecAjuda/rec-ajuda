import { ModalAddress } from "./ModalAddress";
import { ModalInfo } from "./ModalInfo";
import { ModalShelter } from "./ModalShelter";

export const Shelter = () => {
  return (
    <div className="flex flex-col justify-center w-screen">
      <ModalAddress street="Mirante do Paço - Tv. do Amorim" cep="50030-070" />
      {/* <div className="relative h-screen flex justify-content text-black"> */}
      <ModalInfo />
      {/* </div> */}
      <div className="flex flex-col items-end gap-4">
        <ModalShelter
          street="Rua da Regeneração, 345"
          phone="(81) 987655-0989"
          near="0.2"
          title="ABRIGO DOS AMIGOS"
          changedStyles
        />
        <ModalShelter
          street="Rua da Regeneração, 345"
          phone="(81) 987655-0989"
          near="0.2"
          title="ABRIGO DOS AMIGOS"
          changedStyles={false}
        />
        <ModalShelter
          street="Rua da Regeneração, 345"
          phone="(81) 987655-0989"
          near="0.2"
          title="ABRIGO DOS AMIGOS"
          changedStyles
        />
        <ModalShelter
          street="Rua da Regeneração, 345"
          phone="(81) 987655-0989"
          near="0.2"
          title="ABRIGO DOS AMIGOS"
          changedStyles={false}
        />
        <ModalShelter
          street="Rua da Regeneração, 345"
          phone="(81) 987655-0989"
          near="0.2"
          title="ABRIGO DOS AMIGOS"
          changedStyles
        />
      </div>
    </div>
  );
};
