**What are React hooks?**
They are functions in React that allow you to add react functionality to function based components.

**What is the useRef hook?**
This hook is used to track values between renders and access DOM elements. The main difference between a ref and state is that updating a ref will not cause a re-render. This is especially useful if you want to track the number of renders of a component or when you want to track the previous state of a component. The syntax follows a common pattern:

```js
const refContainer = useRef(0);
//refContainer: {current: 0}
```

- In this case, `0` is the initial value of refContainer.
- refContainer will always be formatted as `{current: someValue}`

Example using useRef to access a DOM node:

```jsx
import { useRef } from 'react';

const App = () => {
  let element = useRef();

  const focusButtonClick = () => {
    element.current.focus();
  };

  return (
    <>
      <input ref={element} type='text' />
      <button onClick={focusButtonClick}>Focus</button>
    </>
  );
};

export default App;
```

- All React elements have a `ref` attribute that useRef can access.
- Element is set as `{current: <input type="text" />}`
- When the button is clicked, the input is focused.

Example using useRef to track previous state:

```jsx
import { useRef, useState, useEffect } from 'react';

const App = () => {
  const [input, setInput] = useState('');
  const previousState = useRef('');

  useEffect(() => {
    //previousState.current will always update to the previous state
    previousState.current = input;
  }, [input]);

  return (
    <>
      <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
      <p>Current State: {input}</p>
      <p>Previous State: {previousState.current}</p>
    </>
  );
};

export default App;
```

More information about useRef can be found in the React docs: [https://reactjs.org/docs/hooks-reference.html#useref](https://reactjs.org/docs/hooks-reference.html#useref)
