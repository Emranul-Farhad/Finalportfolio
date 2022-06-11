import React from 'react';
import img from '../Images/AvatarMaker.png'

const Blog = () => {
    return (
        <div className='mt-20 text-2xl '>
           
            <div className='w-[20%] flex justify-center  mx-auto'>      
                <div>
                   <img className='rounded-2xl' src={img} alt="" />
                </div>
            </div>
            <h1 className='mt-3 text-2xl font-bold uppercase text-[#07D3D3]'>Coming Soon..</h1>
        </div>
    );
};

export default Blog;