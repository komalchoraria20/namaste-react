# FINDING THE PATH!

**1. How can we add images into our App? Explain with code examples.?**

1. By importing the image from the path.

Import pic from “./images/mypic.jpg”;

    `<img src={pic} />`

2. By directly accessing the Image CDN URL.

`<img src={IMG_CDN_URL} />`

**2. What would happen if we do console.log(useState())?**

It will return an array of two elements.First one is the state and second is the setter of that state.

**3. How will useEffect() behave, if we don’t add a dependency array?**

If we don’t pass any dependency array, the useEffect() will be called on every render.

**4. What is SPA?**

A single page application is a web app implementation that loads only a single web document, and then updates the body content of that single document via JavaScript APIs such as XMLHttpRequest and Fetch when different content is to be shown.

**5. What is the difference between Client Side and Server Side Routing?**

Client side routing allows our app to update the URL from a link click without making another request for another document from the server. It won’t make a network call as it loads the components that are already present in our app.

Server side routing is the way where all our pages come from the server.
