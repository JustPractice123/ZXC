let n=prompt("Enter size array:")
let arr=new Array();
for(let i=0;i<n;i++){
    let x=prompt("Enter element of array:")
    arr.push(x);
}
let m=prompt("Enter number")
let ans=0;
let index=0;
for(let i=0;i<n;i++){
    if(arr[i]==m){
        ans=arr[i];
        index=i
    }
}
if(ans!=0){
    alert("Yes "+index)
}else{
    alert("No")
}