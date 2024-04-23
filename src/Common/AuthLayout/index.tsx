import { Component } from 'react';
import Image from '../Image';
import LoginLayout from './Login';
import SignupLayout from './Signup';
import authCover from '../../assets/authCover.png'

interface Props {
    isLogin: boolean;
}

class AuthLayout extends Component<Props> {

    render() {
        const { isLogin } = this.props;
        const title = isLogin ? "Login to your account" : "create your account";

        return (
            <div className='flex justify-start px-5 md:px-0 ml-0 md:ml-[15.6vw] gap-x-24 relative h-full my-10 md:my-0'>
                <div className='flex flex-col justify-start mt-3 md:mt-8 gap-y-1 md:max-w-[35vw]'>
                    <p className='text-blue text-[1.2rem] md:text-[1.8rem] font-semibold leading-7 md:leading-[50px] uppercase'>{title}</p>
                    <div className='w-3/5 min-h-1 md:min-h-2 bg-red rounded-xl' />
                    {
                        isLogin ?
                            <LoginLayout />
                            :
                            <SignupLayout />
                    }
                </div>
                <div className='hidden md:flex justify-end basis-1/2 rounded-full max-w-[45%] absolute right-0'>
                    <Image
                        src={authCover}
                        className='object-cover rounded-s-[42px] w-full h-full'
                        alt="cover-img"
                    />
                </div>
            </div>
        );
    }
}

export default AuthLayout;