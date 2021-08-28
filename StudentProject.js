// NO1
let student = {
    firstName: "abasi",
    lastName: "Essien",
    age: 18,
    isMale: true,
    getAge:function myAge() {
        return this.age;
    },
    getFullName: function fullName() {
        return this.firstName + " " + this.lastName;
    }
}
console.log("I am  " + student.getAge());
console.log( "This my fullName  " + student.getFullName());
console.log("\n");

// NO2
var result = checkInt(16);
function checkInt(para) {
    if (para % 2 == 0) {
        return "I am even";
    } else {
        return "I am odd";
    }
}
console.log(result);

console.log("\n");

// NO3
var primeResult = checkPrime(6);
function checkPrime(para) {
    if (para <= 1) {
        return "I'm no Prime";
    }
    if (para == 2) {
        return "I'm Prime";
    }
    if (para > 2) {
        for (var i = 2; i < para; i++) {
            if (para % i == 0) {
                return "I'm No Prime";
            } else {
                return "I'm Prime"
            }
        }
    }
}
console.log(primeResult);
console.log("\n");

// NO4
var arr = [1, 2, 3, 4, 5, 6, 9];
var arrayResult = printArray(arr);
function printArray(para) {
    for (var i = 0; i < arr.length - 1; i++) {
        console.log(arr[i]);
    }
}