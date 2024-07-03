import { HeaderProps } from "./type";
import { ChevronLeft, Menu } from "lucide-react";

export const Header = ({ altImage, src }: HeaderProps) => {
  return (
    <div className="w-screen flex items-center justify-between px-3">
      <div className="flex h-7 w-7 ">
        <button>
          <ChevronLeft className="text-blue-800" />
        </button>
      </div>
      <div className="flex h-12 w-24">
        <img src={src} alt={altImage} />
      </div>
      <div className="text-blue-800 flex h-7 w-7">
        <button>
          <Menu />
        </button>
      </div>
    </div>
  );
};
