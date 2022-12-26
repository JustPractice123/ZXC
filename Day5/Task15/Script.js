let tg=prompt("Insert your amount:")
if(tg%380==0){
    alert("Only "+th/380+" USD")
}if(tg%380!=0){
    let USD=(tg/380).toFixed(2)
    let USDcel=USD*100%100;
    let Cent=USD-USDcel
    alert(USD-USDcel/100+" USD and "+USDcel+" cents")
}