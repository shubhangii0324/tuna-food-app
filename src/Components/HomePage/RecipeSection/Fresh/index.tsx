
import RecipeCard from '../../../../Common/RecipeCard';
import recipeData from '../../../../data/freshRecipeData.json';

function FreshRecipes() {
    const recipeId = "pumpkin-pie"

    return (
        <section>
            <h4 className="font-semibold text-2xl leading-10 text-black capitalize text-center md:text-left">Fresh Recipes</h4>
            <article className='flex flex-col gap-y-6 py-5 md:py-8'>
                {
                    recipeData && recipeData.length > 0 && recipeData.map((data, index) => (
                        <RecipeCard
                            key={data.title + '-' + index}
                            id={recipeId}
                            imageSrc={data.imageSrc}
                            caption={data.title}
                        />
                    ))
                }
            </article>
        </section>
    );
}

export default FreshRecipes;