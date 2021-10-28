### React Real DOM vs. Virtual DOM, how they work together
    React compares Virtual DOM with the real DOM and updates real DOM.
    ReactDOM.render() will create the Virtual DOM tree and real DOM tree.

### Request/Response Cycle (What happens when you press enter after entering valid web address)
    The browser checks the cache for a DNS record to find the corresponding IP address of the web address.
    the browser sends a HTTP request to the server
    the server begins rendering the HTML
    the browser send requests for additional objects.
    once page is loaded, the browser sends further async requests as needed.

### What will the resulting Status Code be, assuming that process went well?
    200

### Maybe ask about what a web address is an alias for (looking to hear IP address)

### A hypothetical about data flow, how data is passed between front end, back end, and database to retrieve data to display to the end user

### Can you explain the Event Loop in JavaScript?
    the event loop is a constantly running process that monitors both the callback queue and the call stack.
    if the call stack is not empty, the event loop waits until it is empty and places the next function from the callback queue to the stack. if the callback queue is empty, nothing will happen.
