import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import CustomPin from '@/components/CustomPin/CustomPin';

const GoogleMapComponent = () => {
  const fakeCoordinates = {
    lat: 12.972442,
    lng: 77.580643,
  };

  const mapContainerStyles = {
    height: '325px',
    width: '100%',
    maxWidth: '500px',
    margin: '0 auto',
    // Responsive widths
    '@media (min-width: 400px)': {
      width: '400px',
    },
    '@media (min-width: 640px)': {
      width: '640px',
    },
    '@media (min-width: 768px)': {
      width: '768px',
    },
    '@media (min-width: 1024px)': {
      width: '1024px',
    },
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="AIzaSyDMRTjPWNEUp8J81tzfAw5lhcJQK50oKr0"}
    >
      <div style={mapContainerStyles}>
        <GoogleMap
          mapContainerStyle={{
            height: '100%',
            width: '100%',
          }}
          zoom={10}
          center={fakeCoordinates}
        >
          <Marker position={fakeCoordinates} icon={<CustomPin />} />
        </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default GoogleMapComponent;
