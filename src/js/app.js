const scss = require('../css/app.scss');

import Search from './SearchC';
import * as searchView from './SearchV';
import { elements as el } from "./base";

export const state = {}; 

export const controlSearch = async () => {

    //Query the responed data from the view.
    const query = searchView.getInput;

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
    }

}

el.form.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});