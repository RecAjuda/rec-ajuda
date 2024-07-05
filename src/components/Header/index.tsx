import { useState } from "react";
import { SideBar } from "..";
import { Menu } from "lucide-react";
import Logo from "../../assets/rec-ajuda-icon.svg";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="absolute z-20 bg-white w-screen flex items-center px-3">
        <div className="text-blue-800 items-center flex h-7 w-7">
          <button onClick={toggleSidebar}>
            <Menu />
          </button>
        </div>
        <div className="flex-grow flex justify-end h-12 w-24">
          <img src={Logo} alt="Icone Rec Ajuda" />
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
