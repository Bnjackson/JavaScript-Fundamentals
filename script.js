/* comment across
multiple line*/
// comment on one line
// CTRL / is a hotkey to comment out lines
"use strict";
// use strict will enable modern JS features that are off by default
// Variables are "named storage" for data
/*
let message; // The let keyword lets us create variables
message = "Hello, World!"; // stroring data in the variable
*/
let messageHello = "Hello, World!",
age = "24";
/* we can combine multiple variable declarations and assignments together*/

alert(messageHello); // shows the variable content
alert(age);
// Statements are syntax constructs and commands that perform actions

// To declare a constant (unchanging) variable we use const instead of let. varibles declared const will never change.

const number = "123";

//a common practise is to use constants as alieses for difficult to remember values that are known beforehand. Such constants are named using capital letters and underscores.

const COLOUR_RED = "#f00";
