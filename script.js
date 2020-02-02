var myButton  = document.getElementById("myButton");

var income = 0;
income = +document.getElementById("income").value;

var percentOffering = 0;
var percentOffering = +document.getElementById("percentOffering").value;

var displayTithe = document.getElementById("displayTithe");
var displayOffering = document.getElementById("displayOffering");
var displayTotal = document.getElementById('displayTotal');


var tithe = income * 0.1;
var offeringAmount = income * percentOffering /100;
var total = tithe + offeringAmount;

myButton.onclick = function() {

  displayTithe.textContent = tithe;
  displayOffering.textContent = offeringAmount;
  displayTotal.textContent = total;

};
