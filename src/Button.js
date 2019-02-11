import React from "react";

// function Button(props) {
//   return (
//     <button className="button" type="button">
//       {props.name}
//     </button>
//   );
// }

class Button extends React.Component {
  render() {
    return (
      <button className="button" type="button">
        {this.props.name}
      </button>
    );
  }
}

export default Button;
