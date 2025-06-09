import React from "react";
import Recipe from "./Recipe";
import IngridientList from "./IngridientList";

export default function Main() {
    const [ingredients, setIngredients] = React.useState([]);

    function handleForm(formData) {
        const newIngredient = formData.get("ingredient");
        setIngredients((ingredients) => [...ingredients, newIngredient]);
    }

    const [recipeShown, setRecipeShown] = React.useState(false);
    function toggleRecipeShown() {
        setRecipeShown((prevShown) => !prevShown);
    }
    return (
        <>
            <main>
                <form action={handleForm} className="ingredient-form">
                    <input type="text" name="ingredient" placeholder="Add ingredient" aria-label="Add ingredient" />
                    <button type="submit">Add ingredient</button>
                </form>
                {ingredients.length ? <IngridientList ingredients={ingredients} toggleRecipeShown={toggleRecipeShown} /> : null}
                {recipeShown && <Recipe />}
            </main>
        </>
    );
}
