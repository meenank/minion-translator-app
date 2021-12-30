var Tbutton = document.querySelector("#btn-translate");
var txtInp = document.querySelector("#txt-input");
var txtOut = document.querySelector("#output");

function clickRes() {
    console.log("button clicked")
    console.log(txtInp.value);
    txtOut.innerHTML = txtInp.value;
}

Tbutton.addEventListener("click", clickRes)