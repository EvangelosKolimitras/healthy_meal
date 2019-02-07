const scss = require('../css/app.scss');

import Search from './SearchC';
import { elements as el } from "./base";

export const state = {}; 

export const controlSearch = async () => {

    //Query the responed data from the view.
    const query = 'pizza';

    if(query) {

        // Add data to state
        state.search = new Search(query);

        //Search for a recipe
        await state.search.getResults();

        // Render the data

        console.log(state.search.result);
    }

}

el.form.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});