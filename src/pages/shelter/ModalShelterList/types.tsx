import ShelterIcon from "../../../assets/shelter/shelter-icon.svg";

export const shelterIcons: Record<string, string> = {
    shelterIcon: ShelterIcon
}

export type ShelterListProps = {
    shelterName: string;
    shelterDistance: number;
    shelterAddress: string;
    shelterPhone: string;
    
  };
  