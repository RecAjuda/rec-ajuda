import ShelterIcon from "../../../assets/shelter/shelter-icon.svg";
import HomeShelter from "../../../assets/shelter/home-shelter.svg";
import Shelter from "../../../assets/shelter/shelter.svg";
import CollectPoint from "../../../assets/shelter/collect-point.svg";

export const shelterIcons: Record<string, string> = {
  shelterIcon: ShelterIcon,
  homeSchelter: HomeShelter,
  shelter: Shelter,
  collectPoint: CollectPoint,
};

export type ModalShelterProps = {
  street: string;
  phone: string;
  near: string;
  title: string;
  changedStyles: boolean;
};
