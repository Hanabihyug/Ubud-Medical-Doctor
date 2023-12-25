import React from 'react'
import Container from './Container'
import { RxCheck } from 'react-icons/rx'

function Services() {
  return (
    <div className='py-28' id='Services'>
        <Container>
            {/* Header */}
            <div className='w-full text-center flex flex-col gap-1.5'>
                <h1 className='text-2xl font-bold'>What can we do</h1>
                <p className='text-gray-500'>"Quality service is the key to meeting customer needs and expectations professionally."</p>
            </div>
            {/* Conten 1 */}
            <div className='mt-16 sm:flex sm:gap-12 sm:items-center'>
                <div className='h-[300px] xl:h-[400px] bg-cover bg-center rounded-3xl sm:w-1/2' style={{backgroundImage: `url(${process.env.PUBLIC_URL + 'service-1.jpeg'})`}}></div>
                <div className='sm:w-1/2'>
                    <h1 className='text-xl font-bold max-sm:mt-8'>Health Services</h1>
                    <ul className='flex flex-col gap-2.5 mt-4'>
                        <li className='flex items-center gap-2'><RxCheck className='bg-main-600 p-[2px] text-white text-2xl rounded-full'/>Doctor Consultation</li>
                        <li className='flex items-center gap-2'><RxCheck className='bg-main-600 p-[2px] text-white text-2xl rounded-full'/>Intravenous Therapy</li>
                        <li className='flex items-center gap-2'><RxCheck className='bg-main-600 p-[2px] text-white text-2xl rounded-full'/>Wound Treatment</li>
                        <li className='flex items-center gap-2'><RxCheck className='bg-main-600 p-[2px] text-white text-2xl rounded-full'/>Doctor On Call</li>
                        <li className='flex items-center gap-2'><RxCheck className='bg-main-600 p-[2px] text-white text-2xl rounded-full'/>Laboratary</li>
                        <li className='flex items-center gap-2'><RxCheck className='bg-main-600 p-[2px] text-white text-2xl rounded-full'/>Pharmacy</li>
                        <li className='flex items-center gap-2'><RxCheck className='bg-main-600 p-[2px] text-white text-2xl rounded-full'/>Vaccine</li>
                    </ul>
                </div>
            </div>
            {/* Conten 2 */}
            <div className='mt-20 flex max-sm:flex-col-reverse sm:gap-12 sm:items-center'>
                <div className='sm:w-1/2'>
                    <h1 className='text-xl font-bold max-sm:mt-8'>Medical and Related Services</h1>
                    <ul className='w-full flex flex-col gap-2.5 mt-4'>
                        <li className='flex items-center gap-2'><RxCheck className='bg-main-600 p-[2px] text-white text-2xl rounded-full'/>Profesional Babysitter</li>
                        <li className='flex items-center gap-2'><RxCheck className='bg-main-600 p-[2px] text-white text-2xl rounded-full'/>Medical Service for Corporate</li>
                        <li className='flex items-center gap-2'><RxCheck className='bg-main-600 p-[2px] text-white text-2xl rounded-full'/>Medical Service for Event</li>
                        <li className='flex items-center gap-2'><RxCheck className='bg-main-600 p-[2px] text-white text-2xl rounded-full'/>First Aid Training</li>
                        <li className='flex items-center gap-2'><RxCheck className='bg-main-600 p-[2px] text-white text-2xl rounded-full'/>Insurance Training</li>
                    </ul>
                </div>
                <div className='h-[300px] xl:h-[400px] bg-cover md:bg-center rounded-3xl sm:w-1/2' style={{backgroundImage: `url(${process.env.PUBLIC_URL + 'service-2.jpeg'})`}}></div>
            </div>
        </Container>
    </div>
  )
}

export default Services