// calculator object
var calculator = {
    //Addition
    add: function (num1, num2) {
        return num1 + num2;
    },
    //Substraction
    subtract: function (num1, num2) {
        return num1 - num2;
    },
    //Multiplication
    multiply: function (num1, num2) {
        return num1 * num2;
    },
    //Division
    division: function (num1, num2) {
        return num1 / num2;
    }
}
//calling and printing method
console.log("Addition : " + calculator.add(20, 30));
console.log("Subtraction : " + calculator.subtract(30, 10));
console.log("Multiply : " + calculator.multiply(20, 30));
console.log("Division : " + calculator.division(60, 30));