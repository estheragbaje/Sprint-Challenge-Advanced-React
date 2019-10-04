- [ ] Why would you use class component over function components (removing hooks from the question)?

  Class components are smart” or “stateful” components (unlike functional components) because they tend to implement logic and state. They are used when you need to give the component some extra features. For example,if you need to manage the component’s lifecycle, you’ll need to use a class component.

  With class components, you get internal state!
  That is, Class-based components give you a property called this.state to read state from and a method this.setState that lets you update it.

  With class componente, you get performance increase!
  One way to improve performance (i.e. the amount of re-renders your component does) is to implement a shouldComponentUpdate method. This method gives you the next and current props and state, and lets you implement a boolean expression that triggers a re-render or not.

- [ ] Name three lifecycle methods and their purposes.
      3 lifecycle methods and their purposes are:
        
       - componendDidMount()(The Birth/Mounting Phase)
      In this lifecycle method, the component is being built out from ground up. Whatever initial data you’ll have access to will be defined on the constructor of this phase. The render method is also invoked.

      - componentDidUpdate()(Growth/Updating Phase)
      In this method, setState can be used to change the component’s state data, forcing a call to render. Also, shouldComponentUpdate is a method one could use here to stop a component from calling render if necessary.

      - componentWillUnmount()(Death/Un-mounting Phase)
      This method is when the Component is removed from the screen. The componentWillUnmount is called and can be used for any clean up you may need to do.

- [ ] What is the purpose of a custom hook?
      A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. A custom hook is used when we want to share logic between two JavaScript function. That is, the main idea behind custom hooks is just so that we can extract component logic into reusable functions.

- [ ] Why is it important to test our apps?
      It is important to test our apps because of the following;
      It:
      Surfaces bugs faster.
      Reduces the risk of regressions.
      Allows us to trust the code.
      Makes us think about the edge cases.
      Acts as a safety net when making changes or refactoring.
      Acts as documentation for the code.
      Encourages us to write more testable (better!) code.
