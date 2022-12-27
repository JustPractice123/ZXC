let book=prompt('Enter author of book')
let books = [
    {name:"Три товарища", author:"Эрих Мария Ремарк", ISBN:"121212", price:"4000 тг"},
    {name:"Триумфальная арка", author:"Эрих Мария Ремарк", ISBN:"123123", price:"4200 тг"},
    {name:"Гарри Поттер и философский камень", author:"Джоан Роулинг", ISBN:"1111111", price:"5000 тг"},
    {name:"Гарри Поттер и Тайная комната", author:"Джоан Роулинг", ISBN:"21212121", price:"5199 тг"},
    {name:"Гарри Поттер и узник Азкабана", author:"Джоан Роулинг", ISBN:"321321321", price:"5099 тг"}
];
let ans="";
for(let i=0;i<books.length;i++){
    if(books[i].author==book){
        ans+=books[i].name+" "+books[i].author+" "+books[i].ISBN+" "+books[i].price+"\n"
    }
}
if(ans!=""){
    alert(ans)
}else{
    alert("По вашему запросу ничего не найдено")
}