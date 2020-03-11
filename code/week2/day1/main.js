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
// 	var localNum = 7;
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






//PART 2: DECLARING VARIABLES
//"var" vs. "const" vs. "let"
//javascript's newest version, ES6 allows us to define variables in multiple ways
//var is for 
//const is for
//let is for
//so you will now see these declarations throughout our sample code








// code concepts:
// scope
// functions
// variables
// conditionals

// d3 concepts:
// loading data
// data structures
// scales
// svg
// comparison, logic, conditionals
