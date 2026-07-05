function onClickNumber(){
    debugger;
    let firstNumber = document.getElementById("txtFirstNumber").value;
    let secondNumber = document.getElementById("txtSecondNumber").value;
    if(firstNumber == secondNumber){
document.getElementById("pResult").innerHTML = true;
    }else{
     document.getElementById("pResult").innerHTML = false;   
    }
}