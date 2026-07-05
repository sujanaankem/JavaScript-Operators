function onClickCheck() {
    debugger;
    let name = document.getElementById("txtName").value;
    let age = document.getElementById("txtAge").value;
    if (age >= 18) {
        document.getElementById("pResult").innerHTML = "You are Eligible for Voting";
         document.getElementById("pResult").style.color="green";
          document.getElementById("pResult").style.fontWeight="bold";
          document.getElementById("pResult").style.fontSize="20px";
          document.getElementById("txtName").style.border = "2px solid green";
          document.getElementById("txtAge").style.border = "2px solid green";
    }else{
        document.getElementById("pResult").innerHTML = "Sorry! You are not eligible for voting";
        document.getElementById("pResult").style.color="red";
          document.getElementById("pResult").style.fontWeight="bold";
          document.getElementById("pResult").style.fontSize="20px";
         document.getElementById("txtName").style.border = "2px solid red";
          document.getElementById("txtAge").style.border = "2px solid red";
    }
}