import Logo from "../../assets/rec-ajuda-icon.svg";
import { Header } from "./Header";
import { ModalAddress } from "./ModalAddress";
// import { ModalInfo } from "./ModalInfo";


export const Shelter = () => {
    return (
        <div className="z-0 relative h-screen flex items-center justify-content flex-col text-black">
            <Header
                src={Logo}
                altImage="Logo"
                onClickBack={() => null}
                onClickMenu={() => null}
            />

            <ModalAddress street={"Mirante do Paço - Tv. do Amorim,"} cep={"50030-070"}/>
            {/* <ModalInfo></ModalInfo> */}
        </div>
    );
};