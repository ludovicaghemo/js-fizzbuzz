const headingElem = document.createElement("h1");
headingElem.innerHTML = "FizzBuzzDOM";
headingElem.classList.add("heading");
console.log(headingElem);

const containerElem = document.querySelector(".container");
containerElem.prepend(headingElem);

const rowElem = document.querySelector(".row");
console.log(rowElem);
let gridString = "";

for (let i = 1; i <= 100; i++) {
    let result = "";
    if (i % 3 === 0 && i % 5 === 0) {
        result = "FizzBuzz";
        className = "fizzbuzz";
    } else if (i % 3 === 0) {
        result = "Fizz";
        className = "fizz";
    } else if (i % 5 === 0) { 
        result = "Buzz";
        className = "buzz";
    } else {
        result = i;
        className = "square";
    }
    
gridString += `<div class="square ${className}">${result}</div>`
}

rowElem.innerHTML = gridString;