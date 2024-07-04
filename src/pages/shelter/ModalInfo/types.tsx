import LogoShelter from "../../../assets/shelter/logo.svg";

export const shelterIcons: Record<string, string> = {
    arrow: LogoShelter
}

export type ModalInfoProps = {
    altImage: string;
    src: string;
    onClickMenu?: () => void;
    onClickBack?: () => void;
  };
  