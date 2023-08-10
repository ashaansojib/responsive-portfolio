import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <aside className='bg-gray-300 pb-2 rounded-lg'>
            {/* banner and social section */}
            <div className='flex-center'>
                <div className='w-[275px] text-center p-6'>
                    <img className='overflow-hidden rounded-lg' src="/profile.png" alt="" />
                    <h2 className='p-2 text-xl font-semibold'>Ashaduzzaman Sojib</h2>
                    <h3 className='p-2 font-medium bg-gray-50 rounded-md'>MERN Stack Developer</h3>
                    <div className='pt-2'>
                        <button className='social-icons'>50</button>
                        <button className='social-icons'>50</button>
                        <button className='social-icons'>50</button>
                        <button className='social-icons'>50</button>
                    </div>
                </div>
            </div>
            {/* basic contact */}
            <div className='p-4'>
                <div className='border-b py-2'>
                    <span>Phone</span>
                    <p>+880(1892932859)</p>
                </div>
                <div className='border-b py-2'>
                    <span>Email</span>
                    <p>ashaduzzamansojib67@gmail.com</p>
                </div>
                <div className='border-b py-2'>
                    <span>Place</span>
                    <p>Dhaka, Bangladesh</p>
                </div>
                <div className='border-b py-2'>
                    <span>Birthday</span>
                    <p>6 March 2023</p>
                </div>
            </div>
            {/* cv download section */}
            <div className='flex-center'>
            <Link to="#">
            <button className="download-btn">
              Download CV
            </button>
          </Link>
            </div>
        </aside>
    );
};

export default SideBar;