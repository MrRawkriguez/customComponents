# 1. What is a react component?

- A React component is a reusable piece of UI built using JavaScript. It can be written as a function or a class and defines what gets rendered on the screen. Components can accept props (inputs) and manage their own state (if applicable).

- React components make it easier to build complex user interfaces by breaking them into small, manageable, and reusable pieces.

# 2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
Incorrect Component Naming Convention:

- In React, component names must begin with a capital letter. This is required because React differentiates components from regular HTML tags (e.g., `<div>` or `<small>`).


# 3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="React logo" />
        </header>
    )
}

root.render(Header())
```

Incorrect Use of the Component in root.render

- Problem: Header() directly invokes the function and returns the JSX. However, React expects a React element, not raw JSX or the function's return value.

Why It's Wrong:

- When you call Header(), you’re executing the function and returning the JSX it generates, bypassing React's internal mechanisms for creating and managing components.