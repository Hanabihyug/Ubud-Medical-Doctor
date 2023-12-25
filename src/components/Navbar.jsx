import React, { useEffect, useState } from 'react'
import Container from './Container'
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

const smoothScrollTo = (id) => {
  const targetSection = document.getElementById(id);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

function Navbar() {

    const Brand = process.env.PUBLIC_URL + './brand-logo.png'
    const [burger, setBurger] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
      const handleScroll = () => {
        const isScrolled =  window.scrollY > (window.innerHeight - 60);
        setScrolled(isScrolled)
      }
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])

    useEffect(() => {
      document.body.style.overflow = burger ? 'hidden' : 'auto'
    }, [burger])

  return (
    <div className={`${burger ? (scrolled ? 'max-md:bg-white shadow-md' : 'max-md:bg-black/70') : (scrolled ? 'max-md:bg-white shadow-md' : 'max-md:bg-black/70') && (scrolled && 'bg-white shadow-md')} transition duration-300 fixed z-50 w-full min-h-20 md:h-20 flex justify-center`}>
        <Container>
        <div className='h-full z-50 flex items-center justify-between'>
            <img src={Brand} alt='brand logo' className='w-12'/>
            <ul className={`${!burger ? 'hidden' : `max-md:flex ${scrolled ? 'max-md:bg-white max-md:shadow-md' : 'max-md:bg-black/70'}  max-sm:w-full max-md:w-6/12 max-md:h-screen max-md:pt-10 max-md:gap-0`} absolute md:static top-0 right-0 mt-20 md:mt-0 flex-col md:flex md:flex-row gap-8 md:items-center`}>
                <li className={`${scrolled ? 'max-md:text-black/80' : 'text-white/80'} max-md:w-full max-md:hover:bg-white/10 max-md:pl-8 max-md:py-4 hover:text-main-300 transition duration-300 cursor-pointer`} onClick={() => smoothScrollTo('Home')} >Home</li>
                <li className={`${scrolled ? 'max-md:text-black/80' : 'text-white/80'} max-md:w-full max-md:hover:bg-white/10 max-md:pl-8 max-md:py-4 hover:text-main-300 transition duration-300 cursor-pointer`} onClick={() => smoothScrollTo('About')} >About</li>
                <li className={`${scrolled ? 'max-md:text-black/80' : 'text-white/80'} max-md:w-full max-md:hover:bg-white/10 max-md:pl-8 max-md:py-4 hover:text-main-300 transition duration-300 cursor-pointer`} onClick={() => smoothScrollTo('Services')}>Services</li>
                <li className={`${scrolled ? 'max-md:text-black/80' : 'text-white/80'} max-md:w-full max-md:hover:bg-white/10 max-md:pl-8 max-md:py-4 hover:text-main-300 transition duration-300 cursor-pointer`} onClick={() => smoothScrollTo('Testimoni')}>Testimonial</li>
                <li className='max-md:w-full max-md:pl-8 max-md:py-4'>
            <a
              href="https://wa.me/6285100811818"
              className='btn-main btn-sm'
              target="_blank"
              rel="noopener noreferrer"
              >
                Contact us
             </a>
            </li>
            </ul>
            {
              !burger ?
              <RxHamburgerMenu className={`${scrolled ? 'text-black/80' : 'text-white'} md:hidden text-3xl cursor-pointer`} onClick={() => setBurger(!burger)} />
              :
              <RxCross2 className={`${scrolled ? 'text-black' : 'text-white'} md:hidden text-3xl cursor-pointer`} onClick={() => setBurger(!burger)} />
            }
        </div>
        </Container>
    </div>
  )
}

export default Navbar
export {smoothScrollTo}