## DATA IS THE NEW OIL!

**1. What is prop drilling ?**

Prop drilling refers to transporting data / state as props to the intended destination through intermediate components.

It can also be understood as passing data / props down the chain from parent to its child and so on.

**1. What is lifting the state up?**

As we know, every component in React has its own state. Because of this, sometimes data can be reductant and inconsistent. So by lifting up the state, we make the state of the parent component as a single source of truth and pass the data of parent in its children.

**1. What is Context Provider and Context Consumer?**

The provider is used to create a context that can be consumed.

The consumer is used to consume the nearest provided context.

**4. If you don't pass a value to the provider, does it take the default value?**

Yes
