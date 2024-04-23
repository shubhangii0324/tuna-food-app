import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Image from '../../../Common/Image';

function AppFooter() {
    return (
        <div className='flex flex-col w-full items-center px-5 md:px-0 mx-0 md:mx-[15.6vw]'>
            <div className='w-full'>
                <div className='md:flex justify-between'>
                    <Link to={"/"} className='py-3 md:py-12 flex justify-center md:block'>
                        <Image
                            src='assets/logo.svg'
                            alt="tastebites-logo"
                        />
                    </Link>
                    <nav className='md:flex justify-end items-center gap-x-[70px]'>
                        <Link to={"/"} className='flex justify-center items-center text-black text-center text-[0.8rem] font-medium leading-6'>Home</Link>
                        <HashLink to={"#about"} className='flex justify-center items-center text-black text-center text-[0.8rem] font-medium leading-6'>About</HashLink>
                        <Link to={"/contact"} className='flex justify-center items-center text-black text-center text-[0.8rem] font-medium leading-6'>Contact</Link>
                        <Link to={"/"} className='flex justify-center items-center text-black text-center text-[0.8rem] font-medium leading-6'>Article</Link>
                    </nav>
                </div>
            </div>
            <div className='w-full border-b border-[#C9C9C9] mb-12 mt-1 hidden md:block' />
            <div className='text-[0.8rem] text-black font-normal leading-6 mt-5 md:mt-0'>2024 © Copyright | All Rights Reserved</div>
        </div>
    );
}

export default AppFooter;
