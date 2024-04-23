import React, { ChangeEvent, Component } from 'react';
import { Link } from 'react-router-dom';
import { loginWithEmailAndPassword } from '../../../firebase/auth';
import Input from '../../Input';

interface LoginLayoutProps {}

interface State {
    email: string;
    password: string;
}

class LoginLayout extends Component<LoginLayoutProps, State> {
    constructor(props: LoginLayoutProps) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({ [name]: value } as Pick<State, keyof State>);
    };

    handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { email, password } = this.state;
        if(!email || !password) {
            alert("Please fill in all the required fields in order to login");
        } else {
            await loginWithEmailAndPassword(email, password).then((userCredentials) => {
                const user = userCredentials?.user;
                if(user) {
                    localStorage.setItem('token', user?.uid);
                    localStorage.setItem('user', JSON.stringify(user));
                }
            }).then(() => {
                window.location.replace("/");
            }).catch((error) => {
                console.log(error);
            });
        }
    }

    render() {
        const { email, password } = this.state;

        return (
            <form onSubmit={this.handleSubmit} className='flex flex-col mr-auto mt-6 gap-y-5 items-start'>
                <p className='text-gray text-base font-normal leading-6'>There are many variations of passages of Lorem Ipsu available, but the majority have suffered alte.</p>
                <Input
                    type="text"
                    name="email"
                    placeholder="Email*"
                    value={email}
                    onChange={this.handleChange}
                    validationRules={[
                        { required: true, message: 'Email is required.' },
                        { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email is not valid.' },
                    ]}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Password*"
                    value={password}
                    onChange={this.handleChange}
                    validationRules={[
                        { required: true, message: 'Password is required.' },
                        { min: 8, message: 'Password must be at least 8 characters long.' },
                        // Add more password validation rules as needed
                    ]}
                />
                <div className='-mt-2 relative w-full'>
                    <p className='text-red text-base leading-6 font-normal absolute right-0'>Forgot password?</p>
                </div>
                <button type='submit' className='flex w-full md:w-[182px] py-3 px-6 justify-center items-center gap-3 rounded bg-black text-white text-base font-semibold leading-6 capitalize mt-5'>Login</button>
                <p className='-mt-1 text-black text-base font-normal leading-6'>
                    Don’t have an account?
                    <Link to={"/signup"} className='font-semibold ml-1'>
                        Register now!
                    </Link>
                </p>
            </form>
        );
    }
}

export default LoginLayout;