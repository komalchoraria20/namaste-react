# OPTIMIZING OUR APP!

**1. When and why do we need lazy()?**

Lazy Loading allows us to load JavaScript components when a specific route is activated.
It increases the application's performance by reducing initial loading time.

Benefits-

1. Reduces initial load time - Lazy loading a web page reduces page weight, allowing for a quicker page load time.
2. Bandwidth conservation - Lazy loading conserves bandwidth by delivering content to users only if it's requested.

**2. What is suspense?**

Its a component that lets you wait for some code to load.
While the lazy component loads, we can add a fallback(probably show some placeholder content, such as loading indication.)to suspense.

**3.Why we got this error : A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.How does suspense fix this error?**

Suspense is a component used to surround lazy components.
It is fixed by wrapping the lazy component with suspense.

**4. Advantages and disadvantages of using code splitting pattern?**

Code splitting is a feature supported by bundlers like Parcel, Webpack etc.which can create multiple bundles that can be dynamically loaded at runtime.

Advantages:-
Enhanced performance
Reduces app loading time
Reduces initial bundle size

Disadvantges:-
We can only use it in client-side rendering,not for server side.
