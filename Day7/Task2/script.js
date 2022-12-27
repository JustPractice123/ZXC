let arr=new Array();
while(true){
    x=+prompt("Enter element of array:")
    if(x == 0) break
    arr.push(x);
}
let sum=1;
for(let i=0;i<arr.length;i++){
    sum*=arr[i]
}
alert(Math.pow(sum,(1/(arr.length))))
