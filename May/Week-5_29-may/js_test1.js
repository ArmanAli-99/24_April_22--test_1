/*ANSWER-1: -
var:- The scope of var variable is globaly or functional and it can be updated and redeclared. It can be declared without initialization (means without give value). 
      For example:
            var var_variable = 10; 
            var_variable = 11;      updation is valid in var
            var var_variable = 12;  Redeclared is also valid.

Let:- The scope of var variable is block level and it can be updated but not redeclared. It can be declared without initialization (means without give value).
      For example:
            let let_variable = 20;
            let_variable = 21;      Updation is valid in let.
            let let_variable = 22   Redeclared is not valid this will throw an error.

Const:- The scope of var variable is functional and it cannot be updated and redeclared. It cannot be declared without initialization. means const must be initialized during declaration.
      For example:
            const = const_variable = 30;
            const_variable = 31;         Updation is not valid in const.
            const = const_variable = 32  Redeclared is not valid this will throw an error.*/

//--------------------------------------------------------------------------------------

/*Answer-2:-

Null:- Null is a premitive data type in javascript. which represents an empty or unknown value. 
        For example:-
            let null_variable = null;

Undefine:- Undefine is a premitive data type. it represent undefine value, means data type that initilize withou given any value.
        For example:-
            let Undefine_variable;

Not define:- A not defined is a variable which is not declared at a given point of time with declaration keyword like var, let or const.

-----------------------------------------------------------------------------------------*/

/*Answer-3:-

Declaration:- Creating a variable without giving any value is called variable declaration.
        for example:-
            let dec_var;

Initialization:- Declare a variable and assign a value to it with the help of assigment operator(=) is called initialization.
        for example:-
            let Int_var = 10;*/

//Program for square check:-

let length = 10;
let breadth = 20;

if(length === breadth){
    console.log("It is a Square");
}else{
    console.log("It is a rectangle");
}

//-------------------------------------------------------------------------------------

/*Answer-4:-
  Program to check whether a number is odd or even.*/

let num = 11;

if (num % 2 === 0) {                      // % is modulas operater which returns the divsion reminder 
    console.log(`${num} is a even number`);    
}else{
    console.log(`${num} is a odd number`);    
}

//-------------------------------------------------------------------------------------

/*Answer-5:-
    Program to check week day.*/

let day_number = 9;

switch (day_number) {
    case 1:
        console.log("Sunday");        
        break;
    
    case 2:
        console.log("Monday");        
        break;

    case 3:
        console.log("Tuesday");        
        break;

    case 4:
        console.log("Wednesday");        
        break;

    case 5:
        console.log("Thursday");        
        break;

    case 6:
        console.log("Friday");        
        break;

    case 7:
        console.log("Saturday");        
        break;

    default:
        console.log("Please! Enter the day number between 1 to 7");
        break;
}