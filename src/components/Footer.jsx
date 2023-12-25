import React from "react";
import Container from "./Container";
import { IoLogoInstagram, IoLogoWhatsapp, IoIosMail } from "react-icons/io";
import { smoothScrollTo } from "./Navbar";


function Footer() {
  const instagramUrl = "https://www.instagram.com/ubudmedicaldoc/";
  const whatsappUrl = "https://wa.me/6285100811818";
  const emailUrl = "mailto:ubud.medical@gmail.com";
  return (
    <div className="pt-28">
      <Container>
        <div className="md:flex ">
          <div className="md:w-1/3 md:pr-4 flex flex-col max-md:items-center gap-2">
            <img
              className="max-md:w-32 w-20"
              src={process.env.PUBLIC_URL + "brand-logo.png"}
              alt="logo"
            />
            <p className="text-black/50">We are happy to get your feedback</p>
            <div className="text-black/60 text-4xl flex gap-3 mt-4">
              {/* Tautan WhatsApp */}
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                <IoLogoInstagram />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <IoLogoWhatsapp />
              </a>
              {/* Tautan Email */}
              <a href={emailUrl} target="_blank" rel="noopener noreferrer">
                <IoIosMail />
              </a>
            </div>
          </div>
          <div className="md:w-1/3 md:pr-4 flex flex-col max-md:items-center max-md:mt-16">
            <h1 className="text-2xl font-bold mb-4">COMPANY</h1>
            <p className="text-lg mb-2 text-black/60" onClick={() => smoothScrollTo('Home')}>Home</p>
            <p className="text-lg mb-2 text-black/60" onClick={() => smoothScrollTo('About')}>About Us</p>
            <p className="text-lg mb-2 text-black/60" onClick={() => smoothScrollTo('Services')}>Services</p>
            <p className="text-lg mb-2 text-black/60" onClick={() => smoothScrollTo('Testimoni')}>Testimonial</p>
          </div>
          <div className="md:w-1/3 md:pr-4 flex flex-col max-md:items-center max-md:mt-16">
            <h1 className="text-2xl font-bold mb-4">SOCIAL MEDIA</h1>
            <p className="text-lg mb-2 text-black/60">Instagram</p>
            <p className="text-lg mb-2 text-black/60">WhatsApp</p>
            <p className="text-lg mb-2 text-black/60">Email</p>
          </div>
        </div>
      </Container>
      <div className="flex justify-center border-t-[1px] border-black/30 py-4 mt-14">
        <p className="text-center text-black/60">
          &#169; 2023 Logo. All rights reserved. | Powered by DevEureka
        </p>
      </div>
    </div>
  );
}

export default Footer;
