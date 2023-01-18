# EXPLORING THE WORLD!

**1. What is a Microservice?**

Microservices are an architectural and organizational approach to software development where software is composed of small independent services that communicate over well-defined APIs. These services are owned by small, self contained teams.

**2. What is Monolith architecture?**

A monolith architecture is a traditional model of a software program, which is built as a unified unit that is self contained and independent from other applications.

**3. What is the difference between monolith and microservice?**

A monolith architecture is built as a single unified event while a microservice architecture is a collection of smaller, independently deployable services.

**4. Why do we need a useEffect hook?**

useEffect hook allows us to perform side-effects in our components.Some egs. of side-effects are fetching data, directly updating the DOM and timers.
The useEffect hook allows components to react to lifecycle events such as mounting to the DOM, re-rendering and unmounting.
useEffect accepts two arguments - callback function and dependency array.

**5. What is optional chaining?**

This operator access an object’s property or calls a function.If the object accessed or function called is undefined or null, it returns undefined instead of throwing an error.
It is represented as ?.

**6. What is Shimmer UI?**

Shimmer is a temporary animation placeholder for when data from the service call takes time to get back and we don’t want to block rendering the rest of the UI.

**7. What is the difference between JS expression and JS statement?**

An expression is any valid unit of code that resolves to a value whereas a statement is a unit of code that performs an action.

eg.-JavaScript expression

`add(a + b);`

JavaScript Statement

```
Let x = 10;
console.log(x);
```

**8. What is Conditional Rendering? Explain with a code eg.**

Conditional Rendering is a term used to describe the ability to render different user interface markup if a condition is true or false.
In React, it allows us to render different elements or components based on a condition.
This concept is applied often in the following scenarios:-

1. Rendering external data from an API.
2. Showing or hiding elements.
3. Toggling application functionality.
4. Implementing permission levels.
5. Handling authentication and authorization.

Eg: Conditional rendering for login and logout.

The login and logout buttons will be separate components. If a user is logged in, render the logout component to display the logout button.
If a user is not logged in, render the login component to display the login button.
In React, this situation is called conditional rendering.

**9. What is CORS?**

Cross Origin Resource Sharing is a HTTP header based mechanism that allows a server to indicate any origins(domain, scheme or port) other than its own from which a browser should permit loading resources.
CORS also relies on a mechanism by which browser make a “preflight” request to the server hosting the cross-origin resource, in order to check that server will permit the actual request.

**10. What is async and await?**

Async makes a function return a Promise.
Await makes a function wait for a Promise.

**11. What is the use of const json = await data.json(); in getRestaurants?**

It converts the stream data to JavaScript object and wait till it is converted and then assign the final value to the variable.
