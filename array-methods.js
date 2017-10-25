const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
const planetTwo = []

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

planets.forEach(function(bobbis) {
    planetTwo.push(bobbis)
});
console.log(planetTwo)


const planetEl = document.getElementById("planets")
planetEl.innerHTML += planetTwo.join(" ")

/*
    Use the map method to create a new array where the 
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

let newArray = planets.map(function(lobbis){
    console.log(lobbis.charAt(0).toUpperCase() + lobbis.slice(1))
})


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

let ePlanets = planets.filter(function(mobbis){
        return mobbis.includes('e')
})
console.log(ePlanets)


// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

const finalWords = words.reduce(function(sum, next){
    return sum + " " + next;


})
console.log(finalWords + ".")

