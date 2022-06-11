import React from 'react';
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import three from '../Images/DoctorThree.png'
import './Modal.css'


const Aparmodal = () => {
    return (
        <div>
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
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        
                        <SwiperSlide className='w-[500px] h-[50%]'>
                            <div >
                            <img className='w-[100%] block' src={three}/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='w-[500px] h-[50%]'>
                            <div>
                            <img className='w-[100%] block' src="https://swiperjs.com/demos/images/nature-6.jpg" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='w-[40] h-[400px]'>
                            <div >
                            <img className='w-[100%] block' src="https://swiperjs.com/demos/images/nature-6.jpg" />
                            </div>
                        </SwiperSlide>
                        
                    </Swiper>
        </div>
    );
};

export default Aparmodal;