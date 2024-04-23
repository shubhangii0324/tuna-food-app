import { ChangeEvent, Component } from 'react';
import Image from '../../Common/Image';
import Input from '../../Common/Input';
import mailIcon from '../../assets/icons/mailIcon.svg';
import contactCover from '../../assets/contactCover.svg';

interface Props { }

interface State {
    name: string;
    email: string;
    phone: string;
    message: string;
}

class ContactUs extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: ''
        };
    }

    handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        this.setState({ [name]: value } as Pick<State, keyof State>);
    };

    render() {

        const { name, email, phone, message } = this.state;

        return (
            <div className='flex justify-start px-5 md:px-0 ml-0 md:ml-[15.6vw] gap-x-24 relative h-full my-10 md:my-0'>
                <div className='flex flex-col justify-start gap-y-1 md:max-w-[30vw]'>
                    <p className='text-blue text-[1.2rem] md:text-[1.8rem] font-semibold leading-7 md:leading-[50px] uppercase'>Leave us a message</p>
                    <div className='w-3/5 min-h-1 md:min-h-2 bg-red rounded-xl' />
                    <div className='flex flex-col mr-auto mt-6 gap-y-5 items-start'>
                        <p className='text-gray text-sm font-normal leading-6'>There are many variations of passages of Lorem Ipsu available, but the majority have suffered alte.</p>
                        <Input
                            type="text"
                            name="name"
                            placeholder="Name*"
                            value={name}
                            onChange={this.handleChange}
                            validationRules={[
                                { required: true, message: 'Name is required.' },
                            ]}
                        />
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
                            name="phone"
                            placeholder="Phone"
                            value={phone}
                            onChange={this.handleChange}
                            validationRules={[
                                { pattern: /^[0-9]{10}$/, message: 'Phone number must be 10 digits.' },
                            ]}
                        />
                        <textarea
                            name='message'
                            placeholder='Message*'
                            value={message}
                            className={`outline-none border-b-2 border-[#E6E8EB] text-gray text-base font-normal leading-6 pb-[14px] w-full`}
                            onChange={this.handleChange} 
                            rows={3}
                        />
                        <button className='flex w-full md:w-32 py-3 px-3 justify-center items-center gap-3 rounded bg-black text-white text-base font-semibold leading-6 capitalize mt-2'>
                            Submit
                            <Image
                                src={mailIcon}
                                alt="mail-icon"
                            />
                        </button>
                    </div>
                </div>
                <div className='hidden md:flex justify-end basis-1/2 rounded-full max-w-[40vw] absolute right-0'>
                    <Image
                        src={contactCover}
                        className='object-cover rounded-s-[42px] w-full h-full'
                        alt="contact-cover"
                    />
                </div>
            </div>
        );
    }
}

export default ContactUs;