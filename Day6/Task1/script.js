let n=prompt("Enter size array:")
let arr=[new Array()];
for(let i=0;i<n;i++){
    let x=prompt("Enter element of array:")
    arr.push(x);
}
let ans1=" ";
for(i=0;i<arr.length;i++){
    let ans=arr[arr.length-1-i]+" "
    ans=ans.toString();
    ans1+=ans
}
alert(ans1)