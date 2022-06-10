import React from 'react';
import IoLocationSharp from 'react-icons/io' 
import {BsFacebook} from 'react-icons/bs'
import {ImLocation2} from 'react-icons/im'

const Homecontact = () => {
    return (
        <div className=''>
            <div>
                <div className='text-left mx-[95px] flex'>
                    <h1 className='mb-20 text-3xl font-bold '> Want to <span className='text-[#07D3D3] font-extrabold'> Hire me ? </span></h1>
                    <div className='mt-4 mx-4 bg-black h-[1px] w-[300px] '> </div>
                </div>
            </div>
          <div className='container'>
          <div className='flex'>
                <div>
                  <div className='flex'>
                    <h6> Chittagong ,Bondor potenga </h6>
                    <p> <ImLocation2></ImLocation2>  </p>
                  </div>
                </div>
                <div>

                </div>
            </div>
          </div>
        </div>
    );
};

export default Homecontact;