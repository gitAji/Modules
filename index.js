import fibonacci from "./utilis/fibonacci.mjs";

//console.log("f(5):",fibonacci(5));

document.getElementById("submit").addEventListener("click",()=>{
let n=document.getElementById("fib").value;
let fn= fibonacci(n);

document.getElementById("result").innerHTML = `F<sub>${n}</sub> = ${fn}`;
});

console.log("hi");

import { celciusToFarenheit,farenheitToCelcius } from "./utilis/temperature.mjs";

document.getElementById("submitBtn").addEventListener("click",()=>{
const out=document.getElementById("out");
const temp=document.getElementById("temp").value;
const radioButtons=document.querySelectorAll('input[name="temp-type"]');
let fromType;
for(let btn of radioButtons){
    if(btn.checked){
fromType=btn.id;
break;
}
}
if(fromType==='c'){
    out.innerHTML=`${temp}C = ${celciusToFarenheit(temp)}F`;
}
else if(fromType==='f'){
    out.innerHTML=`${temp}F = ${farenheitToCelcius(temp)}C`;
}
else{
    out.innerHTML="Something is wrong!";
}
});


/** Currency converter */
import { currencyConverter,getAllCurrencies } from "./utilis/currency.mjs";
document.getElementById("submit-currency").addEventListener('click', () => { 
    const out = document.getElementById("currency-result");
    let amount = document.getElementById("amount").value;
    const from = document.getElementById("convertFrom").value;
    const to = document.getElementById("convertTo").value;
    if (amount === "") amount = 100;
    currencyConverter(amount, from, to, out);
});
const fromCurrencyList=document.getElementById("convertFromSymbols");
const toCurrencyList=document.getElementById("convertToSymbols");
getAllCurrencies(fromCurrencyList,toCurrencyList);
//getAllCurrencies();

/** 
 * Amiibos 
 */
import { getAllAmiibos, filterAmiibos } from './utilis/amiibo.mjs';
const outPutElement = document.getElementById("amiibos");
getAllAmiibos(outPutElement);

let searchBox = document.getElementById("search-amiibos");
searchBox.addEventListener('input', updateSearch);

let nameCheckBox = document.getElementById("amiibo-name");
nameCheckBox.addEventListener('input', updateSearch);

let gameSeriesCheckBox = document.getElementById("amiibo-game");
gameSeriesCheckBox.addEventListener('input', updateSearch);

let amiiboSeriesCheckbox = document.getElementById("amiibo-series")
amiiboSeriesCheckbox.addEventListener('input', updateSearch);

function updateSearch() {
    let searchString = searchBox.value;
    let nameOpt = nameCheckBox.checked;
    let gameSeriesOpt = gameSeriesCheckBox.checked;
    let amiiboSeriesOpt = amiiboSeriesCheckbox.checked;

    let options = { nameOpt, gameSeriesOpt, amiiboSeriesOpt };
    //console.log(`Will search for ${searchString}`);
    console.log(`Will search for ${searchString}`, options);
    //filterAmiibos(searchString, outPutElement);
    filterAmiibos(searchString, outPutElement, options);
}

document.getElementById("openAll").addEventListener("click", () => {
    toggleDetails("open");
});
document.getElementById("closeAll").addEventListener("click", () => {
    toggleDetails("close");
});

function toggleDetails(mode) {
    let detailsElements = document.querySelectorAll("details");
    //console.log(detailsElements.length);
    for (let element of detailsElements) {
        if (mode==="open") element.setAttribute('open', true);
        if (mode==="close") element.removeAttribute('open');
    }
}