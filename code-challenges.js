// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
// Create a function called boilingPoint that takes in a number
//if number is less than 212 return below boiling point
//else if number is euall to 212 return at boiling point 
//else meaning any other number return above boiling point

const boilingPoint = (num) => {
    if(num < 212){
        return "below boiling point"
    }
    else if(num === 212){
        return "at boiling point"
    }
    else{
        return "above boiling point"
    }
}
const temperature1 = 42
// Expected output: "42 is below boiling point"
console.log(boilingPoint(42))
const temperature2 = 350
// Expected output: "350 is above boiling point"
console.log(boilingPoint(350))
const temperature3 = 212
// Expected output: "212 is at boiling point"
console.log(boilingPoint(212))





// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
//console log padres 1884 concat to combine with 1898
//length to get the new count 

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]


console.log([padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns).length])
// Expected output: 9







// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
//create a var splitString to convert string to array 
//create var reverseArray to reverse the new array that was created 
//create var joinArray  to convert the new reversed array to a string 
//console log joinArray 
const currentCohort = "Delta 2023"
var splitString = currentCohort.split("")
var reveseArray = splitString.reverse()
var joinArray = reveseArray.join("")
console.log(joinArray)

// Expected output: "3202 atleD"





// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
//console log the const variable that has the array 
//.lastIndexOf (the number you want the index of)
const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
// Expected output: 7
console.log(numberOfConnections.lastIndexOf(givenValue1))

const givenValue2 = 10
// Expected output: 8
console.log(numberOfConnections.lastIndexOf(givenValue2))





// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
//researched it but still need a little explanation on it 

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]
sanDiegoSummerTemperatures.sort((a, b) => {
    return b - a
})
console.log(sanDiegoSummerTemperatures)


const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
sanDiegoWinterTemperatures.sort((a, b) => {
    return b - a
})
console.log(sanDiegoWinterTemperatures)
