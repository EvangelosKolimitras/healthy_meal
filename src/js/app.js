const scss = require('../css/app.scss');
import Search from './search';

const search = new Search('pizza');

console.log(search);
search.getResults();