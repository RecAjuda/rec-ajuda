export type PointMapType = {
    points : GeoLocation[];
    centerMap : [number, number];
    zoom : number;

};


export type GeoLocation = {
    latitude : number;
    longitude: number;
    openStatus: string;
    title : string;   
    color: string; 
    type : string;
}