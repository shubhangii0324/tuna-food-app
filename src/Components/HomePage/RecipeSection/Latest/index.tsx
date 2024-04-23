
import { Link } from 'react-router-dom';
import Image from '../../../../Common/Image';
import latestRecipeImg from '../../../../assets/recipes/latest.svg';
import profileIcon from '../../../../assets/userProfileIcon.svg';

function LatestRecipes() {
    const recipeId = "pumpkin-pie"
    return (
        <section>
            <h4 className="font-semibold text-2xl leading-10 text-black capitalize text-center md:text-left">Latest Recipes</h4>
            <article className='flex flex-col gap-y-5 py-5 md:py-8'>
                {
                    [...Array(2)].map((item, index) => (
                        <Link key={recipeId + index} to={`/recipe/${recipeId}`} className='bg-white border border-solid border-[#E1E1E1]'>
                            <div className=''>
                                <Image
                                    src={latestRecipeImg}
                                    alt='latest-recipe'
                                />
                            </div>
                            <div className='flex flex-col px-10 gap-y-2 py-6'>
                                <h6 className='text-lg text-black font-semibold leading-10 capitalize'>Pumpkin marshmallow pie</h6>
                                <p className='text-[#556070] text-xs leading-6 font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <div className='flex justify-between items-center py-4'>
                                    <div className="flex justify-start items-center gap-x-3">
                                        <Image
                                            src={profileIcon}
                                            alt='user-icon'
                                            className='w-9 h-9'
                                        />
                                        <p className='text-sm leading-6 font-normal'>John Doe</p>
                                    </div>
                                    <div className="flex justify-end items-center">
                                        <p className='text-[#868686] text-sm leading-6 font-normal'>Yesterday</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </article>
        </section>
    );
}

export default LatestRecipes;