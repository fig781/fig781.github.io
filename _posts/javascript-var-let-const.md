---
title: 'JavaScript, var, let and const'
pubDate: '03-13-2022'
tags: ['javascript', 'beginner']
---

**What do the key words `var`, `let` and `const` do?**
These key words are used to declare variables in JavaScript.

```js
var firstName = 'Bob';
let lastName = 'Bobson';
const age = 20;
```

Both `let` and `var` can have their values changed after declaration and can be initialized without a value. Variables declared with `const` cannot change, and a value must be assigned when the variable is declared.

```js
var firstName = 'Bob';
let lastName = 'Bobson';
const age = 20;

firstName = 'John'; // Runs without issue
lastName = 'Smith'; // Runs without issue
age = 80; // Causes TypeError: Assignment to constant variable.
```

```js
// Variables declared without assigning a value

let firstName; //Runs without issue
var lastName; // Runs without issue
const age; // Causes SyntaxError: Missing initializer in const declaration
```

A few things to note about `const`

- If the variable is an Object, the object attribute values can be changed and additional attributes can also be added. The variable cannot be reassigned.
- If the variable is an Array, the values in the array can change, but the variable cannot be reassigned.
- You will sometimes see `const` variables written in all caps `const PORT = 8080`. This is a stylistic choice.

```js
// Objects
const obj = {
  firstName: 'Bob',
};

obj.firstName = 'John'; // Runs without issue
obj.lastName = 'Bobson'; // Runs without issue
delete obj.firstName; // Runs without issue
obj = {}; // Causes TypeError: Assignment to constant variable.

// Arrays
const arr = [1, 2, 3];
arr.push(4); // Runs without issue
arr = []; // Causes TypeError: Assignment to constant variable.
```

**Understanding scope**
There are three types of scope in JavaScript. The scope of a variable determines which other parts of the program can access it.

- Function Scope
- Block Scope
- Global Scope

**Function Scope**
Variables declared within a function will have functional scope. Whether you declare a variable as either `var`, `let` or `const`, it will only be accessible within the function it was declared in.

```js
// Function Scope
function doSomething() {
  var firstName = 'Bob';
  let lastName = 'Bobson';
  const age = 20;
}
doSomething();

console.log(firstName);
console.log(lastName);
console.log(age);

// The three variables are not accessible outside of
// the function so they cause a ReferenceError
```

**Block Scope**
You can create block scope by wrapping your code in `{}`. Both `let` and `const` are not accessible outside of the block they were defined in. On the other hand, `var` is accessible outside of the block it is defined in.

```js
// Block Scope
{
  var firstName = 'Bob';
  let lastName = 'Bobson';
  const age = 20;
}

console.log(firstName); // Will run
console.log(lastName); // Causes ReferenceError: lastName is not defined
console.log(age); // Causes ReferenceError: age is not defined
```

Block Scoping can also be seen in `for-loops`.

```js
for (var x = 0; x < 10; x++) {
  console.log(x);
}

console.log(x);
// Runs without issues
```

```js
for (let x = 0; x < 10; x++) {
  console.log(x);
}

console.log(x);
// Causes ReferenceError: x is not defined
```

**Global Scope**
These are variables declared outside of the functional scope and block scope. They can be accessed globally in the JavaScript program. It is advisable to declare a limited number of variables like this. Having many global variables in a JavaScript program can often lead to unforeseen bugs as the program becomes more complex.

```js
var firstName = 'Bob';
let lastName = 'Bobson';
const age = 20;

// Function Scope
function doSomething() {
  console.log(firstName);
  console.log(lastName);
  console.log(age);
}
doSomething();

// Block Scope
{
  console.log(firstName);
  console.log(lastName);
  console.log(age);
}

// Prints the variables without any errors
```

**Key Takeaways**

- Do not use `var`, use `let` and `const` instead. Since `var` is not block scoping, it can lead to unforeseen bugs in your program.
- Use `const` when you know the value will not change. Use `let` when the value will change

More info can be found on the MDN docs:

- [var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
- [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
