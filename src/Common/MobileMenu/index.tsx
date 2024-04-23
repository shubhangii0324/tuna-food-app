import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { logout } from '../../firebase/auth';

interface Props { }

const token = localStorage.getItem('token');

class MobileMenu extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        this.state = {
        };
    }
    handleLogout () {
        logout();
        localStorage.clear();
        window.location.replace("/login");
    }
    render() {
        return (
            <nav className='flex flex-col md:hidden'>
                <Link to={"/"} className='flex justify-center items-center text-primary py-3 text-center text-[0.9rem] font-bold leading-6 border-t border-solid border-gray'>Home</Link>
                <HashLink to={"#about"} className='flex justify-center items-center py-3 text-primary text-center text-[0.9rem] font-bold leading-6 border-t border-solid border-gray'>About Us</HashLink>
                <Link to={"/contact"} className='flex justify-center items-center py-3 text-primary text-center text-[0.9rem] font-bold leading-6 border-t border-solid border-gray'>Contact</Link>
                {
                    !token ?
                    <Link to={"/"} className='py-3 px-6 flex justify-center bg-secondary rounded items-center text-white text-center text-[0.9rem] font-bold leading-6'>Login/Register</Link>
                    :
                    <button className='py-3 px-10 flex justify-center bg-secondary rounded items-center text-white text-center text-[0.9rem] font-bold leading-6' onClick={this.handleLogout}></button>
                }
                <div className='border-b border-solid border-gray pt-5' />
            </nav>
        );
    }
};

export default MobileMenu;