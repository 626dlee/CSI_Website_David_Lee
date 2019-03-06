import React from "react";

class ToolButton extends React.Component {
  render() {
    return (
      <a className="tool-button-wrapper" href={this.props.URL}>
        <img className="tool-button-img" src={this.props.imgURL} />
      </a>
    );
  }
}

export default ToolButton;
