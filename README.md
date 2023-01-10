# TALK IS CHEAP, SHOW ME THE CODE

**1. Is JSX mandatory for React?**

JSX is not a requirement for using React.Using React without JSX is convenient when we don’t want to set up compilation in our build environment.
JSX allows us to write HTML elements inside JavaScript and place them in the DOM without creating any createElement, appendChild etc.It converts HTML tags into React elements.

**2. Is ES6 mandatory for React?**

It is not mandatory, but the features of ES6 makes the work easier for React.

**3. How can I write comments in JSX?**

For single line, we use // inside curly braces and for multiple lines, we use /\* \*/ inside curly braces, the same way we write comments in JS.

**4. What is <React.Fragment></React.Fragment> and <></>?**

React.Fragment is a component in React that allows to return multiple elements by grouping them without adding extra nodes to the DOM.
<></> is a shorthand of React.fragment.

**5. What is Virtual DOM?**

It is a representation of actual DOM. Whenever changes needs to be updated in web application, virtual DOM gets updated first and later React updates only the specific changes from virtual DOM to Real DOM using Diffing algorithm, instead of updating the whole DOM.This makes the work easier.

**6. What is Reconciliation in React?**

It is a process of React where real DOM is compared and updated from the virtual DOM in which React uses the Diffing algorithm to differentiate one tree from another and it determines what it needs to change in UI and what not to change.
It re-renders only specific portion of our app, which is found by the Diffing algorithm.

**7. What is React Fiber?**

Fiber is the new reconciliation engine in React 16, its main goal is to enable incremental rendering of the virtual DOM.
It is a concept of React JS that is used to render a system faster and smoother. It is one of the popular JS library used to create a responsive user interface.

**8. Why do we need keys in React? When do we need keys in React?**

We need keys in React because whenever React is updating the DOM, it will have to render and re-render everything.
When we have multiple children, we need to give keys, because in large-scale application it becomes difficult for React to render and re-render. So, we need not go and modify everything in the DOM. We just inject it.
React tracks key as unique thing and makes work easier.

**9. Can we use index as keys in React?**

Index is a valid key, but we don’t use it.(We use it only when we don’t have anything else).

**10. What is props in React?**

It refers to properties.passing props into document means we are passing some data inside our component.
Whenever we pass a prop to the functional component, it is received as a parameter(which is props) and we can use this prop as any other variable.

eg.i. `<RestaurantCard restaurant = {restaurantList[0]} />`
Props is passed as functional component here.(Whatever we are passing as attribute here is props) in i. And used as parameter in ii.

ii.

```
const RestaurantCard = (props) => {
    console.log(props)
}
```

**11. What is Config Driven UI?**

When we build a real world app, we want the website to work at different places, so the websites are same at all places. We control our front-end using config thats why its called config driven UI.
Backend and API’s data is driving the config.
