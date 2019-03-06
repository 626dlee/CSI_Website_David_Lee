import React from "react";

class ShowroomTitle extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="sr-title-wrapper">
        <h2 className="sr-title">{this.props.title}</h2>
        {/*<button type="button" className="textright-desc">
          {this.props.desc}
        </button>*/}
        <br />
      </div>
    );
  }
}

export default ShowroomTitle;
