import { useState } from "react";
import { SideBar } from "../../../components";
import { HeaderProps } from "./type";
import { Menu } from "lucide-react";

export const Header = ({ altImage, src }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-screen flex items-center px-3">
        <div className="text-blue-800 items-center flex h-7 w-7">
          <button onClick={toggleSidebar}>
            <Menu />
          </button>
        </div>
        <div className="flex-grow flex justify-end h-12 w-24">
          <img src={src} alt={altImage} />
        </div>
      </div>
      {isOpen && (
        <SideBar
          firstNameUser="Davi Freitas"
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      )}
    </>
  );
};
