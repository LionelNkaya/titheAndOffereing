var myButton  = document.getElementById("myButton");

var income = 0.00;
income = +document.getElementById("income").value;

var percentOffering = 0;
var percentOffering = +document.getElementById("percentOffering").value;

var displayTithe = document.getElementById("displayTithe");
var displayOffering = document.getElementById("displayOffering");

//Calculation
var tithe = income * 0.10;
var offeringAmount = income * percentOffering / 100;
var total = tithe + offeringAmount;

//Result to display
var titheRounded = tithe.toFixed(2);
var offeringAmountRounded = offeringAmount.toFixed(2);
var totalRounded = total.toFixed(2);


myButton.onclick = function() {

  displayTithe.textContent = titheRounded;
  displayOffering.textContent = offeringAmountRounded;
  displayTotal.textContent = totalRounded;

};
