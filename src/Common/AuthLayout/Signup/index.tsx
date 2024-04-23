import { ChangeEvent, Component } from 'react';
import { Link } from 'react-router-dom';
import { registerWithEmailAndPassword } from '../../../firebase/auth';
import Input from '../../Input';

interface SignupLayoutProps {}

interface State {
    email: string;
    phoneNumber: string;
    password: string;
    reEnterPassword: string;
}

class SignupLayout extends Component<SignupLayoutProps, State> {
    constructor(props: SignupLayoutProps) {
        super(props);
        this.state = {
            email: '',
            phoneNumber: '',
            password: '',
            reEnterPassword: '',
        };
    }

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({ [name]: value } as Pick<State, keyof State>);
    };

    handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { email, password, phoneNumber, reEnterPassword } = this.state;
        if(!email || !password || !phoneNumber || !reEnterPassword) {
            alert("Please fill in all the required fields in order to register");
        } else {
            await registerWithEmailAndPassword(email, password).then((userCredentials) => {
                const user = userCredentials?.user;
                if(user) {
                    localStorage.setItem('token', user?.uid);
                    localStorage.setItem('user', JSON.stringify(user));
                }
            }).then(() => {
                window.location.replace("/");
            }).catch((error) => {
                console.log(error);
            })
        }
    }

    render() {
        const { email, phoneNumber, password, reEnterPassword } = this.state;

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
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number*"
                    value={phoneNumber}
                    onChange={this.handleChange}
                    validationRules={[
                        { required: true, message: 'Phone number is required.' },
                        { pattern: /^[0-9]{10}$/, message: 'Phone number must be 10 digits.' },
                    ]}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Enter Password*"
                    value={password}
                    onChange={this.handleChange}
                    validationRules={[
                        { required: true, message: 'Password is required.' },
                        { min: 8, message: 'Password must be at least 8 characters long.' },
                    ]}
                />
                <Input
                    type="password"
                    name="reEnterPassword"
                    placeholder="Re-enter Password*"
                    value={reEnterPassword}
                    onChange={this.handleChange}
                    validationRules={[
                        { required: true, message: 'Please re-enter your password.' },
                        { match: password, message: 'Passwords do not match.' },
                    ]}
                    matchedValue={password}
                />
                <button type='submit' className='flex w-full md:w-[182px] py-3 px-6 justify-center items-center gap-3 rounded bg-black text-white text-base font-semibold leading-6 capitalize mt-5'>Signup</button>
                <p className='-mt-1 text-black text-base font-normal leading-6'>
                    Already have an account?
                    <Link to={"/"} className='font-semibold ml-1'>
                        Login
                    </Link>
                </p>
            </form>
        );
    }
}

export default SignupLayout;