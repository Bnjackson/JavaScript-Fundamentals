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

const digits = "123";

//a common practise is to use constants as alieses for difficult to remember values that are known beforehand. Such constants are named using capital letters and underscores.

const COLOUR_RED = "#f00";

/*DATA TYPES
There are 8 basic data types in JavaScript
JavaScript is dynamically typed meaning data types are not bound to any one variable.

NUMBER
The number type represents both integrer and floating point numbers aswell as speccial numeric values ie infinity, NaN.

BigInt
JavaScript has a limit to the size of the number that can be represented bigint is used to represent numbers over the limit.

String
A string needs to be surrounded by quotes.
Backticks (`hello`) are extended functionality quotes they allow us to embed variables and expressions into a string by wrapping them in ${...} for example:
alert( `Hello, ${name}!` ); // Hello, John! - embeding a varible into a string.

Boolean
The boolean type only has two values: true and false. It is commonly used to store yes and no values. e.g.
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

NULL
Null is a special value that represents "nothing, "empty" or "value unknown"

UNDEFINED
If a variable is declared but not assigned a value then it is undefined

OBJECTS and SYMBOLS
The object type is special. All other data types are primitive because their values can only contain a single thing. Objetcts are used to store collections of data and more complex entities.
Symbols is used to create unique identifiers for objects.

TYPEOF OPERATOR
The typeof operator allows us to see which type is stored in a variable.

Two forms: typeof x or typeof(x).
Returns a string with the name of the type, like "string".
For null returns "object" – this is an error in the language, it’s not actually an object.
*/

/*
INTERACTION: ALERT, PROMPT, CONFIRM

ALERT
It shows a message and waits for the user to press ok. For example
alert("hello");
The mini window with the message is called the modal window. The word modal means the user cant interact with the rest of the page until they have dealt with the window.

PROMPT
result = prompt(title, [default]);
Prompt brings up a modal window with a text message and an input field and the buttons ok and cancel.
The title is the prompt shown to the visitor.
default is an optional paremeter that sets the intial value for the input field.
The prompt will return the text or if it was cancelled it will retun null.
*/
let number = prompt(`What number?`, 100);
alert(`The number is ${number}`);
/*
CONFIRM

*/
