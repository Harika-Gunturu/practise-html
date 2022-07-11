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
        mass: 57,
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
const byMass = characters.sort((a,b) => {
    return a.mass-b.mass;
})
console.log(byMass);
