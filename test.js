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

  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j < n - i - 1; j++) {
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

///code add for testing review
function removeDuplicates(arr) {
  const result = [];
  for (let i = 0; i <= arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}


function add (a, b)  {
  a + b
}

add(5,10);

// function to find the factorial of a number
function factorial(n) {
  if (n < 0) return "cannot be less than 0";
  if (n === 0 || n === 1) return 1;
  let result = 0;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));