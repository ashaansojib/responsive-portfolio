import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaTwitter, FaPhoneAlt, FaDownload, FaMapMarkerAlt, FaCalendarAlt, FaEnvelopeOpen } from 'react-icons/fa';

const SideBar = () => {
    return (
        <aside className='bg-gray-100 pb-2 rounded-lg'>
            {/* banner and social section */}
            <div className='flex-center'>
                <div className='w-[275px] text-center p-6'>
                    <img className='overflow-hidden rounded-lg' src="/profile.png" alt="" />
                    <h2 className='p-2 text-xl font-semibold'>Ashaduzzaman Sojib</h2>
                    <h3 className='p-2 font-medium bg-gray-50 rounded-md'>MERN Stack Developer</h3>
                    <div className='pt-4'>
                        <button className='social-icons'><Link target='_blank' to="www.facebook.com/khusbusojib"><FaLinkedinIn></FaLinkedinIn></Link></button>
                        <button className='social-icons'><Link target='_blank' to="www.facebook.com/khusbusojib"><FaGithub></FaGithub></Link></button>
                        <button className='social-icons'><Link target='_blank' to="www.facebook.com/khusbusojib"><FaFacebookF></FaFacebookF></Link></button>
                        <button className='social-icons'><Link target='_blank' to="www.facebook.com/khusbusojib"><FaTwitter></FaTwitter></Link></button>
                    </div>
                </div>
            </div>
            {/* basic contact */}
            <div className='p-4'>
                <div className='border-b py-2'>
                    <span className='flex gap-2 items-center'><FaPhoneAlt className='text-[#E32E6E]'></FaPhoneAlt> Phone</span>
                    <p>+880(1892932859)</p>
                </div>
                <div className='border-b py-2'>
                <span className='flex gap-2 items-center'><FaEnvelopeOpen className='text-[#E32E6E]'></FaEnvelopeOpen> Email</span>
                    <p>ashaduzzamansojib67@gmail.com</p>
                </div>
                <div className='border-b py-2'>
                <span className='flex gap-2 items-center'><FaMapMarkerAlt className='text-[#E32E6E]'></FaMapMarkerAlt> Place</span>
                    <p>Dhaka, Bangladesh</p>
                </div>
                <div className='border-b py-2'>
                <span className='flex gap-2 items-center'><FaCalendarAlt className='text-[#E32E6E]'></FaCalendarAlt> Birthday</span>
                    <p>6 March 2023</p>
                </div>
            </div>
            {/* cv download section */}
            <div className='flex-center'>
            <Link to="#">
            <button className="download-btn"><FaDownload></FaDownload> 
              Download CV
            </button>
          </Link>
            </div>
        </aside>
    );
};

export default SideBar;