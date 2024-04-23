import React from 'react';

interface Props {
    src: string;
    alt: string;
    className?: string;
}

interface State {
    optimizedUrl: string;
}

class Image extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            optimizedUrl: `${process.env.PUBLIC_URL}/${props.src}`,
        };
    }
    render() {
        const { alt, className } = this.props;
        return <img src={this.state.optimizedUrl} alt={alt} className={className} />;
    }
}

export default Image;