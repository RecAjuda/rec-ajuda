import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { PointMapType } from "./type";


export const PointMapComponent = ({
    points,
    centerMap,
    zoom
}: PointMapType) => {
    return (
        <>
            <MapContainer className="relative z-10 h-screen w-screen" center={centerMap} zoom={zoom} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    points.map(element => (
                        <Marker  position={[element.latitude, element.longitude]}>
                            <Popup className={`text-${element.color}`}>
                                {element.description}
                            </Popup>
                        </Marker>
                    ))
                }

            </MapContainer>
        </>
    )
}

