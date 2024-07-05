// export type PopUpsProps = {
//   geoCode: any;
//   popUpContent: string;
// };

export type MapProps = {
  popUps: PopsUpProps[];
  zoom?: number;
  scrollMap?: boolean;
  centerMap: [number, number];
};

export type PopsUpProps = {
  type: string;
  geometry: {
    type: string;
    coordinates: number[];
  };
  properties: {
    rating: number;
    restaurant_name: string;
  };
};
