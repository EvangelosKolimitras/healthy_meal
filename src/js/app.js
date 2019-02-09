const scss = require('../css/app.scss');

import Search from './SearchC';
import * as searchView from './SearchV';
import { elements as el } from "./base";

export const state = {}; 

// el.results__list__counter.innerHTML = '';

export const controlSearch = async () => {

    //Query the responed data from the view.
    const query = searchView.getInput();

    if(query) {

        // Add data to state
        state.search = new Search(query);

        // Empty input and previous results
        searchView.clearInput();
        searchView.clearResultList();

        //Search for a recipe
        await state.search.getResults();

        // Render the data
        searchView.renderResults(state.search.result)

        // Render a counter for the returning results
        const counter = state.search.result.length;
        el.results__list__counter.innerHTML = `${counter} results for ${query}`;

        if(counter === 0) {
            el.searchResultsList.insertAdjacentHTML("afterbegin", 'No data.')
        }
    }

}

el.form.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

const footer = () => {
    const footerMarkup = `
    <footer class='footer'>
        &copy; by Evangelos Kolimitras. Powered by
        <a href="http://food2fork.com" target="_blank" class="link">Food2Fork.com</a>.
    </footer>
    `;
    el.container.insertAdjacentHTML('beforeend', footerMarkup);
    
};
footer();