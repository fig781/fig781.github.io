---
title: 'Javascript Spread Operator (...)'
pubDate: '03-06-2022'
tags: ['javascript', 'beginner']
---

**What is the Spread Operator?**
This syntax is used to succinctly pass multiple values from either an Array or Object to an expression where elements are expected. Examples are the best way to show this.

**Arrays**

Combining arrays

```js
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArr = [...arr1, ...arr2];
//  combinedArr = [1, 2, 3, 4, 5, 6]
```

```js
let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
//  arr2 = [4, 1, 2, 3, 5, 6]
```

Copying an array

```js
let arr = [1, 2, 3];
let arrCopy = [...arr];
//  arrCoppy = [1, 2, 3]
//  changing arr will not effect arrCopy
```

**Objects**
Merge Objects

```js
let obj1 = { id: 1, name: 'Aden' };
let obj2 = { birthday: '2022-02-04', hairColor: 'Brown' };
let combinedObj = { ...obj1, ...obj2 };
//  combinedObj = { id: 1, name: 'Aden', birthday: '2022-02-04', hairColor: 'Brown' }
```

Note: Merging objects with like attributes may not behave the way you expect

```js
let obj1 = { id: 1, name: 'Aden' };
let obj2 = { id: 2, name: 'Bob' };
let combinedObj = { ...obj1, ...obj2 };
//  combinedObj = { id: 2, name: 'Bob' }
```

**A Common use case in React**

```js
import { useState } from 'react';

const App = () => {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  const addButtonClick = () => {
    // We use the spread operator to add
    // an item to the end of the array
    setList((list) => [...list, input]);
  };

  return (
    <div>
      <input
        type='text'
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={addButtonClick}>Add</button>
      <ul>
        {list.map((item) => {
          return <li key={Math.random()}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
```

More information about the spread syntax can be found in the MDN docs: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
