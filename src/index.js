import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Text from "./Text";
import ScrollAnimation from "react-animate-on-scroll";
import Shade from "./Shade";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Tools from "./Tools";
import Showroom from "./Showroom";
import ShowroomTitle from "./ShowroomTitle";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Products from "./Products";
import Jobs from "./Jobs";

import "./animate.css";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} exact />
          <Route path="/contact" component={Contact} />
          <Route path="/products" component={Products} />
          <Route path="/jobs" component={Jobs} />
          <Tools />
        </div>
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
