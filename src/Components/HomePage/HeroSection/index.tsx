import HeroCard from "../../../Common/HeroCard";
import Image from "../../../Common/Image";
import heroData from '../../../data/heroData.json';
import aboutCover from '../../../assets/about.svg';

function HeroSection() {

    return (
        <section className="flex flex-col md:max-w-[75%] px-5 md:px-0 mx-0 md:mx-[15.6vw] gap-y-10 md:gap-y-28">
            <article className="md:flex items-start gap-x-5">
                {
                    heroData && heroData.length > 0 && heroData.map((data, index) => (
                        <HeroCard
                            key={data.title + '-' + index}
                            id={data.id}
                            imageSrc={data.imageSrc}
                            caption={data.title}
                            rating={data.rating}
                        />
                    ))
                }
            </article>
            <article id="about" className="w-full bg-white shadow-about md:flex justify-start py-8 px-5 md:pl-8 md:pr-[3vw] gap-x-12">
                <div>
                    <Image
                        src={aboutCover}
                        alt="about"
                        className="md:max-w-[27vw]"
                    />
                </div>
                <div className="flex flex-col pt-[1vw] md:pt-[2vw] gap-y-3">
                    <h4 className="font-semibold text-3xl leading-10 text-black capitalize text-center md:text-left">About US</h4>
                    <div className="flex flex-col gap-y-7 items-center md:items-start">
                        <p className="text-[#556070] text-sm font-light leading-7 text-center md:text-left">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <button className="bg-black text-white py-2 px-4 rounded max-w-[120px] uppercase text-sm leading-[24px] font-normal">Read More</button>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default HeroSection;