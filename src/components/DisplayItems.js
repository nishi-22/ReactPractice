import React from "react";

class DisplayItems extends React.Component {
  handleClick = index => {
    const items = this.props.items;
    items.splice(index, 1);
    this.setState({
      items: items
    });
  };
  render() {
    return (
      <div className="items">
        {this.props.items.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.id}</h1>
              <h2>{item.name}</h2>
              <button onClick={() => this.handleClick(index)}>Delete</button>
            </div>
          );
        })}
        {/* <h1>{props.name}</h1>
            <button onClick={props.click}>Delete</button> */}
      </div>
    );
  }
}

export default DisplayItems;
