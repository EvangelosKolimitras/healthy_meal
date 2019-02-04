import scss from '../app.scss';
import sample from './sample';
import navi from './navi';

const local = `I am a local output ${2+2} coming from the index.js itself`;
const greeting = "Hi there!";

console.log(   greeting );
console.log(   local    );
console.log(   sample   );
console.log(   navi     );

let arr = [1,2,3,4,5];
let arr2 = arr.map(
    x => x * 2
);

console.log(arr2);