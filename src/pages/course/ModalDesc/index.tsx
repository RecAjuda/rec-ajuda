import { courseIcons } from "./types";
import { Link } from "react-router-dom";

export const ModalDesc = () => {
  const iconLinks = [
    { key: "landslip", url: "/rec-ajuda-client/landSlip" },
    { key: "fireIcon", url: "/rec-ajuda-client/fire" },
    { key: "floodIcon", url: "/rec-ajuda-client/flood" },
    { key: "storm", url: "/rec-ajuda-client/storm" },
  ];
  return (
    <div className="w-screen flex flex-col items-center justify-center rounded-lg px-5">
      {/* Header Section */}
      <div className="flex h-1/4 items-center mt-11">
        <img className="w-20 h-20" src={courseIcons["bookIcon"]} />
        <div className="ml-2">
          <p className="font-bold text-blue-500 text-lg mb-1">
            Identifique o problema!
          </p>
          <p className="text-xs font-bold">
            Confira como agir em cada situação
          </p>
        </div>
      </div>

      {iconLinks.map((iconLink, index) => (
        <Link
          key={index}
          to={iconLink.url}
          className="flex flex-col items-center h-40 w-80"
        >
          <img
            className="w-full h-full object-fill"
            src={courseIcons[iconLink.key]}
          />
        </Link>
      ))}
    </div>
  );
};
