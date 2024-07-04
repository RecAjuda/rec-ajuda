import { HeaderProps } from "./type";
import { Menu } from "lucide-react";

export const Header = ({ altImage, src }: HeaderProps) => {
  return (
    <div className="w-screen flex items-center px-3">
      <div className="text-blue-800 items-center flex h-7 w-7">
        <button>
          <Menu />
        </button>
      </div>
      <div className="flex-grow flex justify-end h-12 w-24">
        <img src={src} alt={altImage} />
      </div>
    </div>
  );
};
