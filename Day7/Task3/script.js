let arr=new Array();
while(true){
    x=prompt("Enter element of array:")
    if(x == 0) break
    arr.push(x);
}
let sum="";
for(let i=0;i<arr.length;i++){
    if(arr[i]>0){
        sum+=arr[i]+" "
    }
}
alert(sum)
