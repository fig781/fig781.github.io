**What are React hooks?**
They are functions in React that allow you to add react functionality to function based components.

**What is the useMemo hook?**
This hook will only run if its dependencies change. This is especially useful in preventing expensive operations from needlessly running.

- For those that are familiar with Vue.js, the useMemo hook function in React serves the same purpose as computed properties in Vue.

The syntax follows a common pattern:

```jsx
const functionToRun = (value) => return value + 1;
const computedValue = useMemo(() => functionToRun(value),[value]);
```

A few things to note:

- `functionToRun()` needs to return a value.
- `[value]` is the dependency. There can be multiple dependencies ex: `[value1, value2, value3]`. Any time the dependencies change, the useMemo function will run.
- If the dependency array is left empty `[]`, useMemo will only execute the function on the initial component render.

Here is a practicle example using the useMemo hook:

```jsx
import { useState, useEffect, useMemo } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      //Fetches a list of ten users
      const response = await fetch('https://jsonplaceholder.typicode.com/users');

      // If the HTTP status code is 200-299
      if (response.ok) {
        const json = await response.json();
        setUsers(json);
      }
    };

    fetchData();
  }, []);

  //Only runs when users changes
  const profiles = useMemo(() => {
    users.map((user) => {
      return <Profile key={user.id} user={user} />;
    });
  }, [users]);

  return <div>{profiles}</div>;
};

const Profile = ({ user }) => {
  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
};

export default App;
```

More information about useMemo can be found in the React docs: [https://reactjs.org/docs/hooks-reference.html#usememo](https://reactjs.org/docs/hooks-reference.html#usememo)
