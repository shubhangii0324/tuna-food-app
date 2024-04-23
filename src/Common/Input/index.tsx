import { Component, ChangeEvent } from 'react';

interface ValidationRule {
    required?: boolean;
    message?: string;
    pattern?: RegExp;
    min?: number;
    match?: string;
}

interface Props {
    type: string;
    name: string;
    value: string;
    placeholder: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    validationRules?: ValidationRule[];
    matchedValue?: string;
}

interface State {
    isValid: boolean;
    validationMessages: string[];
}

class Input extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isValid: true,
            validationMessages: [],
        };
    }

    validate = (value: string) => {
        const { validationRules, matchedValue } = this.props;
        let isValid = true;
        const validationMessages: string[] = [];

        if (validationRules && validationRules.length > 0) {
            validationRules.forEach(rule => {
                if (rule.required && !value) {
                    isValid = false;
                    validationMessages.push(rule.message || 'This field is required.');
                }
                if (rule.pattern && !rule.pattern.test(value)) {
                    isValid = false;
                    validationMessages.push(rule.message || 'Invalid value.');
                }
                if (rule.min && value.length < rule.min) {
                    isValid = false;
                    validationMessages.push(rule.message || `Value must be at least ${rule.min} characters.`);
                }
                if (rule.match && value !== matchedValue) {
                    isValid = false;
                    validationMessages.push(rule.message || 'Passwords do not match.');
                }
            });
        }

        this.setState({ isValid, validationMessages });
    };

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { onChange } = this.props;
        const { value } = e.target;

        this.validate(value);
        if (onChange) {
            onChange(e);
        }
    };

    render() {
        const { type, placeholder, name, value } = this.props;
        const { isValid, validationMessages } = this.state;

        return (
            <>
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={this.handleChange}
                    className={`outline-none border-b-2 ${isValid ? 'border-[#E6E8EB]' : 'border-red'} text-gray text-base font-normal leading-6 pb-[14px] w-full`}
                />
                {!isValid && validationMessages.map((message, index) => (
                    <p key={index} className="text-red text-base leading-6 font-normal">{message}</p>
                ))}
            </>
        );
    }
}

export default Input;