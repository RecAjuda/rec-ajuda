import { contactIcon } from "./types";

export const ModalContact = () => {
  return (
    <div className="bg-white w-screen px-3 py-2 flex flex-col items-center justify-center rounded-lg">
      <div className="flex h-30 mt-20 items-center ">
        <img className="w-26 h-26" src={contactIcon["greenIcon"]} />
        <div className="ml-2">
          <p className="font-bold text-blue-950 text-lg mb-2">
            Está com uma emergência?{" "}
          </p>
          <p className="text-s font-bold text-blue-400 text-base">
            Veja para quem ligar!
          </p>
        </div>
      </div>

      <div
        className="bg-white rounded-lg p-4 mt-4 max-w-custom shadow-md"
        style={{ minWidth: "80vw" }}
      >
        <p className="font-bold text-lg mb-2 text-center text-blue-500">
          Serviços Básicos
        </p>
        <div className="flex flex-col">
          {/* CELPE */}
          <div className="flex justify-between mb-2">
            <div style={{ width: "300px", maxWidth: "55vw" }}>
              <p className="font-bold">CELPE</p>
            </div>
            <div>
              <p className="text-blue-500 font-bold text-xs">116</p>
            </div>
          </div>

          {/* COMPESA */}
          <div className="flex justify-between">
            <div style={{ width: "300px", maxWidth: "55vw" }}>
              <p className="font-bold">COMPESA</p>
            </div>
            <div>
              <p className="text-blue-500 font-bold text-xs">121</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-white rounded-lg p-4 mt-4 max-w-custom shadow-md"
        style={{ width: "80vw" }}
      >
        <p className="font-bold text-lg mb-2 text-center text-blue-500">
          Defesa Civil
        </p>
        <div className="flex flex-col">
          <div className="flex justify-between mb-2">
            <div style={{ width: "300px", maxWidth: "55vw" }}>
              <p className="flex-auto font-bold w-111">Recife</p>
            </div>
            <div className="w-screen flex justify-end items-center">
              <p className="text-blue-500 font-bold text-xs">0800 081 3400</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-white rounded-lg p-4 mt-4 max-w-custom shadow-md"
        style={{ width: "80vw" }}
      >
        <p className="font-bold text-lg mb-2 text-center text-blue-500">
          Emergências e Segurança
        </p>
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <div style={{ width: "300px", maxWidth: "55vw" }}>
              <p className="font-bold">SAMU</p>
            </div>
            <div>
              <p className="text-blue-500 font-bold text-xs">192</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div style={{ width: "300px", maxWidth: "55vw" }}>
              <p className="font-bold">Corpo de Bombeiros</p>
            </div>
            <div>
              <p className="text-blue-500 font-bold text-xs">193</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div style={{ width: "300px", maxWidth: "55vw" }}>
              <p className="font-bold">Polícia Militar</p>
            </div>
            <div>
              <p className="text-blue-500 font-bold text-xs">190</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div style={{ width: "300px", maxWidth: "55vw" }}>
              <p className="font-bold">Polícia Civil</p>
            </div>
            <div>
              <p className="text-blue-500 text-xs flex font-bold justify-end">
                3184-3475
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-white rounded-lg p-4 mt-4 max-w-custom shadow-md"
        style={{ minWidth: "80vw" }}
      >
        <p className="font-bold text-lg mb-2 text-center text-blue-500">
          Órgãos Governamentais
        </p>
        <div className="flex flex-col ">
          {/* CELPE */}
          <div className="flex justify-between items-center mb-2">
            <div style={{ width: "300px", maxWidth: "55vw" }}>
              <p className="font-bold ">Secretaria de Assistência Social</p>
            </div>
            <div>
              <p className="text-blue-500 font-bold text-xs">121</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
