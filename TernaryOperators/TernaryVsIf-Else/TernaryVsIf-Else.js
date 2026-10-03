function checkWithTernary() {
  let number = document.getElementById("numberInput").value;
  let result = (number % 2 === 0) ? "Even" : "Odd"; // ternary operator
  document.getElementById("result").textContent = "Ternary says: " + result;
}

function checkWithIfElse() {
  let number = document.getElementById("numberInput").value;
  let result;

  // equivalent if-else
  if (number % 2 === 0) {
    result = "Even";
  } else {
    result = "Odd";
  }

  document.getElementById("result").textContent = "If-Else says: " + result;
}
