let cars = [
    { name: "Toyota", price: 12000000, year:2015, volume: 2.2 },
    { name: "Mercedes", price: 70000000, year:2018, volume: 3.8 },
    { name: "Toyota", price: 7000000, year:2013, volume: 2.0 },
    { name: "BMW", price: 11000000, year:2011, volume: 3.0 },
    { name: "Lexus", price: 60000000, year:2017, volume: 5.7 }
];
let zxc=true
while (zxc) {
    let find = +prompt("INSERT [1] TO SEARCH BY NAME\nINSERT [2] TO SEARCH BY YEAR\nINSERT [3] TO SEARCH BY ENGINE VOLUME\nINSERT [4] TO SEARCH BY PRICE\nINSERT [5] TO EXIT")
    let nameans = ""
    if (find == 1) {
        let name = prompt("INSERT NAME OF CAR:")
        for (let i = 0; i < cars.length; i++) {
            if (cars[i].name == name) {
                nameans += "name: " + cars[i].name + " price: " + cars[i].price + " year: " + cars[i].year + " volume: " + cars[i].volume + "\n"
            }
        }
        alert(nameans)
        zxc=true
    }
    let yearans = ""
    if (find == 2) {
        let start = prompt("INSERT YEAR START FROM:")
        let finish = prompt("INSERT YEAR ENDS FROM:")
        for (let i = 0; i < cars.length; i++) {
            if (cars[i].year>= start && cars[i].year<= finish) {
                yearans += "name: " + cars[i].name + " price: " + cars[i].price + " year: " + cars[i].year + " volume: " + cars[i].volume + "\n"
            }
        }
        alert(yearans)
        zxc=true
    }
    let volans = ""
    if (find == 3) {
        let minvol = +prompt("INSERT ENGINE VOLUME START FROM:");
        let maxvol = +prompt("INSERT ENGINE VOLUME ENDS FROM:");
        for (let i = 0; i < cars.length; i++) {
            if (parseInt(cars[i].volume)>= minvol && parseInt(cars[i].volume) <= maxvol) {
                volans += "name: " + cars[i].name + " price: " + cars[i].price + " year: " + cars[i].year + " volume: " + cars[i].volume + "\n"
            }
        }
        alert(volans)
        zxc=true
    }
    let priceans = ""
    if (find == 4) {
        let minpr = +prompt("INSERT PRICE START FROM:");
        let maxpr = +prompt("INSERT PRICE ENDS FROM:");
        for (let i = 0; i < cars.length; i++) {
            if (parseInt(cars[i].price) >= minpr && parseInt(cars[i].price) <= maxpr) {
                priceans += "name: " + cars[i].name + " price: " + cars[i].price + " year: " + cars[i].year + " volume: " + cars[i].volume + "\n"
            }
        }
        alert(priceans)
        zxc=true
    }
    if(find==5){
        zxc=false
    }
}