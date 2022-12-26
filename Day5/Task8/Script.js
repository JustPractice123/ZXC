let price=120;
let kolvo=+prompt("Insert amount")
if(kolvo*price>4000){
    let ans=((kolvo*price)*90)/100
    alert(ans)
}else{
    alert(kolvo*price)
}