---
title: 'JavaScript Arrow Functions'
pubDate: '04-24-2022'
tags: ['javascript', 'beginner']
---

**What is an arrow function in JavaScript?**
Arrow functions are an alternative way of writing functions in JavaScript. There are a few limitations compared to the traditional function that will be discussed in this article.

```js
// Traditional function declaration
function myFunc(myParam) {
  return myParam + 1;
}

// Arrow function declaration
const myFunc = (myParam) => {
  return myParam + 1;
};
```

Arrow functions can often be shortened substantially.

```js
// If there is one parameter, then you do not need to include
// the parenthesis.
const myFunc = (myParam) => {
  return myParam + 1;
};

// If the functions contents can fit on one line, then you can
// remove the 'return' keyword and '{}'.
// In this case, the 'return' is implied.
const myFunc = (myParam) => myParam + 1;
```

It is common to use arrow functions with the built in array methods.

```js
const arr = [1, 2, 3, 4, 5];

const arrMap = arr.map((v) => v + 1);

const arrFiltered = arr.filter((v) => v > 3);

arr.forEach((v) => console.log(v));
```

**The limitations of Arrow functions.**

Arrow functions do not have their own binding of `this`. As a result, you generally will not want to use them as `methods` in your objects. A few more things to know:

- They don't have their own binding to `arguments`, or `super`
- They cannot be used as `constructors` within classes.
- They likely will not behave as expected with the keywords `call`, `apply` and `bind`.

Since the arrow function does not have its own binding of `this`, it cannot reference other attributes or methods in objects. `this` in an arrow function will always reference the global scope.

```js
const obj = {
  value: 1,
  myFunc1: function () {
    console.log(this.value, this);
  },
  myFunc2: () => {
    console.log(this.value, this);
  },
};

obj.myFunc1(); // 1, obj{...}
obj.myFunc2(); // undefined, Window{...} or the Global object
```

For more info, reference the MDN documentation: [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
