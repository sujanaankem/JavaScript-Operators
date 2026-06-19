function onClickResult() {
    debugger;
    let tel = Number(document.getElementById("txtTelugu").value);
    let hin = Number(document.getElementById("txtHindi").value);
    let eng = Number(document.getElementById("txtEnglish").value);
    let mat = Number(document.getElementById("txtMaths").value);
    let sci = Number(document.getElementById("txtScience").value);
    let soc = Number(document.getElementById("txtSocial").value);
    let result = document.getElementById("pResult");
    
    if ((tel >= 40) && (hin >= 40) && (eng >= 40) && (mat >= 40) && (sci >= 40) && (soc >= 40)) {
        result.innerHTML = "Congratulations, You are pass in all subjects.";
        result.style.color = "green";
        result.style.fontWeight = "bold";
        result.style.fontSize = "20px";
    } else {
        result.innerHTML = "Sorry! you were failed.";
        result.style.color = "red";
        result.style.fontWeight = "bold";
        result.style.fontSize = "20px";
    }
        if(tel < 40){
        document.getElementById("pTelugu").innerHTML = "You failed in Telugu.";
        document.getElementById("pTelugu").style.color = "red";
        document.getElementById("pTelugu").style.fontSize = "10px";
    }
     if(hin < 40){
        document.getElementById("pHindi").innerHTML = "You failed in Hindi.";
        document.getElementById("pHindi").style.color = "red";
        document.getElementById("pHindi").style.fontSize = "10px";
    }
    if(eng < 40){
        document.getElementById("pEnglish").innerHTML = "You failed in English.";
        document.getElementById("pEnglish").style.color = "red";
        document.getElementById("pEnglish").style.fontSize = "10px";
    }
     if(mat < 40){
        document.getElementById("pMaths").innerHTML = "You failed in Maths.";
        document.getElementById("pMaths").style.color = "red";
        document.getElementById("pMaths").style.fontSize = "10px";
    }
    if(sci < 40){
        document.getElementById("pScience").innerHTML = "You failed in Science.";
        document.getElementById("pScience").style.color = "red";
        document.getElementById("pScience").style.fontSize = "10px";
    }
     if(soc < 40){
        document.getElementById("pSocial").innerHTML = "You failed in Social.";
        document.getElementById("pSocial").style.color = "red";
        document.getElementById("pSocial").style.fontSize = "10px";
    }


    let total = document.getElementById("pTotal");
   total.innerHTML = "Total: "+(tel + hin + eng + mat + sci + soc)+ " out of 600";
   let Average = document.getElementById("pAverage");
   Average.innerHTML = "Average: "+((tel + hin + eng + mat + sci + soc)/6).toFixed(2);
   let Percentage = document.getElementById("pPercentage");
Percentage.innerHTML = "Percentage: "+((tel + hin + eng + mat + sci + soc)/600)*100+"%"
}