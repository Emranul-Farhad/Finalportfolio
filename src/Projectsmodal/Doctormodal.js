import React from 'react';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import one from '../Images/doctorOne.png'
import two from '../Images/doctorTwo.png'
import three from '../Images/DoctorThree.png'
import { AiFillGithub } from 'react-icons/ai'




const Doctormodal = () => {


    return (
        <div className='cursor-default modalcursor'>

            <input type="checkbox" id="doctormodal" class="modal-toggle cursor-default" />
            <div class="modal">
                <div class="modal-box w-11/12 max-w-5xl cursor-default">
                    <Swiper

                        effect={"coverflow"}
                        // grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        loop={true}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide className='w-[50%] cursor-default '>
                            <img className='' src={one} />
                        </SwiperSlide >
                        <SwiperSlide className='w-[50%] cursor-default'>
                            <img src={two} />
                        </SwiperSlide>
                        <SwiperSlide className='w-[50%] cursor-default' >
                            <img src={three} />
                        </SwiperSlide>
                    </Swiper>
                    <h3 class="font-bold text-lg"> Doctor Portal </h3>
                    <div className='flex items-center justify-center mt-3'>
                        <div className='flex items-center'>
                            <p class="py-4 font-bold text-1xl uppercase">Client site link  </p>
                            <a target='blank' href='https://github.com/Emranul-Farhad/Doctor-Portal' className='hover:bg-[#07D3D3] rounded-lg mx-4 text-3xl font-bold text-[#07D3D3]'>
                                <button><AiFillGithub></AiFillGithub></button>
                            </a>
                        </div>
                        <div className='wrapper'>
                            <div class="icon github">
                                <div class="tooltip">Client</div>
                                <a href="https://github.com/programming-hero-web-course2/phone-hunter-Emranul-Farhad"> <span><i class="fab fa-github">
                                    <AiFillGithub></AiFillGithub>
                                    </i></span></a>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>

                    </div>
                    <div class="modal-action">
                        <label for="doctormodal" class="btn"> CLose </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctormodal;


