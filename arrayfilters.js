function isGreater(element, index ,array){
    return (element >= 10);
}

let testElements = [12, 5, 8, 130, 44].filter(isGreater);
console.log("Test value :" + testElements );