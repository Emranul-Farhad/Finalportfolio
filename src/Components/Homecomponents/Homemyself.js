import React from 'react';
import intro from '../../Images/intro.jpg'


const Homemyself = () => {
    return (
        <div>
             <div className='flex flex-col lg:flex-row items-center  container'>
            <div className='basis-2/4 lg:mx-0 mx-5 '>
                    <h1 className='text-left text-3xl font-bold mb-3'>Who <span className='font-extrabold text-[#07D3D3]'> Am I</span></h1>
                    <h1 className=' text-accent font-[400] text-[17px] tracking-widest uppercase font-serif text-left'>I am a MERN Stack Web Developer a quick leraner person. I enjoy working closely with design/devlop teams to faithfully translate their designs right down to the last pixel.Build scalable and maintainable server applications using modern technology stacks such as Node.js, Express, and MongoDB. Being a diligent, hardworking and result oriented Guy, I always work towards achieving best result on each project I lay my hands on. </h1>
                </div>
                <div className='basis-2/4'>
                    <img src={intro} alt="" />
                </div>
              
            </div>
        </div>
    );
};

export default Homemyself;