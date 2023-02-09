## LET'S BUILD OUR STORE!

**1. useContext vs Redux**

useContext is a hook whereas Redux is a state management library.
useContext is a part of React library whereas Redux is not.
useContext requires less code, and because there is no need of extra libraries, bundle sizes are reduced. Redux on the other hand requires adding more libraries to the application bundle.

**2 Advantage of using Redux Toolkit over Redux.**

1. Redux Toolkit makes it easier to write good Redux applications
   and speeds up development.

2. Configuring a redux store in Redux Toolkit is not complicated.

3. Redux Toolkit doesn't require lot of packages and too many boilerplate code.

**3. Explain dispatcher.**

In react-redux, the useDispatch hook gives us access to our store's dispatch method.
Dispatch is used to send actions into our redux store and the only way we can affect the store from within a component.

**4. Reducer**

A reducer is a function that determines changes to an application's state.It uses the action it receives to determine this change. It is the only place, where we can write logic and calculations.

Reducer function will accept the previous state of app and action being dispatched, calculate the next state and returns the new object.

**5. Explain slice.**

A slice is the portion of Redux code that relates to a specific set of data and actions within the store's state.

**6. Explain selector.**

A selector is a pure function that takes a state from the Redux store and returns some information extracted from that state object.

**7. Explain createSlice and the configuration it takes.**

createSlice is a function that accepts an initial state, an object of reducer functions and a 'slice name', and automatically generates action creators and action types that correspond to the reducers and state.
