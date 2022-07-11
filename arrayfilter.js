const characters = [

{
    name:'harika',
    height:172,
    mass:52,
    eye_color:'black',
    gender:'female',

},
{
    name : 'sailakshman',
    height : 152,
    mass: 55,
    eye_color: 'black',
    gender: 'male',
},
{
    name:'revathi',
    height:150,
    mass:55,
    eye_color:'brown',
    gender:'female',
},
];

//***filters 


//get characters with height lessthan 200
const shorterCharacters = characters.filter(
    (character) => character.height < 200
);
console.log(shorterCharacters);
//get all male characters
const maleCharacters = characters.filter(
    (character) => character.gender === 'male'
);
console.log(maleCharacters);
//get all female characters
const femaleCharacters = characters.filter(
    (character) => character.gender === 'female'
);
console.log(femaleCharacters);