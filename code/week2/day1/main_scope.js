//PART 1: SCOPE AND VARIABLES
//global scope is when a variable is accessible anywhere in the code
//local scope is when a variable is only accessible within a function
	//you can also look for this by just checking if the variable was defined within curly brackets :)
	//this is called being available inside a "block"
//one more thing: hoisting

//example: global scope
// var num = 5; //global declaration
// console.log(num); //we will see the number

//example: local scope - inside a function
// counting() //here we call the counting function
// function counting(){
// 	var localNum = 7; //available and can be accessed only within that function
// }
// console.log(localNum); //this won't work - it cannot see inside the function

//example: hoisting
// var num = 5;
// console.log(num+"initial global definition");
// counting(); 
// function counting(){
// 	num = 7;
// }
// console.log(num+"re-defined by hoisting locally");
////this can get confusing and create bugs in your code





//PART 1.1: DECLARING VARIABLES: LET
//"var" vs. "let" vs. "const"
//javascript's newest version, ES6 allows us to define variables in multiple ways
//so you will now see these declarations throughout our sample code
//var: function scoped and undefined before declared
//let: block scoped. preferred for variable declaration. gives an error if called before declared. cannot be redeclared if in same scope. 

// let greeting = "say Hi";
// let times = 4;

// if (times > 3) {
//     let hello = "say Hello instead";
//     console.log(hello);//"say Hello instead"
// }
// console.log(hello) // hello is not defined
//using hello outside its block(the curly braces where it was defined) returns an error. 
//this is because let variables are block scoped
//when using let, you don't have to bother if you have used a name for a variable before as a variable exists only within its scope. 
//since a variable cannot be declared more than once within a scope, then the problem discussed earlier that occurs with var does not occur.

//PART 1.2: DECLARING VARIABLES: CONST
//variables declared with the const maintain constant values
//const declarations share some similarities with let declarations
//const declarations are block scoped
//BUT const cannot be updated or re-declared

// const greeting = "say Hi";
// greeting = "say Hello instead";//error : assignment to constant variable. 
//NOPE

// const greeting = "say Hi";
// const greeting = "say Hello instead";//error : Identifier 'greeting' has already been declared
//NOPE

//SUMMARY
// var declarations are globally scoped or function scoped while let and const are block scoped.
// var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
// They are all hoisted to the top of their scope but while varvariables are initialized with undefined, let and const variables are not initialized.
// While var and let can be declared without being initialized, const must be initialized during declaration.



// PART 1: SCOPE AND VARIABLES
// + functions, var, let, const