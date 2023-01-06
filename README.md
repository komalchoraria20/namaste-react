# LAYING THE FOUNDATION

**1. What is JSX?**

It is HTML like syntax.We can update our HTML using javascript by JSX.
JSX uses React.createElement behind the scenes and produces and object which converts it into HTML code and put into DOM.So, it compiles everything and puts in DOM.

Eg. Creating h1 tag using JSX
`const heading = <h1>This is a h1 tag</h1>`

**2. Superpowers of JSX.**

Some advantages of JSX are-

1. Readability
2. Syntactical Sugar
3. Less code
4. Developer Experience
5. No repetition
6. Maintainability
7. Safeguards against XSS attack(cross site scripting).

**3. Role of type attribute in script tag? What options can I use there?**

Type attribute specifies the type of the script.The type attribute identifies the content between `<script> and </script>` tags.
We can use module, importmap etc. as type in script tag.
Module causes the code to be treated like a JavaScript module.

**4. `{TitleComponent}` vs `{< TitleComponent />}` vs `{<TitleComponent></TitleComponent/>}` in JSX.**

`{TitleComponent}` - JavaScript code

`{<TitleComponent />}` - Component, self closing tag

`{<TitleComponent></TitleComponent/>}` - Component, separate open and close tags
