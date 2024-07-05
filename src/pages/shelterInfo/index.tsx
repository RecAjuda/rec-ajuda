
import { ModalShelter } from "./ModalShelter";

export const Shelter = () => {
  return (
    <div className="flex flex-col justify-center w-screen">
      
      {/* </div> */}
      <div className="flex flex-col items-end gap-4">
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
