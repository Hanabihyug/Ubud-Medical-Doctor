import React from 'react';
import Container from './Container';

function Contact() {
  // Nomor WhatsApp yang akan dihubungi
  const whatsappNumber = '6285100811818'; // Ganti dengan nomor WhatsApp yang sesuai

  // Membuat tautan ke WhatsApp
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className='bg-cover bg-center relative' style={{backgroundImage: `url(${process.env.PUBLIC_URL + 'hero.jpeg'})`}}>
      <div className='py-28 h-full w-full bg-black/70'>
        <Container>
          <div className='max-sm:flex max-sm:flex-col max-sm:items-center'>
            <h1 className='text-5xl font-bold text-white flex items-center gap-3 mb-6 max-sm:text-center'>
              <div className=' max-sm:hidden h-16 w-2.5 bg-main-700'></div> Feel free to Contact Us
            </h1>
            <p className='text-white/90 mb-8 md:w-1/2 max-sm:text-center'>
              We believe that optimal health is important. Feel free to get to know us more, and we will provide the best advice for you.
            </p>
            {/* Tautan WhatsApp */}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className='btn-main btn-sm'>
              Contact Us
            </a>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Contact;
