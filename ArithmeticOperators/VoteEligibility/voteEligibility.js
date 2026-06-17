function onClickCheck() {
    debugger;
    let name = document.getElementById("txtName").value;
    let age = document.getElementById("txtAge").value;
    if (age == 18) {
        document.getElementById("pResult").innerHTML = true;
    }else{
        document.getElementById("pResult").innerHTML = "Sorry! You are not eligible for voting";
      
    }
}