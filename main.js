// Battle of the Bands

// // To make things easier on the nightclub management, they want each 
// band to be assigned a number so that they can easily keep track of the order in which the 
// bands will perform.

// // Your job is to write a function that accepts any band name as an argument. The function will 
// increment a global variable by one each time it is invoked, and return that number, and the band 
// name concatenated together.

let bandNumber = 0

const takeNumber = function (bandName) {
    ++bandNumber
    return `${bandNumber}. ${bandName}`
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console


// Your task is to iterate over the array of foods and invoke the function for each item so that 
// the cookedFood array contains all of the items after they are cooked.


const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill` function cooks the food.
const cookedFood = [];


function grill (currentObject) {
    currentObject.cooked = true;
    cookedFood.push(currentObject);
}

for (i = 0; i < foods.length; i++) {
    grill(foods[i])
}

console.log(cookedFood)


// Stacking Words!!


// Create an addExcitement function that should console.log() rows of words. 
// It should take an array containing the words of a sentence and output them in the developer console.



// let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];


// function addExcitement (theWordArray) {
//     let buildMeUp = "";
//     for (let i = 0; i < theWordArray.length; i++) {
//         buildMeUp += theWordArray[i] + " ";
//         console.log(buildMeUp)
//     }
// }

// // Invoke the function and pass in the array
// addExcitement(sentence)


let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];


// function addExcitement (theWordArray, punctuation) {
//     let buildMeUp = "";
//     for (let i = 0; i < theWordArray.length; i++) {
//         buildMeUp += theWordArray[i] + " "
//         if((i + 1) % 3 === 0) {
//             buildMeUp += punctuation + " ";
//         }
//         // else {
//         //     buildMeUp += theWordArray[i] + " ";
//         // }
//     console.log(buildMeUp)
//     }
// }

// addExcitement(sentence, "?")

// write it as an arrow function


addExcitement => (theWordArray, Punctuation) {
    let buildMeUp = "";
    for (let i = 0; i < theWordArray.length; i++) {
        buildMeUp += theWordArray[i] + " "
        if((i + 1) % 3 === 0) {
            buildMeUp += punctuation + " ";
        }
        // else {
        //     buildMeUp += theWordArray[i] + " ";
        // }
    console.log(buildMeUp)
    }
}

addExcitement(sentence, "?")

// Add a new argument to the function so that a developer can specify how many times the special character should be added.


// let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];


// function addExcitement (theWordArray, punctuation, num) {
//     let buildMeUp = "";
//     for (let i = 0; i < theWordArray.length; i++) {
//         buildMeUp += theWordArray[i] + " "
//         if((i + 1) % 3 === 0) {
//             for (let n = 0; n < num; n++)
//             buildMeUp += punctuation ;
//         }
//         // else {
//         //     buildMeUp += theWordArray[i] + " ";
//         // }
//     console.log(buildMeUp)
//     }
// }

// addExcitement(sentence, "?", 3)