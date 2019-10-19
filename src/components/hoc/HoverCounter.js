
//example of High order Component 

import React, { Component } from "react";
import UpdatedComponent from './withCounter';


class HoverCounter extends Component {
  
  render() {
      const {count, incrementCount}= this.props;
    return (
      <div>
        <h2 onMouseOver={incrementCount}>Hoveres {count}times</h2>
      </div>
    );
  }
}
export default UpdatedComponent(HoverCounter);
