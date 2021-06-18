import React from "react";
import { GoogleMap, LoadScript ,Marker} from "@react-google-maps/api";

const containerStyle = {
  width: "94%",
  height: "100%",
};

const location = {
  lat: 21.434514,
  lng: 91.974356,
};

const Map =()=> {
    return (
      <LoadScript googleMapsApiKey="AIzaSyBXuxy8YKh1TR-G3uoeyhDqVclBLnjVHBc">
        <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={10}>
          {/* Child components, such as markers, info windows, etc. */}
          <Marker position={location}></Marker>
        </GoogleMap>
      </LoadScript>
    );
  
}
export default Map;
