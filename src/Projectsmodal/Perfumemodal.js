import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import one from '../Images/perfumeone.png'
import two from '../Images/perfumetwo.png'
import three from '../Images/perfumethree.png'
import { AiFillGithub } from 'react-icons/ai'
import { BsArrowUpRightCircleFill } from 'react-icons/bs'



const Perfumemodal = () => {
    return (
        <div>
             <div className='cursor-default modalcursor'>

<input type="checkbox" id="perfumemodal" class="modal-toggle cursor-default" />
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
        <h3 class="font-bold text-lg"> Fashion's Time </h3>
        <div className='flex items-center justify-center '>

            <div className='wrapper mt-5'>
                <div class="icon github">
                    <div class="tooltip">Live</div>
                    <a href="https://doctor-porta-74bcf.firebaseapp.com/" target='blank' > <span><i class="fab fa-github" >
                        <BsArrowUpRightCircleFill></BsArrowUpRightCircleFill>
                    </i></span></a>
                </div>
            </div>
            <div className='wrapper mt-5'>
                <div class="icon github">
                    <div class="tooltip">Client</div>
                    <a href="https://github.com/Emranul-Farhad/Perfume-site" target='blank' > <span><i class="fab fa-github" >
                        <AiFillGithub></AiFillGithub>
                    </i></span></a>
                </div>
            </div>
            <div className='wrapper mt-5'>
                <div class="icon github">
                    <div class="tooltip">Server</div>
                    <a href="https://github.com/Emranul-Farhad/perfume-server" target='blank'> <span><i class="fab fa-github">
                        <AiFillGithub></AiFillGithub>
                    </i></span></a>
                </div>
            </div>
        </div>
        <div className='flex items-center justify-center'>

        </div>
        <div class="modal-action">
            <label for="perfumemodal" class="btn"> CLose </label>
        </div>
    </div>
</div>
</div>
        </div>
    );
};

export default Perfumemodal;