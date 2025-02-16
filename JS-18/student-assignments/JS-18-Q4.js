/*
  Write a function that calculates the sum of two numbers.

  - The function must return a promise.
  - The solution should be solved after half a second.
  - If a negative value is entered into the function, it will be rejected.
  - Note: you should use "Promise" to resolve this question.
*/
function sumAsync(num1, num2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num1 < 0 || num2 < 0) {
        reject("Negative values are not allowed");
      } else {
        resolve(num1 + num2);
      }
    }, 500);
  });
}


sumAsync(5, 3)
  .then(result => console.log("Sum is:", result))
  .catch(error => console.log("Error:", error));

sumAsync(-1, 4)
  .then(result => console.log("Sum is:", result))
  .catch(error => console.log("Error:", error));