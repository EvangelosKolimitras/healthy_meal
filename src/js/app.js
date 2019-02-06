const scss = require('../css/app.scss');
import Search from './search';

const state = {}; 

const controlSearch = async () => {

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


document.querySelector(".header__search--form").addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
})