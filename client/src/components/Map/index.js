import React from "react";
import {
    GoogleMap,
    useLoadScrript,
} from "@react-google-maps"

const libraries = ["places"];
const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
};
const center = {
    lat: 43,
    lng: -79
}

const {isLoaded, loadError} = useLoadScrript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API,
    libraries,
});

if (loadError) return "error laoding maps";
if (!isLoaded) return "Loading Maps";

return <div>
    <GoogleMap mapContainerStyle={mapContainerStyle} 
    zoom={8} 
    center={center}>
    </GoogleMap>
</div>