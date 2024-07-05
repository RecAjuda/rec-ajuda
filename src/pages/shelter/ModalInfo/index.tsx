import { shelterIcons } from "./types";
import { Field } from "../../../components";

export const ModalInfo = () => {
  return (
    <div className="bg-white w-screen px-3 py-2 flex flex-col items-center justify-center rounded-lg">
      <div className="flex h-30 mt-20 items-center ">
        <img className="w-26 h-26" src={shelterIcons["logo"]} alt="Logo" />
        <div className="ml-2">
          <p className="font-bold text-blue-950 text-lg">REC Ajuda</p>
          <p className="text-xs font-bold">
            Vamos encontrar o ponto de apoio mais próximo de você
          </p>
        </div>
      </div>
      <div className="mt-6 ml-20 w-screen">
        <Field
          icon={shelterIcons["search"]}
          id="fieldSearch"
          required={false}
          placeholder="Pesquisar"
          type="text"
          style="pl-8 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 placeholder-blue-500 opacity-40 "
        />
      </div>
      <div className="mb-4">
        <p className="font-bold text-blue-950 mt- text-lg">Locais Próximos</p>
      </div>
    </div>
  );
};
