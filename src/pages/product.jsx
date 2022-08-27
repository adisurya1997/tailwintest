import React from 'react';
import Navbar from '../components/navbar';
import Highlight from '../components/highlight';
import Footer from '../components/footer';
import Iphone13c from '../components/image/Iphone13card.png';
import Camera from '../components/image/icon13procamera.png';
import A15 from '../components/image/a15.png';
import Icon5G from '../components/image/5g.png';
import Battery from '../components/image/baterai.png';
import FaceID from '../components/image/faceid.png';
export default function Homepage() {
   
    return (
        <>
            <Navbar/>
            <Highlight/>
            <div className='flex justify-center text-center'>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-3 w-[60vw]">
                    <div>
                        <img src={Iphone13c} alt="" />
                        <div class="grid grid-rows-6 gap-1 text-center">
                            <div className='mt-10 border-b-2'>
                                <a className='text-sm rounded-full p-1 px-4 w-9 bg-sky-500 text-white' href="">Beli</a>
                                <br />
                                <a className='text-base hover:underline text-sky-500' href="">Selengkapnya</a>
                            </div>
                            <div>
                                <h1 className='text-lg font-semibold mt-10'>6,7″ atau 6,1”</h1>
                                <h3>Layar OLED menyeluruh1 dengan ProMotion</h3>
                            </div>
                            <div>
                                <img className='inline mt-10' src={Camera} alt="" />
                                <h1>Sistem kamera Pro</h1>
                                <h3>Telefoto, Wide, Ultra Wide</h3>
                            </div>
                            <div>
                                <img className='inline mt-10' src={A15} alt=""/>
                                <h1>Chip A15 Bionic</h1>
                                <h3>GPU 5‑core</h3>
                            </div>
                            <div>
                                <img className='inline mt-10' src={Icon5G} alt=""/>
                                <h1>Seluler 5G super cepat2</h1>
                            </div>
                            <div>
                                <img className='inline mt-10' src={Battery} alt=""/>
                                <h1>Pemutaran video hingga 28 jam3</h1>
                            </div>
                            <div className='pb-10 mb-10 border-b-2'>
                                <img className='inline mt-10 ' src={FaceID} alt=""/>
                                <h1>Face ID</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={Iphone13c} alt="" />
                        <div class="grid grid-rows-6 gap-1 text-center">
                            <div className='mt-10 border-b-2'>
                                <a className='text-sm rounded-full p-1 px-4 w-9 bg-sky-500 text-white' href="">Beli</a>
                                <br />
                                <a className='text-base hover:underline text-sky-500' href="">Selengkapnya</a>
                            </div>
                            <div>
                                <h1 className='text-lg font-semibold mt-10'>6,7″ atau 6,1”</h1>
                                <h3>Layar OLED menyeluruh1 dengan ProMotion</h3>
                            </div>
                            <div>
                                <img className='inline mt-10' src={Camera} alt="" />
                                <h1>Sistem kamera Pro</h1>
                                <h3>Telefoto, Wide, Ultra Wide</h3>
                            </div>
                            <div>
                                <img className='inline mt-10' src={A15} alt=""/>
                                <h1>Chip A15 Bionic</h1>
                                <h3>GPU 5‑core</h3>
                            </div>
                            <div>
                                <img className='inline mt-10' src={Icon5G} alt=""/>
                                <h1>Seluler 5G super cepat2</h1>
                            </div>
                            <div>
                                <img className='inline mt-10' src={Battery} alt=""/>
                                <h1>Pemutaran video hingga 28 jam3</h1>
                            </div>
                            <div className='pb-10 mb-10 border-b-2'>
                                <img className='inline mt-10 ' src={FaceID} alt=""/>
                                <h1>Face ID</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={Iphone13c} alt="" />
                        <div class="grid grid-rows-6 gap-1 text-center">
                            <div className='mt-10 border-b-2'>
                                <a className='text-sm rounded-full p-1 px-4 w-9 bg-sky-500 text-white' href="">Beli</a>
                                <br />
                                <a className='text-base hover:underline text-sky-500' href="">Selengkapnya</a>
                            </div>
                            <div>
                                <h1 className='text-lg font-semibold mt-10'>6,7″ atau 6,1”</h1>
                                <h3>Layar OLED menyeluruh1 dengan ProMotion</h3>
                            </div>
                            <div>
                                <img className='inline mt-10' src={Camera} alt="" />
                                <h1>Sistem kamera Pro</h1>
                                <h3>Telefoto, Wide, Ultra Wide</h3>
                            </div>
                            <div>
                                <img className='inline mt-10' src={A15} alt=""/>
                                <h1>Chip A15 Bionic</h1>
                                <h3>GPU 5‑core</h3>
                            </div>
                            <div>
                                <img className='inline mt-10' src={Icon5G} alt=""/>
                                <h1>Seluler 5G super cepat2</h1>
                            </div>
                            <div>
                                <img className='inline mt-10' src={Battery} alt=""/>
                                <h1>Pemutaran video hingga 28 jam3</h1>
                            </div>
                            <div className='pb-10 mb-10 border-b-2'>
                                <img className='inline mt-10 ' src={FaceID} alt=""/>
                                <h1>Face ID</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={Iphone13c} alt="" />
                        <div class="grid grid-rows-6 gap-1 text-center">
                            <div className='mt-10 border-b-2'>
                                <a className='text-sm rounded-full p-1 px-4 w-9 bg-sky-500 text-white' href="">Beli</a>
                                <br />
                                <a className='text-base hover:underline text-sky-500' href="">Selengkapnya</a>
                            </div>
                            <div>
                                <h1 className='text-lg font-semibold mt-10'>6,7″ atau 6,1”</h1>
                                <h3>Layar OLED menyeluruh1 dengan ProMotion</h3>
                            </div>
                            <div>
                                <img className='inline mt-10' src={Camera} alt="" />
                                <h1>Sistem kamera Pro</h1>
                                <h3>Telefoto, Wide, Ultra Wide</h3>
                            </div>
                            <div>
                                <img className='inline mt-10' src={A15} alt=""/>
                                <h1>Chip A15 Bionic</h1>
                                <h3>GPU 5‑core</h3>
                            </div>
                            <div>
                                <img className='inline mt-10' src={Icon5G} alt=""/>
                                <h1>Seluler 5G super cepat2</h1>
                            </div>
                            <div>
                                <img className='inline mt-10' src={Battery} alt=""/>
                                <h1>Pemutaran video hingga 28 jam3</h1>
                            </div>
                            <div className='pb-10 mb-10 border-b-2'>
                                <img className='inline mt-10 ' src={FaceID} alt=""/>
                                <h1>Face ID</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center text-center'>
                <a href='#' className='text-base text-sky-500 my-20 mb-28 md:text-xl sm:text-lg mr-10 hover:underline'> Bandingkan semua model iPhone </a>
            </div>    
            <Footer/>
        </>
    );
};
