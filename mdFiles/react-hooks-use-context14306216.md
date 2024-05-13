**What are React hooks?**
They are functions in React that allow you to add react functionality to function based components.

**What is the useContext hook?**
This hook is used to efficiently pass state down the component chain. Prop drilling has historically been used to do this. Prop drilling is the process of passing state values as props deep down a component chain. Often times, this results in passing props to components that do not need them. The useContext hook allows us to pass state values down the component chain without prop drilling.

The best applications for this hook are to pass global values to children components. A few example use cases are application theme switching, and logged in user information (user id, user name...). This hook is not recommended as a replacement for the state management library Redux. Currently it is not robust enough to handle many of Redux's use cases. This hook can work great for small applications that may only have a few globally used pieces of state.
The syntax follows a common pattern:

```jsx
import { createContext, useContext } from 'react';

//Initialize our context.
//null is the default value if none are later provided.
//Often this is done in a different file.
const UserContext = createContext(null);

const ParentComponent = () => {
  //We wrap our children component in the Provider
  return (
    <UserContext.Provider value={'Aden'}>
      <ChildComponent />
    </UserContext.Provider>
  );
};

const ChildComponent = () => {
  //Access the context passed down from the ParentComponent
  const user = useContext(UserContext);
  return (
    <>
      <h1>Child Component</h1>
      <p>{user}</p>
    </>
  );
};

export default ParentComponent;
```

Here is an example using the useEffect and useState hooks:

```jsx
import { useState, useEffect, createContext, useContext } from 'react';

const UserContext = createContext(null);

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

  return (
    <UserContext.Provider value={users}>
      <ChildComponent1 />
    </UserContext.Provider>
  );
};

const ChildComponent1 = () => {
  //This component does not need the users data
  return (
    <>
      <h1>ChildComponent1</h1>
      <ChildComponent2 />
    </>
  );
};

const ChildComponent2 = () => {
  const users = useContext(UserContext);

  return (
    <div>
      <ul>
        {/*If the data exists, display a list of 
        users names*/}
        {users &&
          users.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
      </ul>
    </div>
  );
};

export default App;
```

More information about useContext can be found in the React docs: [https://reactjs.org/docs/context.html](https://reactjs.org/docs/context.html)
