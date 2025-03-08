/* when the onclick function is
 on the html page no need for submit.onclick 
 document.getElementById("submit").onclick = function() {
    calculate(); // Call the function
};
 document.getElementById("submit").addEventListener
 ("click", calculate);
 all of this will also work in giving it function*/


submit.onclick =function calculate(){

const principalamount = document.getElementById("principal");
const interestrate = document.getElementById("rate");
const yearsinput = document.getElementById("years");
const totalanswer = document.getElementById("totalanswer");
const submit = document.getElementById("submit")
const total = document.getElementById("total")


let principal = Number(principalamount.value);
let rate = Number(interestrate.value / 100);
let years = Number(yearsinput.value);
 
if(principal < 0 || isNaN(principal)){
    principal = 0;
    principalamount.value = 0;
 }
 if(rate < 0 || isNaN(rate)){
    rate = 0;
    interestrate.value = 0;
 }
 if(years < 0 ||isNaN(years)){
    years = 0;
    yearsinput.value = "0";
 }
    /*
    if (principal < 0 || isNaN(principal) || rate < 0 || isNaN(rate) || years < 0 || isNaN(years)) {
      total.textContent = "Enter a valid number";
      }
      */


const result = principal * Math.pow((1 + rate /1), 1 * years)

totalanswer.textContent = result.toLocaleString(undefined,
                                                { style:"currency",
                                                currency: "NGN" });                                            
}