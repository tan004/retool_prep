## React Lifecycle:

### <strong>componentWillMount and componentDidMount in the mounting phase</strong>

<strong>Setup Phase</strong>

<p><strong>componentWillMount</strong> is called only once in the component lifecycle, immediately before the component is rendered.</p>

<p><strong>componentDidMount</strong> is called once, but immediately after the render() method has taken place. That means that HTML for the React component has been rendered into the DOM and can be accessed if necessary. This method is used to perform any DOM manipulation of data-fetching that the component might need. </p>

### componentUnmount in the unmounting phase
<p>In the unmounting(or deletion, or "cleanup"): <strong>componentWillUnmount</strong>  is the last function to be called immediately before the components is removed from the DOM. It is generally used to perform clean-up for any DOM-elements for timers created in componentWillMount.</p>

### Setup and Cleanup

<p>A React component's lifecycle contains distinct phases for creation and deletion. In coding terms, these are called mounting and unmounting. You can also think of them as setup and cleanup</p>
