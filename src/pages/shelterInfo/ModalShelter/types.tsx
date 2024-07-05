import ShelterIcon from "../../../assets/shelter/shelter-icon.svg";

export const shelterIcons: Record<string, string> = {
  shelterIcon: ShelterIcon,
};

export type ModalShelterProps = {
  street: string;
  phone: string;
  near: string;
  title: string;
  changedStyles: boolean;
};
