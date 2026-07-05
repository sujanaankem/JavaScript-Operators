let count = 0;
function onClickAdd() {
    debugger;
    let number = Number(document.getElementById("txtNumber").value);
    count += number;
    document.getElementById("pResult").innerHTML = count;
}

function onClickSub() {
    debugger;
    let number = Number(document.getElementById("txtNumber").value);
    if (count > 0) {
        count -= number;
        document.getElementById("pResult").innerHTML = count;
    }
}
    function onClickMultiplication(){
        debugger;
        let number = Number(document.getElementById("txtNumber").value);
        count *= number;
    document.getElementById("pResult").innerHTML = count;
    }
     function onClickDivision(){
        debugger;
        let number = Number(document.getElementById("txtNumber").value);
        count /= number;
    document.getElementById("pResult").innerHTML = count;
     }