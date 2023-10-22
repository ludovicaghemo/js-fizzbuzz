const rowElem = document.querySelector(".row");
console.log(rowElem);
let gridString = "";

for (let i = 1; i <= 100; i++) {
    let result;
    if (i % 3 === 0 && i % 5 === 0) {
        result = "fizzbuzz";
    } else if (i % 3 === 0) {
        result = "fizz";
    } else if (i % 5 === 0) { 
        result = "buzz";
    } else {
        result = i;
    }
    
gridString += `<div class="square ${result}">${result}</div>`
console.log(gridString);
}

rowElem.innerHTML = gridString;