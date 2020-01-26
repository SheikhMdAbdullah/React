/* ---------- this is parent component as in this app it has child component. And also root componrnt in this app */

import React, { Component } from 'react';
/* ---------- import class/library from file */
import Header from './headers';

class App extends Component /* ---------- here React.Component is not used just Component is used. Because React and Component both are imported before */ {
  render() {
    return(
      <div className="app">
        <h1>start</h1>
        {/* ---------- imported library or component(class of another component) 'Header' is used as a HTML tag to nest it insite this component */}
        {/* ---------- 1. normal way to nest*/}
        <Header />
        {/* ---------- 2. using prop to nest, sending data to the child component. prop can have its name and value. multiple props can be passed */}
        <Header id="1" massage="good going"  />
        <Header id="2" massage="OK"  />
      </div>
    )
  }
}

export default App;
