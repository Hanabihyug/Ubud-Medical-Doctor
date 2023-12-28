// components/Googlemaps.jsx
import React from 'react';

function Googlemaps() {
  return (
    <div className="h-screen">
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126269.98949774542!2d115.10678929726566!3d-8.505481599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23d01d17cb20f%3A0x33f4372f622e6ccf!2sUbud%20Medical%20Doctor!5e0!3m2!1sid!2sid!4v1703730637454!5m2!1sid!2sid"
        width="100%"
        height="100%"
        loading="lazy"
        className="z-[-1]"
      ></iframe>
    </div>
  );
}

export default Googlemaps;
