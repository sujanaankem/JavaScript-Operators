function onClickOrOperator() {
    debugger;
    let name = document.getElementById("txtName").value;
    let branch = document.getElementById("txtBranch").value.toUpperCase();
    let result = document.getElementById("pResult");
    if ((branch == "ECE") || (branch == "EEE")) {
        result.innerHTML = "✅You are eligible for this role ";
        result.style.color = "green";
        result.style.fontWeight = "bold";
        result.style.fontSize = "20px";
    } else {
        result.innerHTML = "❌You are not eligible for this role ";
        result.style.color = "red";
        result.style.fontWeight = "bold";
        result.style.fontSize = "20px";
    }
}