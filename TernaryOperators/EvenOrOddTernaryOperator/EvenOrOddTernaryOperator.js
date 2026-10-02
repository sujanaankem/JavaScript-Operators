function checkEvenOdd() {
  let number = document.getElementById("numberInput").value;
  
  // Using ternary operator
  let result = (number % 2 === 0) ? "Even" : "Odd";
  
  document.getElementById("result").textContent = "The number is: " + result;
}
