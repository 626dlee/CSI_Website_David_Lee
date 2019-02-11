import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

class Text extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="text-wrapper">
        <ScrollAnimation
          animateIn="fadeInRight"
          animateOut="fadeOut"
          animatePreScroll="false"
        >
          <h2 className="text-title">{this.props.title}</h2>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          animatePreScroll="false"
        >
          <a href={this.props.descLink}>
            <button type="button" className="text-desc">
              {this.props.desc}
            </button>
          </a>
        </ScrollAnimation>
        <br />
      </div>
    );
  }
}

export default Text;
