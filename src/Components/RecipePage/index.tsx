import Image from "../../Common/Image";
import RecipeContent from "../../Common/RecipeContent";
import recipe from "../../data/recipe.json";
import recipeCoverImg from '../../assets/recipeCover.svg';


function RecipePage() {

    return (
        <section className="flex flex-col md:max-w-[75%] px-5 md:px-0 mx-0 md:mx-[15.6vw] gap-y-10">
            <Image
                src={recipeCoverImg}
                alt="recipe-img"
                className="w-full"
            />
            <h4 className="font-semibold text-3xl leading-10 text-black capitalize text-center md:text-left">Pumpkin marshmallow pie</h4>
            <div className="bg-bg_footer w-full px-5 md:px-20 py-8 md:py-16 flex flex-col gap-y-8">
                <h6 className="font-semibold text-2xl leading-7 text-black capitalize">Recipe</h6>
                    <RecipeContent
                        foodItem={recipe.foodItem}
                        ingredients={recipe.ingredients}
                        instructions={recipe.instructions}
                    />
            </div>
        </section>
    );
}

export default RecipePage;
