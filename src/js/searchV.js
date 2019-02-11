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
            <div class="results__list--recipe" href="${recipe.recipe_id}">
                <figure class="results__list--recipe-fig">
                <i class="far fa-heart results__list--recipe-fig__heart"></i>
                <h4 class="results__list--recipe-fig__name">${recipe.title}</h4>
                    <img src="${recipe.image_url}" alt="${recipe.title}">
                </figure>
                <div class="results__list--recipe-data">
                    <p class="results__list--recipe-data-author">${recipe.publisher}</p>
                </div>
            </div>
        </li>
    `;
    el.searchResultsList.insertAdjacentHTML('beforeend', html);
};

// Loop that renders all the return items from the API call
export const renderResults = recipes => {
    recipes.forEach(renderRecipe);
};