import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Image from '../../../Common/Image';
import { CiMenuFries } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { useState } from 'react';
import MobileMenu from '../../../Common/MobileMenu';
import { logout } from '../../../firebase/auth';

function AppHeader() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const token = localStorage.getItem('token');
    const handleLogout = async () => {
        await logout();
        localStorage.clear();
        window.location.replace("/login");
    }

    return (
        <>
            <div className='flex justify-between w-full items-center px-5 md:px-0 md:mx-[15.6vw]'>
                <Link to={"/"} className='py-7 md:py-12'>
                    <Image
                        src='assets/logo.svg'
                        alt="tastebites-logo"
                        className='max-w-[161px]'
                    />
                </Link>
                <nav className='hidden md:flex justify-end items-center gap-x-[70px]'>
                    <Link to={"/"} className='flex justify-center items-center text-primary text-center text-[0.9rem] font-bold leading-6'>Home</Link>
                    <HashLink to={"#about"} className='flex justify-center items-center text-primary text-center text-[0.9rem] font-bold leading-6'>About Us</HashLink>
                    <Link to={"/contact"} className='flex justify-center items-center text-primary text-center text-[0.9rem] font-bold leading-6'>Contact</Link>
                    {
                        !token ?
                            <Link to={"/"} className='py-3 px-6 flex justify-center bg-secondary rounded items-center text-white text-center text-[0.9rem] font-bold leading-6'>Login/Register</Link>
                            :
                            <button className='py-3 px-10 flex justify-center bg-secondary rounded items-center text-white text-center text-[0.9rem] font-bold leading-6' onClick={handleLogout}>Logout</button>
                    }
                </nav>
                <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="block md:hidden">
                    {
                        showMobileMenu ?
                            <IoIosClose className='text-6xl font-bold text-red' />
                            :
                            <CiMenuFries className='text-4xl font-bold' />
                    }
                </button>
            </div>
            {
                showMobileMenu && (
                    <div className='block md:hidden bg-white w-full h-full py-5 px-6'>
                        <MobileMenu />
                    </div>
                )
            }
        </>
    );
}

export default AppHeader;
