let thisyear=prompt("INSERT YEAR");
if(thisyear%4==0 && thisyear%100!=0){
    alert("YES")
}if(thisyear%400==0){
    alert("YES")
}else{
    alert("NO")
}