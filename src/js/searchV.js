import { elements as el } from "./base";

// Gets the value from the user's input
export const getInput = () => el.searchInput.value;

// Clears the input after submiting the form
export const clearInput = () => {
    el.searchInput.value = '';
};

// Clears the result list after submiting another query
export const clearResultList = () => {
    el.searchResultsList.innerHTML = '';
};

// Single item html markup for the inserting in the rendering loop
const renderRecipe = recipe => {
    const html = `
        <li>
            <a class="results__link" href="${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="${recipe.title}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${recipe.title}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>
    `;
    el.searchResultsList.insertAdjacentHTML('beforeend', html)
};

// Loop that renders all the return items from the API call
export const renderResults = recipes => {
    recipes.forEach(renderRecipe);
};