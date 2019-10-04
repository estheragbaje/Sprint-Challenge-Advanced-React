- [ ] Why would you use class component over function components (removing hooks from the question)?

  Class components are smart” or “stateful” components (unlike functional components) because they tend to implement logic and state. They are used when you need to give the component some extra features. For example,if you need to manage the component’s lifecycle, you’ll need to use a class component.

  With class components, you get internal state!
  That is, Class-based components give you a property called this.state to read state from and a method this.setState that lets you update it.

  With class componente, you get performance increase!
  One way to improve performance (i.e. the amount of re-renders your component does) is to implement a shouldComponentUpdate method. This method gives you the next and current props and state, and lets you implement a boolean expression that triggers a re-render or not.

- [ ] Name three lifecycle methods and their purposes.
      3 lifecycle methods ane their purposes are:

- [ ] What is the purpose of a custom hook?
- [ ] Why is it important to test our apps?
