import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Text from "./components/Text";
import ScrollAnimation from "react-animate-on-scroll";
import Shade from "./components/Shade";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Tools from "./components/Tools";
import Showroom from "./components/Showroom";
import ShowroomTitle from "./components/ShowroomTitle";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Jobs from "./components/Jobs";

import { Provider } from "react-redux";
import store from "./store";

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
