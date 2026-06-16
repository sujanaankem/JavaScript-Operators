function onClickUserName() {
    debugger;
    var userName = document.getElementById("txtUserName").value.toLowerCase();
    var result = document.getElementById("pResult");
    if (!userName) {
        result.innerHTML = "Please enter a username. It cannot be empty!";
        result.style="color: red; font-weight: bold;"
    } else {
        result.innerHTML = " you already have a username: yes";
        result.style="color: green; font-weight: bold;"
    }
}