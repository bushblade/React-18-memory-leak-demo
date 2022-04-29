# React 18 doesn't show memory leak warnings

In React 17 if you tried to update state of a component that had been
removed/unmounted then you would get a warning about it letting you know you had
a memory leak.
In React 18 this no longer happens.

I can't find out if this is intended or not.
If it is intended then does React now 'fix' memory leaks somehow?
My instinct says that there should still be a warning.

To reproduce:-

- run the project
- click the button to remove the component before the timeout finishes

In React 18 you will see no warning.

In React 17 you will see a warning.

[React 17 Demo on CodeSandbox](https://codesandbox.io/s/priceless-hill-4uitkl?file=/src/App.jsx)

[React 18 Demo on CodeSandbox](https://codesandbox.io/s/proud-wave-vk1tpi?file=/src/App.jsx)
