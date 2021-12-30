var Tbutton = document.querySelector("#btn-translate");
var txtInp = document.querySelector("#txt-input");

function clickRes() {
    console.log("button clicked")
    console.log(txtInp.value);
}

Tbutton.addEventListener("click", clickRes)