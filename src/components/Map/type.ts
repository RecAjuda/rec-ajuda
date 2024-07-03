export type PopUpsProps = {
  geoCode: [number, number];
  popUpContent: string;
};

export type MapProps = {
  popUps: Array<PopUpsProps>;
  zoom?: number;
  scrollMap?: boolean;
  centerMap: [number, number];
};
