import React from "react";

class ToolButton extends React.Component {
  render() {
    return (
      <a href={this.props.URL}>
        <img className="tool-button-img" src={this.props.imgURL} />
      </a>
    );
  }
}

export default ToolButton;
