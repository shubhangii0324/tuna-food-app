import { Component } from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image';

interface CollectionCardProps {
    imageSrc: string;
    caption: string;
    id: number;
    recipeCount: number;
}

interface CollectionCardState {}

class CollectionsCard extends Component<CollectionCardProps, CollectionCardState> {

    render() {
        const { imageSrc, caption, id, recipeCount } = this.props;

        return (
            <figure className="my-8 md:my-3 group">
                <Link to={`/${id}`} className="overflow-hidden inline-block">
                    <Image
                        src={imageSrc}
                        alt={caption}
                        className="group-hover:scale-125 transition-transform duration-700 cursor-pointer"
                    />
                </Link>
                <figcaption className="md:max-w-[68%]">
                    <div className='my-3 md:my-5 md:min-h-14 md:max-h-14'>
                    <h6 className="text-black text-lg font-semibold leading-6 capitalize mt-2 group-hover:text-red transition-transform duration-300">{caption}</h6>
                    </div>
                    <button className='border border-solid border-[#e500002d] bg-white rounded min-w-32 py-[10px] text-red text-xs font-normal'>{`${recipeCount} Recipes`}</button>
                </figcaption>
            </figure>
        );
    }
}

export default CollectionsCard;