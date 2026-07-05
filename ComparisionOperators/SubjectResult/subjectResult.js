function onClickResult() {
    debugger;
    let tel = Number(document.getElementById("txtTelugu").value);
    let hin = Number(document.getElementById("txtHindi").value);
    let eng = Number(document.getElementById("txtEnglish").value);
    let mat = Number(document.getElementById("txtMaths").value);
    let sci = Number(document.getElementById("txtScience").value);
    let soc = Number(document.getElementById("txtSocial").value);
    let result = document.getElementById("pResult");
    let total = document.getElementById("pTotal");
    
    let Average = document.getElementById("pAverage");
    
    let Percentage = document.getElementById("pPercentage");
    let failedSubject = "";

    if ((tel >= 40) && (hin >= 40) && (eng >= 40) && (mat >= 40) && (sci >= 40) && (soc >= 40)) {
        result.innerHTML = "Congratulations, You are pass in all subjects.";
        result.style.color = "green";
        result.style.fontWeight = "bold";
        result.style.fontSize = "20px";

        total.innerHTML = "Total: " + (tel + hin + eng + mat + sci + soc) + " out of 600";
        Average.innerHTML = "Average: " + ((tel + hin + eng + mat + sci + soc) / 6).toFixed(2);
        Percentage.innerHTML = "Percentage: " + ((tel + hin + eng + mat + sci + soc) / 600)*100 +"%";
    } else {
        
    if (tel < 40) {
        if (failedSubject === ""){
            failedSubject += " ";
        }else{
            failedSubject += ","; 
        }
        failedSubject += " Telugu";
    }
    if (hin < 40) {
         if (failedSubject === ""){
            failedSubject += " ";
        }else{
            failedSubject += ","; 
        }
        failedSubject += " Hindi";
    }
    if (eng < 40) {
     if (failedSubject === ""){
            failedSubject += " ";
        }else{
            failedSubject += ","; 
        }
        failedSubject += " English";
    }
    if (mat < 40) {
     if (failedSubject === ""){
            failedSubject += " ";
        }else{
            failedSubject += ","; 
        }
        failedSubject += " Maths";
    }
    if (sci < 40) {
       if (failedSubject === ""){
            failedSubject += " ";
        }else{
            failedSubject += ","; 
        }
        failedSubject += " Science";
    }
    if (soc < 40) {
      if (failedSubject === ""){
            failedSubject += " ";
        }else{
            failedSubject += ","; 
        }
         failedSubject += " Social";
    }
    result.innerHTML = "Sorry! you were failed.";
        result.style.color = "red";
        result.style.fontWeight = "bold";
        result.style.fontSize = "20px";
    document.getElementById("pFailed").innerHTML = "You Failed in" + failedSubject;
    }
}