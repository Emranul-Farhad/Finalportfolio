import React from 'react';


const Footer = () => {
    return (
        <div className='mt-[150px]'>
            <h6 className='font-bold '> &#169; {new Date().getFullYear()} All Rights Reserve by <span className='text-[#07D3D3] font-bold text-[20px] '>Emranul</span> </h6>
        </div>
    );
};

export default Footer;