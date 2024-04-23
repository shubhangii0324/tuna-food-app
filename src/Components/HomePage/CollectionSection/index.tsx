
import CollectionsCard from '../../../Common/CollectionsCard';
import collectionsData from '../../../data/collectionsData.json';

function CollectionSection() {

    return (
        <section className="flex flex-col bg-bg_footer w-full gap-y-28">
            <article className="md:max-w-[75%] px-5 md:px-0 mx-0 md:mx-[15.6vw] py-3 md:py-14">
                <h4 className="font-semibold text-3xl leading-10 text-black capitalize mb-10 text-center md:text-left">Curated Collections</h4>
                <div className="md:grid md:grid-cols-3 justify-between gap-x-9 gap-y-4">
                    {
                        collectionsData && collectionsData.length > 0 && collectionsData.map((data, index) => (
                            <CollectionsCard
                                key={data.title + '-' + index}
                                id={data.id}
                                imageSrc={data.imageSrc}
                                caption={data.title}
                                recipeCount={data.recipeCount}
                            />
                        ))
                    }
                </div>
            </article>
        </section>
    );
}

export default CollectionSection;