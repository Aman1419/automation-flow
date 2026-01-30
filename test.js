// this is the test file for the code review part :-
console.log("testing code review file test file");

// added function to multiply
let a = 10;
let b = 20;

function multiply(a, b) {
  return a * b;
}

console.log(multiply(a, b));

// added functionality for the reverse a string
let givenString = "Aman";

function reverseString(str) {
  let reversed = str.split("").reverse().join("");
  return reversed;
}

console.log(reverseString(givenString));



// function for the sorting 
function bubbleSort(arr) {
  const a = [...arr]; // copy to avoid mutation
  const n = a.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        const temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
      }
    }
  }
  return a;
}

console.log(bubbleSort([10, 2, 5, 1, 8]));
