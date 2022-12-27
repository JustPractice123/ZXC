let x=prompt("Enter size of array:")
let arr=new Array();
for(let i=0;i<x;i++){
    arr.push(prompt("Enter element of array:"));
}
let max=-1000000;
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i]
    }
}
alert(max)