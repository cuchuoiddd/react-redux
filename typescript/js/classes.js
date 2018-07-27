class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user = new Student("Jane", "Mdsfghj", "User");
document.body.innerHTML = greeter(user);
//Basic Types
// string
let color = "blue";
color = 'red';
// boolean
let isDone = false;
console.log("boolean", !isDone);
// number
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
console.log("number", decimal, hex, binary, octal);
//Array
let list = [1, 2, 3, 4, 5, 6];
console.log(list);
//Tuple
let x;
x = ["hello", 10]; // OK
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Blue;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
let d = Color.Blue;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
let colorName = Color[0];
let colorName1 = Color[1];
console.log("enum", c, d, colorName, colorName1);
//any
let notSure = 4;
notSure = "maybe a string instead";
notSure = true;
console.log(notSure);
function add(x, y) {
    return x + y;
}
let myAdd = function (x, y) { return x + y; };
console.log(myAdd('b', 5));
let z = 100;
function addToZ(x, y) {
    return x + y + z;
}
console.log(addToZ(3, 4));
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
let v = {
    kind: ShapeKind.Circle,
    radius: 100,
    abc: ShapeKind.Circle
};
console.log(v);
