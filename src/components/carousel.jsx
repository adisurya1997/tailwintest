import React from 'react';
import {listvideo} from "../fakedata/datadummy";

export default function Carousel() {

    return (
        <>
        <div data-aos="fade-up" id="carouselExampleCaptions" className="carousel slide relative mx-20 md:mx-40 mt-2 mb-10" data-bs-ride="carousel">
            <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
                ></button>
                {listvideo.map((item) => 
                <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={item.no}
                aria-label={'Slide'+(item.no+1)}
                ></button>
                )} 
            </div>
            <div class="carousel-inner relative w-full overflow-hidden">
                <div class="carousel-item active relative float-left w-full">
                <img
                    src="https://is5-ssl.mzstatic.com/image/thumb/7SeRlnCzKlgeqrg6-ixkig/980x551.jpg"
                    class="block w-full h-96"
                    alt="..."
                />
                <div class="carousel-caption hidden md:block absolute text-center">
                    <h5 class="text-xl">Drama</h5>
                    <p>Musim Baru</p>
                </div>
                </div>
                {listvideo.map((item) => 
                <div class="carousel-item relative float-left w-full">
                <img
                    src={item.link}
                    class="block w-full h-96 md:h-[100%]"
                    alt="..."
                />
                <div data-aos="fade-top" class="carousel-caption hidden md:block absolute text-center">
                    <h5 class="text-xl">{item.tag}</h5>
                    <p>{item.detail}</p>
                </div>
                </div>
                )}  
            </div>
            <button
                class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
            >
                <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button
                class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
            >
                <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        </>
    );
};
