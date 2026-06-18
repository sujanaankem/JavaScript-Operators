function onClickSubmit() {
    debugger;
    let courseFee = Number(document.getElementById("txtCourseFee").value);
    let coupon = document.getElementById("txtCoupon").value;
    let result = document.getElementById("pResult");
    if ((coupon == "medsquire10") || (coupon == "medsquire20")) {

        if (coupon == "medsquire10") {
            courseFee *= .9;
        }
        if (coupon == "medsquire20") {
            courseFee *= .8;
        }
        result.innerHTML = "Valid Coupon ✅ Amount is Rs: " + courseFee;
        result.style.color="green";
        result.style.fontWeight="bold";
        result.style.fontSize="20px";
    } else {
        result.innerHTML = "Invalid Coupon! Amount is Rs: " + courseFee;
        result.style.color="red";
        result.style.fontWeight="bold";
        result.style.fontSize="20px";
    }
}