import { round } from './utils.mjs';

export async function currencyConverter(amount, from, to, out) {
    console.log(`Convert ${from} ${amount} into ${to} and put in ${out}`);

    const requestURL = `https://api.exchangerate.host/convert?from=${from}&to=${to}`;
    fetch(requestURL)
    .then((response) => response.json())
    .then((data) => {
        let result = round(amount * data.result, 2);
        out.innerText = `${from} ${amount} = ${to} ${result}`;
    });

};

export async function getAllCurrencies(fromList,toList) {

    var requestURL = 'https://api.exchangerate.host/symbols';
   fetch(requestURL)
   .then((response)=> response.json())
   .then((data)=>{
    console.log(data.symbols);
    let currencyList="";
    for(let symbol in data.symbols){
        console.log(data.symbols[symbol].description, data.symbols[symbol].code);
        let code= data.symbols[symbol].code;
        let desc=data.symbols[symbol].code;
        currencyList+=`<option value="${code}">${desc}(${code})<option>\n`;
    }
    if(currencyList){
        fromList.innerHTML=currencyList;
        toList.innerHTML=currencyList;
    }
   });

};