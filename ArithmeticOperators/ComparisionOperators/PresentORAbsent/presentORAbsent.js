function onClickSubmit() {
    let name = document.getElementById("txtName").value;
    let isPresent = Number(document.querySelector('input[name="attendence"]:checked').value);
    console.log(name)
    console.log(typeof name )
    console.log(isPresent)
    console.log(typeof isPresent)
    let submit = document.getElementById("pResult");
    if (isPresent == true) {
        submit.innerHTML = "True: " + name + " is Present today"
    } else {
          alert(`${name} is Absent today`);
    }
}

function onClickSubmits() {
    let name = document.getElementById("txtNames").value;
    let isPresent = document.querySelector('input[name="attendences"]:checked').value;
    if (isPresent === "yes") {
        alert(`${name} is present today`);
    } else {
        alert(`${name} is Absent today`);
    }
}