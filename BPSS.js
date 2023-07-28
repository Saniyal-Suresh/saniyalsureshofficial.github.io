//variables
let btn = document.querySelector(".clc-btn");
let amt = document.querySelector("#amount");
let schemeMonths = document.querySelector("#totalMonths");
let advEmi = document.querySelector("#advanceMonths");
//dipalys
let dbdDisplay = document.querySelector(".dbdDisplay");
let emiDisplay = document.querySelector(".emiDisplay");
let chargesDisplay = document.querySelector(".chargesDisplay");
let ipDisplay = document.querySelector(".ipDisplay");
//const values
const dbd = 1.77;
const emiCard = 412;
const addonCard = 199;
const instaCard = 118;

btn.addEventListener("click", () => {
    let proCharge = Number(prompt("Enter product charge"))
  let dbdCalc = Math.round((amt.value * 1.77) / 100) + 1;
  let emiCalc = Math.round((amt.value / schemeMonths.value))+1;
  let charges = Number(dbdCalc+emiCard+addonCard+instaCard);
  let sumCharge = charges+proCharge
  let emiMonths = schemeMonths.value - advEmi.value;
  let advTot = emiCalc*advEmi.value
  dbdDisplay.innerHTML = "DBD : " + dbdCalc;
  emiDisplay.innerHTML = "EMI : " + emiCalc + " Rs. "+emiMonths+" months";
  chargesDisplay.innerHTML = "Charges : "+sumCharge;
  ipDisplay.innerHTML = "IP / Down Payment = "+ (sumCharge+advTot);
});
