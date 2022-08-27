import React from 'react';
import Macbookair from './image/MacbookAir.png'
import Ipadair from './image/Ipadair.png'
import StudioDisplay from './image/studio-display.png'
import Macbookpro13 from './image/macbookpro13.png'
import Arcade from './image/arcade.png'
import AirPods from './image/AirPods.png'
import {Link} from 'react-router-dom'

export default function Product() {

    return (
        <>
            <div class="md:grid hidden grid-cols-2 z-10 gap-2">
                <div data-aos="fade-left" style={{backgroundImage: `url(${Macbookair})`,height:"37rem",backgroundSize: "100% 100%"}} className='text-black bg-cover'>
                    <div style={{fontFamily:"SF Pro Display Regular",}}  className="max-w-[800px] pt-14 w-full mx-auto text-center flex flex-col justify-center">
                        <h1 className='md:text-6xl sm:text-5xl text-3xl font-semibold '>
                        MacBook Air
                        </h1>
                        <div className='flex justify-center items-center'>
                        <p className='md:text-3xl sm:text-2xl text-1xl font-normal'>
                            Bertenaga Super Cepat
                        </p>
                        </div>
                        <div className='mt-4 text-sky-600'>
                            <a href='#' className='text-base md:text-xl sm:text-lg mr-10 hover:underline'> Selengkapnya </a>
                            <Link to="/buy"className='text-base md:text-xl sm:text-lg hover:underline'> Beli </Link>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" style={{backgroundImage: `url(${Ipadair})`,height:"37rem",backgroundSize: "100% 100%"}} className='text-white bg-cover'>
                    <div style={{fontFamily:"SF Pro Display Regular",}}  className="max-w-[800px] pt-14 w-full mx-auto text-center flex flex-col justify-center">
                        <h1 className='md:text-6xl sm:text-5xl text-3xl font-semibold '>
                        iPad Air
                        </h1>
                        <div className='flex justify-center items-center'>
                        <p className='md:text-3xl sm:text-2xl text-1xl font-normal'>
                            Ringan.Bewarna.Bertenaga.
                        </p>
                        </div>
                        <div className='mt-4 text-sky-600'>
                            <a href='#' className='text-base md:text-xl sm:text-lg mr-10 hover:underline'> Selengkapnya </a>
                            <Link to="/buy"className='text-base md:text-xl sm:text-lg hover:underline'> Beli </Link>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-right" style={{backgroundImage: `url(${StudioDisplay})`,height:"37rem",backgroundSize: "100% 100%"}} className='text-black bg-cover'>
                    <div style={{fontFamily:"SF Pro Display Regular",}}  className="max-w-[800px] pt-14 w-full mx-auto text-center flex flex-col justify-center">
                        <h1 className='md:text-6xl sm:text-5xl text-3xl font-semibold '>
                        Studio Display
                        </h1>
                        <div className='flex justify-center items-center'>
                        <p className='md:text-3xl sm:text-2xl text-1xl font-normal'>
                            Tampilan Indah
                        </p>
                        </div>
                        <div className='mt-4 text-sky-600'>
                            <a href='#' className='text-base md:text-xl sm:text-lg mr-10 hover:underline'> Selengkapnya </a>
                            <Link to="/buy"className='text-base md:text-xl sm:text-lg hover:underline'> Beli </Link>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-right" style={{backgroundImage: `url(${Macbookpro13})`,height:"37rem",backgroundSize: "100% 100%"}} className='text-white bg-cover'>
                    <div style={{fontFamily:"SF Pro Display Regular",}}  className="max-w-[800px] pt-14 w-full mx-auto text-center flex flex-col justify-center">
                        <h1 className='md:text-6xl sm:text-5xl text-3xl font-semibold '>
                        MacbookPro 13
                        </h1>
                        <div className='flex justify-center items-center'>
                        <p className='md:text-3xl sm:text-2xl text-1xl font-normal'>
                            Bertenaga Super Berkat
                        </p>
                        </div>
                        <div className='mt-4 text-sky-600'>
                            <a href='#' className='text-base md:text-xl sm:text-lg mr-10 hover:underline'> Selengkapnya </a>
                            <Link to="/buy"className='text-base md:text-xl sm:text-lg hover:underline'> Beli </Link>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" style={{backgroundImage: `url(${Arcade})`,height:"37rem",backgroundSize: "100% 100%"}} className='text-black bg-cover'>
                    <div style={{fontFamily:"SF Pro Display Regular",}}  className="max-w-[800px] pt-14 w-full mx-auto text-center flex flex-col justify-center">
                        <h1 className='md:text-6xl sm:text-5xl text-3xl font-semibold '>
                        Arcade
                        </h1>
                        <div className='flex justify-center items-center'>
                        <p className='md:text-3xl sm:text-2xl text-1xl font-normal'>
                            Game Skuel Penuh aksi
                        </p>
                        </div>
                        <div className='mt-4 text-sky-600'>
                            <a href='#' className='text-base md:text-xl sm:text-lg mr-10 hover:underline'> Selengkapnya </a>
                            <Link to="/buy"className='text-base md:text-xl sm:text-lg hover:underline'> Beli </Link>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" style={{backgroundImage: `url(${AirPods})`,height:"37rem",backgroundSize: "100% 100%"}} className='text-white bg-cover'>
                    <div style={{fontFamily:"SF Pro Display Regular",}}  className="max-w-[800px] pt-14 w-full mx-auto text-center flex flex-col justify-center">
                        <h1 className='md:text-6xl sm:text-5xl text-3xl font-semibold '>
                        AirPods
                        </h1>
                        <div className='flex justify-center items-center'>
                        <p className='md:text-3xl sm:text-2xl text-1xl font-normal'>
                            dengan Audio Spesial
                        </p>
                        </div>
                        <div className='mt-4 text-sky-600'>
                            <a href='#' className='text-base md:text-xl sm:text-lg mr-10 hover:underline'> Selengkapnya </a>
                            <Link to="/buy"className='text-base md:text-xl sm:text-lg hover:underline'> Beli </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
