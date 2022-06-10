import React from 'react';
import { BsFacebook, BsTelephoneFill, BsLinkedin, BsGithub } from 'react-icons/bs'
import { ImLocation2 } from 'react-icons/im'
import { MdEmail } from 'react-icons/md'
// import emailjs from '@emailjs/browser';
import emailjs from "emailjs-com";
import Swal from 'sweetalert2';




const Homecontact = () => {

   
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_29gj1ew', 'template_bh5zs9i', e.target, 'oDgZgX2CecmgJ6DSM')
        .then((result) => {
        // console.log(result.text);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'we will message you soon !',
            showConfirmButton: false,
            timer: 1500
          })
        },
         (error) => {
        console.log(error.text);
        Swal.fire({
            title: ' something happend try again ',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
        });
        e.target.reset()
        }
       
        


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
                            <form onSubmit={sendEmail} >
                                <div className='flex mx-3 py-4 flex-col lg:flex-row'>
                                    <input type="text" name='name' placeholder="input your name" class="input input-bordered input-primary w-full max-w-xs lg:mx-2 mb-3 lg:mb-0" required />
                                    <input type="text" placeholder="Type your email" name='email' class="input input-bordered input-primary w-full max-w-xs  mb-3 lg:mb-0 " required />
                                    <textarea  className='input input-bordered input-primary w-full max-w-xs lg:mx-2 mb-3 lg:mb-0' name="message" id="" placeholder='type your message' cols="30" rows="10" required></textarea>
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