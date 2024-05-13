**What are React hooks?**
They are functions in React that allow you to add react functionality to function based components.

**What is the useEffect hook?**
This hook is used for managing the lifecycle of a component. It serves the purpose of the componentDidMount, componentDidUpdate, and componentWillUnmount methods used in class based React components. A couple uses are fetching an api when the component mounts or changing the component state when the component is updated. The syntax follows a common pattern:

```js
useEffect(() => {
  console.log('This will run each time the component mounts');
}, []);
```

The `[]` is left empty so that the useEffect hook only runs when the component mounts. The useEffect hook will watch for any changes made to values added to this array. Whenever these values change, the useEffect hook will run. Here is an example:

```js
const [stateValue, setStateValue] = useState('');

useEffect(() => {
  console.log('This will run each time the component mounts, or
  when the stateValue changes.');
},[stateValue]);
```

Here is a practical example that fetches data when the component mounts:

```jsx
import { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      //Fetches a list of ten users
      const response = await fetch('https://jsonplaceholder.typicode.com/users');

      // If the HTTP status code is 200-299
      if (response.ok) {
        const json = await response.json();
        setData(json);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {/*If the data exists, display a list of 
        users names*/}
        {data &&
          data.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
      </ul>
    </div>
  );
};

export default App;
```

More information about useEffect can be found in the React docs: [https://reactjs.org/docs/hooks-effect.html](https://reactjs.org/docs/hooks-effect.html)
