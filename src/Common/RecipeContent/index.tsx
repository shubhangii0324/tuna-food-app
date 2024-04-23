import React from 'react';

interface Props {
    foodItem: string;
    ingredients: string[];
    instructions: string[];
}

interface State {
}

class RecipeContent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { foodItem, ingredients, instructions } = this.props;
        return (
            <div className='flex flex-col gap-y-6 text-[0.9rem] leading-8 md:leading-10'>
                <div>
                    <p>Here's a simple recipe for {foodItem}:</p>
                </div>
                <div>
                    <p>Ingredients:</p>
                    {
                        ingredients && ingredients.length > 0 && ingredients.map((ingredient, index) => (
                            <div key={ingredient + index} className='flex flex-col'>
                                <p>{`- ${ingredient}`}</p>
                            </div>
                        ))
                    }
                </div>
                <div>
                <p>Instructions:</p>
                    {
                        instructions && instructions.length > 0 && instructions.map((instruction, index) => (
                            <div key={instruction + index} className='flex justify-start gap-x-3'>
                                <p>{`${index + 1}.`}</p>
                                <p>{instruction}</p>
                            </div>
                        ))
                    }
                </div>

                <div>
                    <p className='text-center md:text-left'>{` Enjoy your delicious ${foodItem}!`}</p>
                </div>
            </div>
        );
    }
}

export default RecipeContent;