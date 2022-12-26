let time=prompt("Insert amount minuts: ")
if(time%60==0){
    alert("ONLY "+time/60+" HOURS")
}if(time%60!=0){
    let x=(time/60).toFixed(1)
    let y=x*10%10
    let xcel=x-y/10
    let min=time-(xcel*60)
    alert(xcel+" HOURS and "+min+" MINUTES")
}