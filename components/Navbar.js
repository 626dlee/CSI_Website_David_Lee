import React from "react";
import Navbutton from "./Navbutton";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <div className="navbar">
          <Navbutton link="/about" name="About" />
          <Navbutton link="/products" name="Products" />
          <a href="/">
            <img
              className="nav-logo"
              src="https://uploads.codesandbox.io/uploads/user/f7283109-f315-496e-8e3e-e0a6a7eac08f/UdOR-Main%20Logo-02.png"
            />
          </a>
          <Navbutton link="/contact" name="Contact" />

          <Navbutton link="/jobs" name="Jobs" />
        </div>
      </div>
    );
  }
}

export default Navbar;
