import React from 'react';

import { BsFacebook, BsTelephoneFill, BsLinkedin, BsGithub } from 'react-icons/bs'
import { ImLocation2 } from 'react-icons/im'
import { MdEmail } from 'react-icons/md'

const Homecontact = () => {
    return (
        <div className=''>
            <div>
                <div className='text-left mx-[95px] flex'>
                    <h1 className='mb-10 text-3xl font-bold '> Want to <span className='text-[#07D3D3] font-extrabold'> Hire me ? </span></h1>
                    <div className='mt-4 mx-4 bg-black h-[1px] w-[300px] '> </div>
                </div>
            </div>
            <div className='container flex items-center flex-col lg:flex-row p-10'>
                <div className='flex shadow-2xl'>
                    <div className='p-10'>
                        
                        <div className='flex items-center mt-3'>
                            <p className=' text-[#07D3D3] font-bold text-2xl mr-2'> <ImLocation2></ImLocation2>  </p>
                            <h6 className=' font-bold'> Bondor,Chittagong,Bangladesh </h6>
                        </div>
                        <div className='flex items-center mt-3'>
                            <p className=' text-[#07D3D3] font-bold text-2xl mr-2'> <BsTelephoneFill></BsTelephoneFill>  </p>
                            <h6 className=' font-bold'> 01880084176 </h6>
                        </div>
                        <div className='flex items-center mt-3'>
                            <p className=' text-[#07D3D3] font-bold text-2xl mr-2'> <MdEmail></MdEmail> </p>
                            <h6 className=' font-bold'> Emranulfarhad@gmail.com </h6>
                        </div>
                        <div className='flex items-center mt-3'>
                            <p className=' text-[#07D3D3] font-bold text-2xl mr-2'> <BsLinkedin></BsLinkedin>  </p>
                            <a href="https://www.linkedin.com/in/yeasmin-akter-704411206/">
                                <h6 className=' font-bold'> Emranul Farhad  </h6>
                            </a>
                        </div>
                        <div className='flex items-center mt-3'>
                            <p className=' text-[#07D3D3] font-bold text-2xl mr-2'> <BsFacebook></BsFacebook> </p>
                            <a href="https://www.facebook.com/emranul.farhad">
                                <h6 className=' font-bold'> Emranul Farhad  </h6>
                            </a>
                        </div>
                        <div className='flex items-center mt-3'>
                            <p className=' text-[#07D3D3] font-bold text-2xl mr-2'> <BsGithub></BsGithub> </p>
                            <a href="https://github.com/Emranul-Farhad">
                                <h6 className=' font-bold'> Emranul Farhad  </h6>
                            </a>
                        </div>

                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <form action="">
                                <div className='flex mx-3 py-4 flex-col lg:flex-row'>
                                    <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs lg:mx-2 mb-3 lg:mb-0" />
                                    <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs  mb-3 lg:mb-0 " />
                                    <textarea className='input input-bordered input-primary w-full max-w-xs lg:mx-2 mb-3 lg:mb-0' name="" id="" placeholder='type your message' cols="30" rows="10"></textarea>
                                    {/* <button class="btn btn-info">Info</button> */}
                                    <input className='bg-[#07D3D3] btn btn-info ' type="submit" />
                                </div>                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homecontact;