import React from "react";

class Banner extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <video autoPlay loop className="banner-wrapper">
        <source src={this.props.vidURL} />
      </video>
    );
  }
}

export default Banner;
