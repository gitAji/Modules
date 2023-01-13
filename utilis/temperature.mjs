export function farenheitToCelcius(f){
if(f<-459.67)
console.error(`$(f) F is too cold`);
return(f - 32.00) / 1.8000;
}
export function celciusToFarenheit(c){
    if(c< -273.15)console.error(`$(c)C is too cold`);
return (c * 1.8000 + 32);
}
console.log(`-40F=${farenheitToCelcius(-40)}F`);