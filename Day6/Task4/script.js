let x=prompt("Enter size of array:")
let arr=new Array();
for(let i=0;i<x;i++){
    arr.push(+prompt("Enter element of array:"));
}
let sum=0;
let ans="";
for(let i=0;i<arr.length;i++){
    sum=Math.pow(arr[i],2) 
    sum=sum.toString()+" ";
    ans+=sum
}
alert(ans)