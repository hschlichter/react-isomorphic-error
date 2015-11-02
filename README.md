# react-isomorphic-error

This the error:

Warning: render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render.

I know what it means and how to trigger it. This simple node repos does just that. But I don’t know how to solve it.

Component is getting rendered on the server using ReactDOMServer.renderToString(). Because this is server side rendering any handler or other init functions would not get called on the client. So to make the client aware of the component, it should get created “again” on the client on load. This is done using the ReactDOM.render() function.

But then the above error pops up. 
