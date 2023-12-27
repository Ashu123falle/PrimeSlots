
import React from 'react';
import { GoogleMap, LoadScript, Marker, AdvancedMarker } from '@react-google-maps/api';

import CustomPin from '@/pages/MediaDetails/CustomPin'

const GoogleMapComponent = () => {
  const fakeCoordinates = {
    lat: 12.972442,
    lng: 77.580643,
  };

  const mapStyles = {
    height: '350px',
    //'max-width':'500px',
    width: '500px',
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="AIzaSyDMRTjPWNEUp8J81tzfAw5lhcJQK50oKr0"}  // Replace with any string for demonstration
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={10}
        center={fakeCoordinates}
      >
        <Marker position={fakeCoordinates}  icon = {<CustomPin/>} />
      </GoogleMap>
    </LoadScript>
   
  );
};

export default GoogleMapComponent;
