## React Lifecycle:

### <strong>componentWillMount and componentDidMount in the mounting phase</strong>

<strong>Setup Phase</strong>

<p><strong>componentWillMount</strong> is called only once in the component lifecycle, immediately before the component is rendered.</p>

<p><strong>componentDidMount</strong> is called once, but immediately after the render() method has taken place. That means that HTML for the React component has been rendered into the DOM and can be accessed if necessary. This method is used to perform any DOM manipulation of data-fetching that the component might need. </p>

### componentUnmount in the unmounting phase
<p>In the unmounting(or deletion, or "cleanup"): <strong>componentWillUnmount</strong>  is the last function to be called immediately before the components is removed from the DOM. It is generally used to perform clean-up for any DOM-elements for timers created in componentWillMount.</p>

### Setup and Cleanup

<p>A React component's lifecycle contains distinct phases for creation and deletion. In coding terms, these are called mounting and unmounting. You can also think of them as setup and cleanup</p>

### React Hooks
<p>A Hook is a special function that lets you "hook into" React features. Hooks let develpers use state and other React features directly in a function component, without writing a class. In a sense, a hook "listens" for changes in order to trigger a response.</p>

<strong>Top-DOWN</strong> data flow

### state Hooks

### Effect Hooks
<p>useEffect runs both after the first render and after every update(rerender). React guarantees the DOM has been updated by the time it runs the effects. It is possible to run your effect only when certain variables.</p>
<p>will need to clean up for some function.</p>

### useContext
<p>React context gives you a way to pass data through the component tree without having to manually thread props. Context gives developers a convenient way to share and update "global" data across a React application. </p>

```
    import { createContext } from 'react';

    export const PupContext = createContext();

```

### useCallback
### useRef
### useReducer
