# JO DIKHTA HAI VO BIKTA HAI!

**1. What are the different ways to write css?**

1. Basic Native CSS

   We style everything in one large CSS file
   eg: -

```
.header {
    display: flex;
    justify-content: space-between;
}
```

2. SCSS/ SASS

   Its a modern way of writing CSS.
   Makes CSS writing experience good.
   Its compiled to CSS at the end of the day.

   Benefits-

   -Nesting
   -Reusability
   -Variables
   -Mixins

3. Inline CSS

   Here, we pass a JavaScript object inside JSX.

eg:-

```
const searchBtnCss = {backgrundColor: "red"}

<button style={searchBtnCss}></button>

This can also be directly passed.

<button style = {{backgroundColor: "red"}}> </button>
```

Pros:

It saves time.
Cons: Hardcoded, Repetition, Difficult to maintain, Not reusable.
The job of processing inline CSS is heavy.

4. Use of Libraries

   We can use libraries like Material UI, Base UI, Ant UI, Chakra etc.

Pros:
Consistent and fast UI.

Cons:
We cannot personally customise it.
Bundle size is big.

5. Styled Components

   Its majorly used in React projects.
   Here, CSS is written in JavaScript file ans CSS is passed as props.

Pros: Reusability

Cons: Different learning curve.

5. Tailwind CSS

   Its an open source CSS framework.
   Pros:

   -CSS on the same page(in same file)

   -Reusability

   -Less bundle size

   Flexible UI(cutomisable)

**2. How do we configure tailwind?**

After installin tailwindCSS, it creates a tailwind .config.js file.

1.  Add the paths to all of your template files in your tailwind.config.js file.

```
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

2. We need to add the tailwind directives to our css.
   Add the tailwind directives for each of Tailwind’s layers to your main CSS file.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**3. In tailwind.config.js, what does all the keys mean(content,theme, plugins)?**

Content section is where we will have all the files where tailwind will run.(eg:html, css, jsx etc.)

Theme section is where we define our project's color palette, type scale, fonts, breakpoints, border radius etc.

Plugins lets us register new styles for tailwind to inject into the user's stylesheet using JS instead of CSS.

**4. Why do we have .postcssrc file?**

postcssrc takes the mentioned configuration and tells the bundler(Parcel here) to compile tailwind CSS to normal CSS.

```
{
  "plugins": {
    "tailwindcss": {}
  }
}
```
