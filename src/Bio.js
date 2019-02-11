import React from "react";
import Button from "./Button";

// function Bio(props) {
//   return (
//     <div className="bio-wrapper">
//       <p>
//         <img className="portrait" src={props.imgURL} />
//         <h3 className="bios-name">{props.name}</h3>
//         <p className="bios-desc">{props.description}</p>
//       </p>
//       <p>
//         <Button name="Contact Me" />
//       </p>
//     </div>
//   );
// }

class Bio extends React.Component {
  render() {
    return (
      <div className="bio-wrapper">
        <p>
          <img className="portrait" src={this.props.imgURL} />
          <h3 className="bios-name">{this.props.name}</h3>
          <p className="bios-desc">{this.props.description}</p>
        </p>
        <p>
          <a href="/contact">
            <Button name="Contact Me" />
          </a>
        </p>
      </div>
    );
  }
}

export default Bio;
