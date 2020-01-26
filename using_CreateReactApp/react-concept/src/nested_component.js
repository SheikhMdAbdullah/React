/* ---------- this 'nestedComponent' component is a child component of App component as it is nested with that. */

import React, { Component } from 'react';

class nestedComponent extends Component {
  render() {
    return (
      <div className="nested-component">
        <div>React</div>
        {this.props.children}
      </div>
    );
  }
}

export default nestedComponent;
