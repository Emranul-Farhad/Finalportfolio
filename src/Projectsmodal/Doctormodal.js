import React from 'react';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import one from '../Images/doctorOne.png'
import two from '../Images/doctorTwo.png'
import three from '../Images/DoctorThree.png'

const Doctormodal = () => {


    return (
        <div className='cursor-default'>

            <input type="checkbox" id="doctormodal" class="modal-toggle cursor-default" />
            <div class="modal">
                <div class="modal-box w-11/12 max-w-5xl cursor-default">
                <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        loop = {true}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide className='w-[50%]'>
                            <img className='' src={one} />
                        </SwiperSlide >
                        <SwiperSlide className='w-[50%]'>
                            <img src= {two}/>
                        </SwiperSlide>
                        <SwiperSlide className='w-[50%]' >
                            <img src= {three}/>
                        </SwiperSlide>                           
                    </Swiper>
                    <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <label for="doctormodal" class="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctormodal;


