
/* Solutions of Basic JavaScript and NodeJS tasks from:
https://github.com/panacloud-modern-global-apps/typescript-node-projects/blob/main/getting-started-exercises.md
By Syed Faisal ur Rahman
faisalrahman36@hotmail.com

*/


// Task 1
console.log('Task 1: Install and setup, Node JS and VS Code using: \n https://code.visualstudio.com/learn/educators/nodejs \n https://linuxhint.com/javascript-visual-studio-code/');

// Task 2
let personName= " Faisal";  //only first name without spaces
console.log('Hello %s. How are you?', personName);

//Task 3
console.log('lowercase:  %s', personName.toLowerCase() );
console.log('uppercase:  %s', personName.toUpperCase() );
console.log('title case:  %s', personName[0].toUpperCase() + personName.substring(1).toLowerCase() );

//Task 4
console.log('Stephen Hawking once said, “Intelligence is the ability to adapt to change.”');

//Task 5
let famous_person:string="Stephen Hawking";
let message1:string="Intelligence is the ability to adapt to change.";
console.log('%s once said, “%s”',famous_person,message1);

//Task 6
let personName2:string= "  Syed\tFaisal ur \n Rahman      "
console.log('person name without trimming white spaces from beginning and end: %s.',personName2);
console.log('person name after trimming white spaces from beginning and end: %s.',personName2.trim());

//Task 7 and 8

console.log(5+3);
console.log(10-2);
console.log(4*2);
console.log(16/2);

//Task 9
let favorite_number:number=1;
console.log('My favorite number is: %d', favorite_number);

//Task 10

/* Program 1: Add Numbers
Start Program */
let num1:number=5; //number 1
let num2:number=10; //number 2
let num3:number=num1 + num2; //adding numbers 1 and 2
console.log('%d + %d = %d',num1, num2, num3);  //printing results
//End Program

/* Program 2: multiply Numbers
Start Program */
num1=5; //number 1
num2=10; //number 2
num3=num1 * num2; //myltiplying numbers 1 and 2
console.log('%d * %d = %d',num1, num2, num3);  //printing results
//End Program

