function onClickAndOperator() {
    debugger;
    let age = Number(document.getElementById("txtAge").value);
    let gender = document.getElementById("txtGender").value;

    document.getElementById("pResult").innerHTML = ((age == 18) && (gender == "female"));

}


function onClickAndLogicalOperator() {
    debugger;
    // var ages = Number(document.getElementById("txtAge").value);
    let age = document.getElementById("txtAges").value;
    var gender = document.querySelector('input[name="Gender"]:checked').value;

    var result = document.getElementById("pResults");
    if ((age <= 20) && (gender == "Female")) {
        result.innerHTML = "🎉Success, you get the discount";
        result.style.color = "green";
        result.style.fontWeight = "bold";
        result.style.fontSize = "20px";
    } else {
        result.innerHTML = "❌Sorry, you don't get the discount";
        result.style.color = "red";
        result.style.fontWeight = "bold";
        result.style.fontSize = "20px";
    }
}