import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsFillJournalBookmarkFill } from 'react-icons/bs'
import {FcReading, FcDownload, FcHome} from 'react-icons/fc'
import resume from '../Images/MERN Stack Developer.pdf' 


const Nav = () => {


    return (
        <div className='z-50' >
            <div className='z-50'>
                <div class="bg-gray-200 static uppercase font-semibold rounded-lg flex md:flex-col md:ml-1 shadow-lg border-gray-600 justify-around md:h-screen md:w-16 fixed w-screen bottom-0 z-[100]">

                    <NavLink to='/' >
                        <div class="md:p-5 p-3 delay-75 duration-500 ease-in-out transform hover:scale-125 hover:-rotate-12">
                            
                            <FcHome className=' h-6 w-6'></FcHome>
                        </div>
                    </NavLink>

                    
                        <div class="hover:shadow-md p-4 rounded-full duration-1000 ease-in-out transform hover:scale-125 delay-200 hover:rotate-180 text-3xl font-bold text-center bg-gradient-to-br
                     from-[#07D3D3] to-[#00FFBB] md:p-5 ">                         
                           <a href={resume} download > <FcDownload className='h-6 w-6'></FcDownload> </a>
                        </div>
                    
                    <NavLink to='/blog' >
                        <div class="md:p-5 p-3 delay-75 duration-500 ease-in-out transform hover:scale-125 hover:-rotate-12">
                            <FcReading className='text-black h-6 w-6 font-bold text-2xl'></FcReading>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Nav;