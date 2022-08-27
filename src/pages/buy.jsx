import React from 'react';
import Navbar from '../components/navbar'
import Footer from '../components/footer'


export default function Buy() {
   
    return (
        <>
            <Navbar/>
            <div className='bg-gray-200 py-11 px-40'>
                <div className="grid2col flex justify-center p-40 bg-white">
                    <section id="reseller" class="column">
                        <div className="grid2col  " data-hires="true">
                            <img class="mac hero m-auto" width="440" height="222" src="https://www.apple.com/id/buy/images/mac_ipad_ipod_hero.png" alt="Mac, iPad and iPod"/>
                            <p>Ratusan penjual Apple dapat membantu Anda <br/> mendapatkan iPhone, Apple Watch, iPad atau Mac untuk Anda.</p>
                            <form accept-charset="iso-8859-1" className='mt-5' name="poiForm" id="poiForm" action="https://locate.apple.com/id/in/sales/">																
                                <label className='mr-5' for="resellersearch"><input type="search" name="a" id="resellersearch" className='border-solid border-black border-2 leading-3' size="24" results="0" placeholder="Alamat, Kota atau Kode Pos" autosave="Apple.com Reseller"/>
                                </label>
                                <select name="pt" id="sales-products" className='border-solid mr-2 border-black border-2 leading-3'>
                                    <option value="all" id="all" >
                                        Semua produk
                                    </option>
                                    <option class="fill" value="3" id="iphone">
                                        iPhone
                                    </option>
                                    <option class="fill" value="1" id="ipad">
                                        iPad
                                    </option>
                                    <option class="fill" value="4" id="mac">
                                        Mac
                                    </option>
                                    <option class="fill" value="2" id="ipod">
                                        iPod
                                    </option>
                                    <option class="fill" value="6" id="applewatch">
                                        Apple Watch &amp; Apple Watch Sport
                                    </option>
                                    <option class="fill" value="7" id="applewatchedition">
                                        Apple Watch Edition
                                    </option>
                                    <option class="fill" value="5" id="appletv">
                                        Apple TV
                                    </option>
                                </select>						
                                <input type="image" class="button_go" value="Go" id="goBuy" src="https://images.apple.com/id/buy/images/button-go.png"/> 											
                            </form>					
                        </div>
                    </section>
                </div>
            </div>    
            <Footer/>
        </>
    );
};
