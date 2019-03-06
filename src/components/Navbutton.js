import React from "react";

class Navbutton extends React.Component {
  render() {
    return (
      <a href={this.props.link} className="nav-button">
        {this.props.name}
      </a>
    );
  }
}

export default Navbutton;
