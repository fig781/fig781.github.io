---
title: 'React Hooks: useState()'
pubDate: '01-21-2022'
tags: ['react', 'javascript']
---

**What are React Hooks?**
They are functions in React that allow you to add react functionality to function based components.

**What is the useState hook?**
The useState hook is used to add state to a function-based component. The syntax will follow a common pattern:

```js
const [listEntry, setListEntry] = useState('');
```

- `listEntry` is the state variable.
- `setListEntry` is the function used to edit the state variable. Note, you should only edit the state variable through this function.
- `useState('')` is setting the initial value of the state variable. In this case, when `listEntry` is initialized, it equals an empty string.

This example lets you enter a value, then add it to a bulleted list:

```jsx
import { useState } from 'react';

const App = () => {
  const [listEntry, setListEntry] = useState('');
  const [listEntries, setListEntries] = useState([]);

  const handleInputChange = (e) => {
    setListEntry(e.target.value);
  };

  const handleAddButtonClick = () => {
    setListEntries((listEntries) => [...listEntries, listEntry]);
    setListEntry('');
  };

  return (
    <div>
      <input type='text' value={listEntry} onChange={handleInputChange} />
      <button onClick={handleAddButtonClick}>Add</button>
      <ul>
        {listEntries.map((entry) => {
          return <li>{entry}</li>;
        })}
      </ul>
    </div>
  );
};
```

- `const [listEntries, setListEntries] = useState([]);` we are creating a value `listEntries` and initially setting it as an empty array. This will hold our list items.
- `<input type="text" value={listEntry} onChange={handleInputChange} />` each time you enter a character in this input, the `listEntry` variable is being updated to what you are typing.
- `<button onClick={handleAddButtonClick}>Add</button>` when clicked, the value of `listEntry` is being appended to the `listEntries` array.
- `{listEntries.map((entry) => {return <li>{entry}</li>;})}` the values in `listEntries` are being rendered in a bulleted list.

More information can be found in Reacts official documentation: [https://reactjs.org/docs/hooks-state.html](https://reactjs.org/docs/hooks-state.html)
