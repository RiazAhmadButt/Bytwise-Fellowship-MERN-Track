// JavaScript Fundamentals 
console.log("JavaScript Fundamentals CheatSheet")

// Variables 
// 3 type of variables 1. var 2. let 3. const 

// var 

// var name = "Riaz";
// console.log(name);
// name = "Ali";
// console.log(name);

// Let 

// let firstName = "Riaz";
// let LastName = 'butt';

// console.log(firstName + LastName);
// firstName = "Amir";
// LastName = "Butt";
// console.log(firstName + LastName);

// Const  

// const firstName = "Riaz";
// const LastName = 'butt';

// console.log(firstName + LastName);
// firstName = "Amir";  
// error becaue not allow to change or  reassing the value of const 
// LastName = "Butt";
// console.log(firstName + LastName);

// Data Types 
// primitive and Non primitive 
// primitive


// string 
// let name = "riaz";
// console.log("string example : my name is " + name);

// Number
// let age = 22;
// console.log("Number example: age is " + age);


// Boolean 
// var a = true;
// console.log("bollean: "+a);
// var a = false;
// console.log("bollean: "+a)


// Undefined 

// var b ;
// console.log("undefined:"+b);

// Null

// var c= null;
// console.log("NUll : " +c);

// BigInt
// let x = BigInt(2949483990999999);
// console.log("BigInt : " + x);

// Symbol 


// Non primitive 

// object 

// let studentInfo = {
//     name : "Riaz",
//     rollNo : 28,
//     session : '19-23'
// }
// console.log(studentInfo);

// Operators 

// Assignment Operator  

// let x = 10;

// Arithmetic  operators 

// let y = 20;
// console.log(`add: ${x+y}`);
// console.log(`add: ${x-y}`);
// console.log("multiplication:"+ x*y);
// console.log("division:"+ x/y);
// console.log("modulas:"+ x%y);

// increment operator 
// console.log("increment:"+ ++x);
// console.log("decrement:"+ --y);


// comparision operator 

// console.log(x==y);
// console.log(x!=y);
// console.log(x!==y);
// console.log(x===y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x>y);
// console.log(x<y);

// logical Operators 

// const isValidNumber = x >8 && 8>y;
// console.log(isValidNumber);

// const isValidNumber = x >8 || 8>y;
// console.log(isValidNumber);

// const isValidNumber = true;
// console.log(!isValidNumber);

// const isValidNumber = false;
// console.log(!isValidNumber);

// concatination (+)
// let firstName = "Riaz";
// let lastName = "Butt";
// console.log(firstName + lastName);


// ternary operator 

// const isEven = 10 % 2 ===0 ? true : false;
// console.log(isEven);

// const isEven = 10 % 2 ===0 ? "Number is even" : "Number is odd";
// console.log(isEven);

// Type Conversion 
// implicit conversion , explicit conversion 


// impicit conversion (automatically convert the type)
// console.log( 1 + "2");
// console.log( 1 - "2");
// console.log( 1 * "2");
// console.log( 1 / "2");
// console.log( "1" + "2");
// console.log( "1" - "2");
// console.log( "1" * "2");
// console.log( 1 / null);
// console.log( 1 / undefined);
// console.log("Helo" - "world");


// Explicit conversion 
// console.log(Number("5"));
// console.log(Number(false));

// console.log(parseFloat('3.14'));
// console.log(String("40"));
// console.log(Boolean(10));
// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean(undefined));


// Equality  

// const nub1 = 123;
// const nub2 = "123";
// console.log(nub1==nub2);
// console.log(nub1===nub2);

// const nub1 = null;
// const nub2 = undefined;
// console.log(nub1==nub2);
// console.log(nub1===nub2);


// Conditional Statements 

// const num = 5;

// if (num >0){
//     console.log("Number is Positive");
// }
// else{
//     console.log("Number is Not Positive");
// }

// const num = -5;

// if (num >0){
//     console.log("Number is Positive");
// }
// else{
//     console.log("Number is Not Positive");
// }

// const num = -5;

// if (num >0){
//     console.log("Number is Positive");
// }
// else if (num < 0){
//     console.log("Number is Not Positive");
// }
// else{
//     console.log("Number is Zero");
// }

// Switch Statements 

// const color = 'red';

// switch (color) {
//     case 'red':
//         console.log("color is red")
//         break
//     case 'blue':
//         console.log("color is red")
//         break
//     case 'gree':
//         console.log("color is red")
//         break
//     default:
//         console.log('not a color')
// }


// Looping Code 

// For Loop 

// for (i= 1; i<= 10; i++){
//     console.log("iteration number: " + i);
// }

// while loop 

// let i = 1;
// while (i<= 5){
//     console.log('Iteration number: '+ i);
//     i++;
// }

// Do while loop 

// let i = 1;
// do{
//     console.log('Iteration number: '+ i);
//     i++;
// }
// while (i<= 10);

// Foor Loop 

// const numArray = [1,2,3,4,5];

// for(const num of numArray){
//     console.log("iteration number: " + num)
// }

// Functions 

// function greet(){
//     console.log("Good Morning")
// }
// greet();
// greet();
// greet();

// function greet(userName){
//     console.log("Good Morning " + userName)
// }
// greet('Riaz');
// greet('Ali');
// greet('Amir');


// function add(a,b){
//     return a + b;
// }
// const sum = add(20, 10);
// console.log(sum);



// Scope 

// Global scope 

// const num= 100;

// Block scope 

// if (true){
//     const myName = 'riaz';
//     console.log(myName);
//     console.log(num);
// }
// console.log(myName) error 

// Function scope 

// function testFun(){
//     const myName = 'riaz';
//     console.log(myName);
//     console.log(num);
// }
// testFun();
