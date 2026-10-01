function checkGrade() {
  let score = document.getElementById("scoreInput").value;
  let grade = (score >= 90) ? "A" :
              (score >= 75) ? "B" :
              (score >= 50) ? "C" : "F";

  document.getElementById("result").textContent = "Your grade is: " + grade;
}
