import React from 'react';
import Homecontact from '../Components/Homecomponents/Homecontact';
import Homelanguages from '../Components/Homecomponents/Homelanguages';
import Homemyself from '../Components/Homecomponents/Homemyself';
import Homeprojects from '../Components/Homecomponents/Homeprojects';
import resume from '../Images/MERN Stack Developer.pdf'
import Footer from '../Shared/Footer';


const Home = () => {
    return (
       <div className='lg:mx-20'>
         <div className='mx-auto'>
              <div className='flex flex-col lg:flex-row items-center'>
            <div className='basis-2/4'>  
                <img  alt="Coder GIF" src="https://miro.medium.com/max/1360/0*7Q3yvSIv_t0ioJ-Z.gif" />
                </div>
                <div className='basis-2/4'>
                    <h1 className='text-6xl font-[600]  text-left'> Hi, My
                     <br /> Name is <span className='font-bold text-[#07D3D3]'>Emranul 👋  </span> 
                     </h1>
                    <h1 className='text-left mt-3 font-serif'>i'm an independent creative<span className='font-bold '> MERN Stak Web Developer</span> from <span className='font-bold'>Bangladesh, Asia</span> </h1>
                    <div className='text-center mt-3 font-serif p-2 rounded-md font-bold bg-[#07D3D3] w-[120px] '><a href={resume} download="resume.pdf">Resume</a> </div>
                </div>              
            </div>
        </div>
        {/* myself */}
        <div className='mt-[130px]'>
            <Homemyself></Homemyself>
        </div>
        {/* languagest my skill test */}
        <div className='mt-[120px]'>
            <Homelanguages></Homelanguages>
        </div>
        {/* my projects */}
        <div className='mt-[120px]'>
            <Homeprojects></Homeprojects>
        </div>
        {/* ?contact */}
        <div className='mt-[120px]'>
            <Homecontact></Homecontact>
        </div>

        <div className='mt-5'>
        <Footer></Footer>
        </div>
       </div>
    );
};

export default Home;