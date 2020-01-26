/* ---------- this 'nestedComponent' component is a child component of App component as it is nested with that. */

import React, { Component } from "react";

/* ---------- class name have to be started with capital letter */
class Header extends Component {
  render() {
    /* ---------- 2. here in render method props are automatically gotten if it is a class based component */
    console.log(this.props);
    /* ---------- destructuring */
    const { id, massage } = this.props;
    return (
      <div className="nested-component">
        {/* ---------- 1. normal way */}
        <h2>React</h2>
        <h3>others</h3>
        {/* ---------- 2. using prop to nest. props are send from the root component to a child componet that is referenced there. */}
        <div>the id is {this.props.id}</div>
        <div>{massage}</div>
      </div>
    );
  }
}

export default Header;
