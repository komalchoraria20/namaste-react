# LET's GET CLASSY!

**1. How do you create Nested Routes react-router-dom configuration?**

We do nesting by creating children of children.
Eg: If we want a create a Profile page inside the About page,

```
const appRouter = createBrowserRouter([{
    path: “/”,
    element: <App Layout />,
    children: [{
        path: “/about",
        element: <About />,
        children: [{
            path: “profile”
            element: <Profile />,
        }]
    }]
}]);
```

**2. What is the order of life cycle method calls in Class Based Components?**

1.Constructor
2.Render
3.DOM is updated
4.componentDidMount
5.componentDidUpdate
6.componentWillUnmount

1 & 2 comes under Render phase, and then Commit phase follows.

**3. Why do we use componentDidMount?**

It is the best place to make an API call because it renders first and updates later.

**4. Why do we use componentWillUnmount? Show with eg.**

It will be called just before the component is unmounted.

Eg: When we leave the page, or switch one page to another we need to clear things up.Since its a single page application, it has some cons.

```
componentDidMount() {
    this.setInterval(() => {
        console.log(“Namaste React”),
    }, 1000);
}
```

So, when we do setInterval and switch pages, it is called everytime.
To avoid this, we use componentWillUnmount to clear this interval.

```
componentWillUnmount () {
	clearInterval(this.timer)
}
```
