import CollectionSection from "./CollectionSection";
import HeroSection from "./HeroSection";
import RecipeSection from "./RecipeSection";

function HomePage() {

    return (
        <section className="flex flex-col w-full gap-y-5 md:gap-y-20">
            <HeroSection />
            <CollectionSection />
            <RecipeSection />
        </section>
    );
}

export default HomePage;
