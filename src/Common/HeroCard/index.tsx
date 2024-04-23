import { Component } from 'react';
import { Link } from 'react-router-dom';
import { IoStarSharp } from 'react-icons/io5';
import Image from '../Image';

interface HeroCardProps {
    imageSrc: string;
    caption: string;
    id: number;
    rating: number;
}

interface RatingProps {
    initRating: number;
}

interface HeroCardState { }

interface RatingState {
    rating: number;
}

class RatingComponent extends Component<RatingProps, RatingState> {
    constructor(props: RatingProps) {
        super(props);
        this.state = {
            rating: props.initRating,
        };
    }

    handleRatingChange = (givenRating: number) => {
        this.setState({ rating: givenRating });
    };

    handleStarLeave = () => {
        const { initRating } = this.props;
        this.setState({ rating: initRating });
    };

    render() {
        const { rating } = this.state;
        return (
            [...Array(5)].map((item, index) => {
                const givenRating = index + 1;
                return (
                    <span
                        key={'star' + index}
                        className='star'
                        onClick={() => this.handleRatingChange(givenRating)}
                    >
                        <IoStarSharp
                            key={rating >= givenRating ? 'filled' : 'empty'}
                            className={`text-${rating >= givenRating ? 'red' : 'gray'} text-2xl`}
                        />
                    </span>
                );
            })
        );
    }
}

class HeroCard extends Component<HeroCardProps, HeroCardState> {

    render() {
        const { imageSrc, caption, id, rating } = this.props;

        return (
            <figure className="my-6 md:my-3 group">
                <Link to={`/${id}`} className="overflow-hidden inline-block">
                    <Image
                        src={imageSrc}
                        alt={caption}
                        className="md:max-w-[310px] group-hover:scale-125 transition-transform duration-700 cursor-pointer"
                    />
                </Link>
                <figcaption className="px-2 md:px-4 max-w-[90%]">
                    <div className="flex justify-start gap-x-1">
                        <RatingComponent initRating={rating} />
                    </div>
                    <h6 className="text-black text-lg font-semibold leading-6 capitalize mt-2 group-hover:text-red transition-transform duration-300">{caption}</h6>
                </figcaption>
            </figure>
        );
    }
}

export default HeroCard;