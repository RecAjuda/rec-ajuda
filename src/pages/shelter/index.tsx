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
          street="Rua São Mateus, s/n, Iputinga"
          phone="(81) 987655-0989"
          near="3.2"
          title="Escola Municipal Diná de Oliveira"
          changedStyles
        />
        <ModalShelter
          street="Av. Pernambuco, s/n, UR 01, Cohab"
          phone="(81) 987655-0989"
          near="7.3"
          title="Escola Municipal Maria de Sampaio Lucena"
          changedStyles={false}
        />
        <ModalShelter
          street="Rua da Regeneração, 345"
          phone="(81) 987655-0989"
          near="0.2"
          title="CENTRO DE APOIO SOCIAL ESPORTIVO E CULTURAL DO IBURA"
          changedStyles
        />
        <ModalShelter
          street="R. Tucumã, 127 - Ibura"
          phone="(81) 987655-0989"
          near="8.3 "
          title="IGREJA ORAI"
          changedStyles={false}
        />
        <ModalShelter
          street="Travessa Benigno Jordão de Vasconcelos, n 41"
          phone="(81) 987655-0989"
          near="6.3"
          title="ASSOCIAÇÃO ASA BRANCA "
          changedStyles
        />
      </div>
    </div>
  );
};
