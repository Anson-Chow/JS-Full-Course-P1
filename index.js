// document.getElementById("count").innerText = 5

// let count = 0;

// console.log(count)

// // 1. Create a variable, myAge, and set its value to your age
// let myAge = 20;

// //2. Log the myAge variable to the console
// console.log



// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge 
// 3. Log myDogAge to the console

// let myAge = 20;
// let humanDogRatio = 7;

// let myDogAge = myAge * humanDogRatio

// console.log (myDogAge)

// let bonusPoints = 50

// bonusPoints += 50
// bonusPoints -= 75
// bonusPoints += 45

// console.log(bonusPoints)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML


let countEl = document.getElementById("count-el") //pass in arguments
let saveEl = document.getElementById("save-el")
let count = 0


function increment(){
    count += 1
    countEl.textContent = count
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0;
}

/**RECAP
 * script tag
 * variables
 * numbers
 * strings
 * console.log()
 * functions
 * The DOM
 * getELementByID()
 * innerText
 * textContent
 */