var OTP = 0;
console.log("Send OTP");
function onClickSendOTP() {
    debugger;
    OTP = Math.trunc(Math.random()*10**4);
    alert(OTP);  
}
function onClickInputOTP(){
    debugger;
    var inputOTP = Number(document.getElementById("txtOTP").value);
    if(inputOTP === OTP){
        document.getElementById("pResult").innerHTML ="✅ Successfully logged-in";
        document.getElementById("pResult").style.color="green";
        document.getElementById("pResult").style.fontWeight="bold";
         document.getElementById("pResult").style.fontSize="30px";
    }else{
        document.getElementById("pResult").innerHTML ="❌ Invalid OTP";
        document.getElementById("pResult").style.color="red";
        document.getElementById("pResult").style.fontWeight="bold";
        document.getElementById("pResult").style.fontSize="30px";
    }
}