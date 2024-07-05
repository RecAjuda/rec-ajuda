import { useState } from "react";
import { shelterIcons } from "./types";

export const ModalInfo = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="absolute z-20 bg-white w-screen top-11 m-2 px-3 py-2 flex flex-col items-center justify-center rounded-lg">
            <div className="flex items-center mb-4">
                <img className="w-12 h-12" src={shelterIcons["logo"]} alt="Logo" />
                <div className="ml-2">
                    <p className="font-bold text-blue-700 mb-1 text-lg">REC Ajuda</p>
                    <p>Vamos encontrar o ponto de apoio mais próximo de você</p>
                </div>
            </div>
            <div className="mt-4 w-80 relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <img className="w-5 h-5" src={shelterIcons["search"]} alt="Search Icon" />
                </div>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Pesquisar"
                    className="pl-8 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 placeholder-blue-500 opacity-40"
                />
            </div>

            <div className="mb-4">
                <br />
                    <p className="font-bold text-blue-700 mb-1 text-lg">Locais Próximos</p>
                </div>
            </div>
    );
};
