class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter (person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "Mdsfghj", "User");
document.body.innerHTML = greeter(user);


//Basic Types

// string
let color: string = "blue";
color = 'red';

// boolean
let isDone: boolean = false;
console.log("boolean", !isDone);

// number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log("number", decimal,hex,binary,octal); 

//Array
let list: Array<number> = [1, 2, 3,4,5,6];
console.log(list);

//Tuple
let x: [string, number];
x = ["hello", 10]; // OK

// enum
enum Color {Red, Green, Blue}
let c: Color = Color.Blue;
enum Color {Red = 1, Green = 2, Blue = 4}
let d: Color = Color.Blue;
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[0];
let colorName1: string = Color[1];
console.log("enum", c,d,colorName,colorName1);

//any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = true;
console.log(notSure);



function add(x,y) {
	return x+y;
}
let myAdd = function(x:string, y:number) { return x + y; };
console.log(myAdd('b',5));

let z = 100;
function addToZ(x, y) {
    return x + y + z;
}
console.log(addToZ(3,4));




enum ShapeKind {
    Circle,
    Square,
}

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
    abc:ShapeKind.Circle;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

let v: Circle = {
    kind: ShapeKind.Circle,
    radius: 100,
    abc:ShapeKind.Circle
}
console.log(v);