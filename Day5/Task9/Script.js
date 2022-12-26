let amount=+prompt("INSERT YOUR AMOUNT IN KZT");
let insert=prompt("1- CONVERT TO USD\n2- CONVERT TO EUR\n3- CONVERT TO GBP")
if(insert==1){
    let x=(amount/380).toFixed(2);
    alert(amount+" KZT = "+x+" USD")
}if(insert==2){
    let x=(amount/420).toFixed(2);
    alert(amount+" KZT = "+x+" EUR")
}if(insert==3){
    let x=(amount/480).toFixed(2);
    alert(amount+" KZT = "+x+" GBP")
}