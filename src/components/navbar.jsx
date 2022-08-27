import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineSearch,AiFillApple} from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {Link} from 'react-router-dom';

export default function Navbar() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
      setNav(!nav);
    };

    return (
        <>
        <div className={' z-10 sticky top-0'}>
            <div className={`flex justify-between items-center h-11 px-4 w-full sticky top-0 ${nav ? 'bg-black':'bg-[#333232]'}`}>
                <ul className='hidden text-center items-center mx-auto md:flex text-[#ffffffb1] no-underline font-serif font-light text-xs'>
                    <li href='#' className='pr-4 mr-2 text-center items-center hover:text-[#ffffff]'><Link to='/'><AiFillApple  size={20}/></Link></li>
                    <li className='px-4 mx-2 hover:text-[#ffffff]'><a href='#'>Mac</a></li>
                    <li className='px-4 mx-2 hover:text-[#ffffff]'><a href='#'>iPad</a></li>
                    <li className='px-4 mx-2 hover:text-[#ffffff]'><Link to='/product'>iPhone</Link></li>
                    <li className='px-4 mx-2 hover:text-[#ffffff]'><a href='#'>Watch</a></li>
                    <li className='px-4 mx-2 hover:text-[#ffffff]'><a href='#'>AirPods</a></li>
                    <li className='px-4 mx-2 hover:text-[#ffffff] w-28'><a href='#'>Tv & Rumah</a></li>
                    <li className='px-4 mx-2 hover:text-[#ffffff] w-36'><a href='#'>Hanya di Apple</a></li>
                    <li className='px-4 mx-2 hover:text-[#ffffff]'><a href='#'>Dukungan</a></li>
                    <li className='px-4 mx-2 hover:text-[#ffffff] w-36'><a href='#'>Tempat Membeli</a></li>
                    <li href='#' className='px-4 mx-3 hover:text-[#ffffff]'><AiOutlineSearch size={20}/></li>
                </ul>
                <div onClick={handleNav} className='block md:hidden flex text-[#ffffffb1] '>
                    {nav ? <AiOutlineClose size={20}/> : <HiOutlineMenuAlt4 size={20} />}
                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 px-9 transition-all duration-500 ease-in ${nav ? 'top-10':'top-[-490px]'}`}>
                        <div class="flex">
                            <div style={{width:"100%"}}>
                                <div class="input-group relative flex flex-wrap items-stretch w-full mb-4 rounded">
                                    <input type="search" class="form-control bg-[#333232]  relative flex-auto block w-full px-3 py-1.5 text-base font-normal text-gray-700 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
                                </div>
                            </div>
                        </div>
                        <div className='mx-2'>
                            <li className='hover:text-[#ffffff] border-b border-gray-300 leading-10'><a className='text-lg' href='#'>Mac</a></li>
                            <li className='hover:text-[#ffffff] border-b border-gray-300 leading-10'><a className='text-lg' href='#'>iPad</a></li>
                            <li className='hover:text-[#ffffff] border-b border-gray-300 leading-10'><a className='text-lg' href='#'>iPhone</a></li>
                            <li className='hover:text-[#ffffff] border-b border-gray-300 leading-10'><a className='text-lg' href='#'>Watch</a></li>
                            <li className='hover:text-[#ffffff] border-b border-gray-300 leading-10'><a className='text-lg' href='#'>AirPods</a></li>
                            <li className='hover:text-[#ffffff] border-b border-gray-300 leading-10'><a className='text-lg' href='#'>Tv & Rumah</a></li>
                            <li className='hover:text-[#ffffff] border-b border-gray-300 leading-10'><a className='text-lg' href='#'>Hanya di Apple</a></li>
                            <li className='hover:text-[#ffffff] border-b border-gray-300 leading-10'><a className='text-lg' href='#'>Dukungan</a></li>
                            <li className='hover:text-[#ffffff] border-b border-gray-300 leading-10'><a className='text-lg' href='#'>Tempat Membeli</a></li>
                        </div>
                    </ul>
                </div>
                <div className='grid justify-items-center md:hidden items-center text-center w-full flex text-[#ffffffb1] hover:text-white'>
                    <AiFillApple  size={20}/>
                </div>
            </div>
        </div>    
        </>
    );
};
