import React from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Googlemaps from "./components/Googlemaps";
import { ImWhatsapp } from 'react-icons/im';

function App() {
  // Nomor WhatsApp yang akan dihubungi
  const whatsappNumber = '6285100811818'; // Ganti dengan nomor WhatsApp yang sesuai

  // Tautan langsung ke WhatsApp dengan pesan
  const whatsappLink = `https://wa.me/6285100811818?text=Hello%20Ubud%20Medical%20Doctor%2C%20I%20need%20Help%20For%20(Please%20tell%20us%20your%20problem)`;

  return (
    <div className="App">
      {/* Floating WhatsApp */}
      <div onClick={() => window.open(whatsappLink)} className="fixed w-14 h-14 bottom-10 right-10 bg-[#25d366] text-white rounded-full flex justify-center items-center first-letter:first-line shadow-lg z-50 cursor-pointer">
        <ImWhatsapp className="text-3xl" />
      </div>

      {/* Konten Halaman */}
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Testimonials/>
      <Contact/>
      <Googlemaps /> 
      <Footer/>
    </div>
  );
}

export default App;
