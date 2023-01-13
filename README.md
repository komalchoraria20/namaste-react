# LET'S GET HOOKED!

**1. What is the difference between Named Export, Default Export and \* as Export?**

Named exports are useful to export several values. During the import, one will be able to use the same name to refer to the corresponding value. While importing, the name is written in curly braces.

In Default Export, there is only a single default export per module. A default export can be a function, a class, an object or anything else.
The default exports tend to be used for whatever we normally expect to get from the module. During import, we can put any name; it will still provide with the same default export.

\*as Export means exporting everything from that page, except the default export.

**2. What is the importance of config.js file?**

Config.js file is required to store the hard coded data which will be helpful for our other files and is imported as per use.

**3. What are React Hooks?**

React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component.

**4. Why do we need a useState hook?**

When we have to create a local variable in React, we need to use state variables using useState hook. useState creates the state value and setter of that state.It accepts a default value and returns an array of two elements, where the first element is the state itself and the second element is the setter function of that state.
