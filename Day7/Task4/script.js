let size=prompt("Enter size of array:")
let arr=new Array();
for(let i=0;i<size;i++){
    let num=+prompt("Enter element of array:")
    arr.push(num)
}
ans=1;
for(let i=0;i<arr.length;i++){
    if(arr[i]!=0){
        ans*=arr[i];
    }
}
alert(ans)