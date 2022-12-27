let x=prompt("Enter size of array:")
let arr=new Array();
for(let i=0;i<x;i++){
    arr.push(+prompt("Enter element of array:"));
}
let sum=0;
for(let i=0;i<arr.length;i++){
    sum=sum+arr[i]
}
alert(sum+" "+sum/arr.length)