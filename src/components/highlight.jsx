import React from 'react';
import Iphone13 from './image/iphone13.png'
import Iphone13pro from './image/iphone13pro.png'
import Watch7 from './image/watchs7.png'
import {Link} from 'react-router-dom'

export default function Highlight() {

    return (
        <>
            <div style={{backgroundImage: `url(${Iphone13})`,backgroundSize: "100% 100%"}} className='text-black md:h-[37rem] h-[30rem] bg-cover mb-3'>
                <div style={{fontFamily:"SF Pro Display Regular",}}  className="max-w-[800px] pt-14 w-full mx-auto text-center flex flex-col justify-center">
                    <h1 className='md:text-6xl sm:text-5xl text-3xl font-semibold '>
                    iPhone 13
                    </h1>
                    <div className='flex justify-center items-center'>
                    <p className='md:text-3xl sm:text-2xl text-1xl font-normal'>
                        Kekuatan super baru di tangan Anda.
                    </p>
                    </div>
                    <div className='mt-4 text-sky-600'>
                        <a href='#' className='text-base md:text-xl sm:text-lg mr-10 hover:underline'> Selengkapnya </a>
                        <Link to="/buy"className='text-base md:text-xl sm:text-lg hover:underline'> Beli </Link>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" style={{backgroundImage: `url(${Iphone13pro})` ,backgroundSize: "100% 100%"}} className='text-black md:h-[37rem] h-[30rem] bg-cover mb-3'>
                <div style={{fontFamily:"SF Pro Display Regular",}}  className="max-w-[800px] pt-14 w-full mx-auto text-center flex flex-col justify-center">
                    <h1 className='md:text-6xl sm:text-5xl text-3xl font-semibold '>
                    iPhone 13 Pro
                    </h1>
                    <div className='flex justify-center items-center'>
                    <p className='md:text-3xl sm:text-2xl text-1xl font-normal'>
                        Ponsel. Paling. Pro.
                    </p>
                    </div>
                    <div className='mt-4 text-sky-600'>
                        <a href='#' className='text-base md:text-xl sm:text-lg mr-10 hover:underline'> Selengkapnya </a>
                        <Link to="/buy"className='text-base md:text-xl sm:text-lg hover:underline'> Beli </Link>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" style={{backgroundImage: `url(${Watch7})`,backgroundSize: "100% 100%"}} className='text-black md:h-[37rem] h-[30rem] bg-cover mb-3'>
                <div style={{fontFamily:"SF Pro Display Regular",}}  className="max-w-[800px] pt-14 w-full mx-auto text-center flex flex-col justify-center">
                    <h1 className='md:text-6xl sm:text-5xl text-3xl font-semibold '>
                    Watch
                    </h1>
                    <div className='flex justify-center items-center'>
                    <p className='md:text-3xl sm:text-2xl text-1xl font-normal'>
                        Memperkenalkan layar terluas kami
                    </p>
                    </div>
                    <div className='mt-4 text-sky-600'>
                        <a href='#' className='text-base md:text-xl sm:text-lg mr-10 hover:underline'> Selengkapnya </a>
                        <Link to="/buy"className='text-base md:text-xl sm:text-lg hover:underline'> Beli </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
