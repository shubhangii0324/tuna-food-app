
import FreshRecipes from './Fresh';
import LatestRecipes from './Latest';

function RecipeSection() {

    return (
        <section className="md:grid md:grid-cols-3 gap-x-7 md:max-w-[75%] px-5 md:px-0 mx-0 md:mx-[15.6vw] gap-y-28 justify-between">
            <article className="md:col-span-2">
                <LatestRecipes />
            </article>
            <article className="md:col-span-1">
            <FreshRecipes />
            </article>
        </section>
    );
}

export default RecipeSection;