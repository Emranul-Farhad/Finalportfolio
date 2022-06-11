import React from 'react';
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import three from '../Images/DoctorThree.png'
import './Modal.css'
import { AiFillGithub } from 'react-icons/ai'
import { BsArrowUpRightCircleFill } from 'react-icons/bs'
import oneapar from '../Images/aparone.png'
import twoapar from '../Images/apartwo.png'
import threeapar from '../Images/aparthree.png'

const Aparmodal = () => {
    return (
        <div className='cursor-default modalcursor'>

        <input type="checkbox" id="aparmodal" class="modal-toggle cursor-default" />
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
                        <img className='' src={oneapar} />
                    </SwiperSlide >
                    <SwiperSlide className='w-[50%] cursor-default'>
                        <img src={twoapar} />
                    </SwiperSlide>
                    <SwiperSlide className='w-[50%] cursor-default' >
                        <img src={threeapar} />
                    </SwiperSlide>
                </Swiper>
                <h3 class="font-bold text-lg mt-2"> Apar motors </h3>
                <div className='flex items-center justify-center '>

                    <div className='wrapper mt-5'>
                        <div class="icon github">
                            <div class="tooltip">Live</div>
                            <a href="https://apar-motors.firebaseapp.com/" target='blank' > <span><i class="fab fa-github" >
                                <BsArrowUpRightCircleFill></BsArrowUpRightCircleFill>
                            </i></span></a>
                        </div>
                    </div>
                    <div className='wrapper mt-5'>
                        <div class="icon github">
                            <div class="tooltip">Client</div>
                            <a href="https://github.com/Emranul-Farhad/Car-parts-store-client" target='blank' > <span><i class="fab fa-github" >
                                <AiFillGithub></AiFillGithub>
                            </i></span></a>
                        </div>
                    </div>
                    <div className='wrapper mt-5'>
                        <div class="icon github">
                            <div class="tooltip">Server</div>
                            <a href="https://github.com/Emranul-Farhad/car-parts-store-server" target='blank'> <span><i class="fab fa-github">
                                <AiFillGithub></AiFillGithub>
                            </i></span></a>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center'>

                </div>
                <div class="modal-action">
                    <label for="aparmodal" class="btn"> CLose </label>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Aparmodal;