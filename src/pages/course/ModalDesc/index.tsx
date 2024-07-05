import { courseIcons } from "./types";
import { Link } from "react-router-dom";

export const ModalDesc = () => {
    const iconLinks = [
        { key: "landslip", url: "/course/landSlip" },
        { key: "fireIcon", url: "/course/fire" },
        { key: "floodIcon", url: "/course/flood" },
        { key: "storm", url: "/course/storm" }
    ];
    return (
        <div className="bg-white w-screen h-screen flex flex-col items-center justify-center rounded-lg overflow-hidden">
            {/* Header Section */}
            <div className="flex h-1/4 items-center mt-8">
                <img className="w-20 h-20" src={courseIcons["bookIcon"]} />
                <div className="ml-2">
                    <p className="font-bold text-blue-500 text-lg mb-1">Identifique o problema!</p>
                    <p className="text-xs font-bold">Confira como agir em cada situação</p>
                </div>
            </div>

                {iconLinks.map((iconLink, index) => (
                    <Link key={index} to={iconLink.url} className="flex flex-col items-center mx-2 my-2" style={{ height: '200px', width: '300px', maxWidth: '80vw' }}>
                        <img className="w-full h-full object-contain" src={courseIcons[iconLink.key]} />
                    </Link>
                ))}

            </div>
    );
};
