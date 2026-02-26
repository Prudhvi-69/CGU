// adds.js

import { sub } from './subs.js';

let num1 = 30;
let num2 = 15;

function add() {
    let sum = num1 + num2;
    alert(sub(num1, num2));
    alert(sum);
    // document.getElementById("output").textContent =
    //     "Addition: " + sum + " | Subtraction: " + subtraction;
}
add();