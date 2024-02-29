/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

function MyArea() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  }>({
    longitude: 0,
    latitude: 0,
  });

  navigator.geolocation.getCurrentPosition((position: any) => {
    setLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  });

  useEffect(() => {
    window.kakao.maps.load(() => {
      const container = mapRef.current;
      const options = {
        center: new window.kakao.maps.LatLng(
          location.latitude,
          location.longitude
        ),
        level: 3,
      };

      new window.kakao.maps.Map(container, options);
    });
  }, [location.latitude, location.longitude]);

  return (
    <div
      id="map"
      ref={mapRef}
      style={{ width: "500px", height: "400px" }}
    ></div>
  );
}

export default MyArea;
