let count = 0;
function onClickIncremen() {
    debugger;
    count++;
    document.getElementById("pResult").innerHTML = count;
}

function onClickDecrement() {
    if(count > 0){
        count--;
        document.getElementById("pResult").innerHTML = count;
    }
}