import axios from 'axios';

// The Search class constructor simple creates anasyn/await request to the endpoint and gets the response back.
export default class Search {

    constructor(query) {
        this.query = query;
    }

    async getResults() {

        const API_KEY = `b54f57e8210350cfadb73db117c24e3c`;
        const proxy   = `https://cors-anywhere.herokuapp.com/`;
        const url     = `${proxy}https://www.food2fork.com/api/search?key=${API_KEY}&q=${this.query}`;
    
        try{
            
            const response = await axios(url);
            this.result = response.data.recipes;
            
        }   
    
        catch(error) {
            console.info(error);
        }
    }
    
}
