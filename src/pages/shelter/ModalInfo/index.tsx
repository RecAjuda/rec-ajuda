import { shelterIcons } from "./types";
import { Field } from "../../../components";

export const ModalInfo = () => {
  return (
    <div className="w-screen flex flex-col  mt-20">
      <div className="flex h-30 mt-5 px-3 items-center ">
        <img className="w-26 h-26" src={shelterIcons["logo"]} alt="Logo" />
        <div className="ml-2">
          <p className="font-bold text-blue-950 text-lg">REC Ajuda</p>
          <p className="text-xs font-bold">
            Vamos encontrar o ponto de apoio mais próximo de você
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-6 pl-14  justify-center">
        <Field
          icon={shelterIcons["search"]}
          id="fieldSearch"
          required={false}
          placeholder="Pesquisar"
          type="text"
          style="w-screen pl-8 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 placeholder-blue-500 opacity-40"
        />
      </div>
      <div className="mb-6 flex justify-center ">
        <p className="font-bold text-blue-950 text-lg">Locais Próximos</p>
      </div>
    </div>
  );
};
