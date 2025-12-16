const input = document.getElementById("input");
const CeltoFeh = document.getElementById("CeltoFeh");
const FehtoCel = document.getElementById("FehtoCel");
const CeltoKel = document.getElementById("CeltoKel");
const FehtoKel = document.getElementById("FehtoKel");
const KeltoCel = document.getElementById("KeltoCel");
const KeltoFeh = document.getElementById("KeltoFeh");
const btn = document.getElementById("btn");
const sml = document.getElementById("sml");

let value;
let inputValue;

btn.onclick = function() {

    inputValue = Number(input.value);

    if(CeltoFeh.checked) {
        value = (inputValue * 9/5) + 32;
        sml.textContent = value + " °F";
    }else if(FehtoCel.checked) {
        value = (inputValue - 32) * 5/9;
        value = value.toFixed(3);
        sml.textContent = value + " °C";
    }else if(CeltoKel.checked) {
        value = inputValue + 273.15;
        sml.textContent = value + " K";
    }else if(FehtoKel.checked) {
        value = ((inputValue - 32) * 5/9) + 273.15;
        value = value.toFixed(3);
        sml.textContent = value + " K";
    }else if(KeltoCel.checked) {
        value = inputValue - 273.15;
        sml.textContent = value + " °C";
    }else if(KeltoFeh.checked) {
        value = ((inputValue - 273.15) * 9/5) + 32;
        sml.textContent = value + " °F";
    }else {
        sml.textContent = "Please select a conversion option.";
    }
}