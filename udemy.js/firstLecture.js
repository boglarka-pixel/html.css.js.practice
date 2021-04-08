'use strict';

//values and variables

let country = 'Hungary';
let continent = 'Europe';
let population = 9500000;

console.log(country, continent, population);


let isIsland = false;
const language = 'hungarian'

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

let halfPopulation = population / 2;
console.log(halfPopulation)

let finlandPop = 6000000;

let isMyPopBigger = population > finlandPop;
console.log(isMyPopBigger)

let description = 'Portugal is in Europe, and its 11 million people speak portuguese'

description = `${country} is in ${continent} and its ${population} people speak ${language}`
console.log(description)



//SWITCH


const expr = 'Papayas';
switch (expr) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound.');
        break;
    case 'Mangoes':
    case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        // expected output: "Mangoes and papayas are $2.79 a pound."
        break;
    default:
        console.log(`Sorry, we are out of ${expr}.`);
}

let day = 'monday';

switch (day) {
    case 'monday':
        console.log('plan course structure');
        console.log('go to coding meetup');
        break;
    case 'tuesday':
        console.log('prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code examples');
        break;
    case 'friday':
        console.log('record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekend!');
        break;
    default:
        console.log('not a valid day')

}


//functions

function fruitProcessor(apples, oranges) {
    const juice = `juice with ${apples} apple and ${oranges} orange.`;
    return juice;
}

const appleJuice = fruitProcessor(4, 0);
const appleAndOrangeJuice = fruitProcessor(4, 4);
console.log(appleAndOrangeJuice, appleJuice)