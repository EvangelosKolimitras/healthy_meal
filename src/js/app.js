const scss = require('../css/app.scss');
import axios from 'axios';



async function getResults(query) {
    const API_KEY = `b54f57e8210350cfadb73db117c24e3c`;
    const proxy   = `https://cors-anywhere.herokuapp.com/`;
    const url = `${proxy}https://www.food2fork.com/api/search?key=${API_KEY}&q=${query}`;

    try{
        
        const response = await axios(url);
        const recipes = response.data.recipes;
        console.log(recipes);
        
    }   

    catch(error) {
        console.info(error);
    }
}


getResults(`breast`);