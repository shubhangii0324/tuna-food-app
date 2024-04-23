import { Component } from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image';

interface RecipeCardProps {
    imageSrc: string;
    caption: string;
    id: string;
}

interface RecipeCardState { }

class RecipeCard extends Component<RecipeCardProps, RecipeCardState> {

    render() {
        const { imageSrc, caption, id } = this.props;

        return (
            <figure className="group">
                <Link to={`/recipe/${id}`} className="overflow-hidden inline-block">
                    <Image
                        src={imageSrc}
                        alt={caption}
                        className="group-hover:scale-125 transition-transform duration-700 cursor-pointer"
                    />
                </Link>
                <figcaption>
                    <h6 className="text-black text-base font-medium md:font-normal leading-5 capitalize mt-2 group-hover:text-red transition-transform duration-300">{caption}</h6>
                </figcaption>
            </figure>
        );
    }
}

export default RecipeCard;