//set 1
console.log(1 + 2);
console.log("apple" + "orange");
console.log(1 + 2 + "apple");
console.log("apple" + 1 + 2);
console.log(1 + true);
console.log(0 == false);
console.log(1 === true);
console.log(2 == "2");
//set-2
// Array of Players
let players = ["Rohith", "Dhoni", "Virat", "Jadeja", "K L Ragul", "Chris Gayle", "Starc", "Varun", "Ashwin", "Bhuvanesh", "Bumrah"]
console.log(players);
//To remove the first element
players.shift();
console.log(players);
//To find the length
let length = players.length;
console.log("Length: " + length);
//To add the element in first 
players.unshift("Russel");
//To print jersy numbers
for (let player of players) console.log(player + " " + 30 * Math.random());
//To print the Player name in uppercase
players = players.map(player => player.toUpperCase());
console.log(players);
// set-3
//To print 0 to 100
for (let i = 0; i <= 100; i++) {
    console.log(i);
}
//To find the date
let date = new Date();
console.log(date);
//    var date = date.toISOString();
var month = date.getMonth();
var day = date.getDay();
var year = date.getFullYear();

console.log(day.toString().padStart(2, "0") + "/" + month.toString().padStart(2, "0") + "/" + year.toString().padStart(2, "0"));

console.log(date);
// Celcius to Farenheit
function calculateFarenheit(celcius) {
    let farenheit = (celcius * (9 / 5)) + 32;
    return farenheit;
}

console.log(calculateFarenheit(40));

//TO print the average of an array
var array = [10, 20, 30, 40];
let sum = array.reduce((a, b) => a + b);
let avg = sum / array.length;
console.log("Average : " + avg)
//To reverse an string
var string = "java script";
var reversedString = string.split("").reverse().join("");
console.log(reversedString);