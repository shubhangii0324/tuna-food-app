import React from 'react';

interface Props {
    src: string;
    alt: string;
    className?: string;
}

interface State {}

class Image extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }
    render() {
        const { alt, className, src } = this.props;
        return <img src={src} alt={alt} className={className} />;
    }
}

export default Image;