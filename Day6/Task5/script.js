let login=prompt('Enter your LOGIN')
let pass=prompt('Enter your PASSWORD')
let users = [
    {login:"ilyas", password: "qwerty"},
    {login:"eldar", password: "12345"},
    {login:"assylkhan", password: "qweqwe"},
    {login:"anel", password: "asdasd"},
    {login:"alibek", password: "zxczxc"}
];
let test=true
for(let i=0;i<users.length;i++){
    if(users[i].login==login && users[i].password==pass){
        test=true
        break
    }else{
        test=false
    }
}
if(test){
    alert("Welcome, you are authenticated")
}else{
    alert("User not found")
}