import React from "react";
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

import "./animate.css";
import "./styles.css";

class Home extends React.Component {
  constructor() {
    super();
  }
  render() {
    const vid1 =
      "https://ak7.picdn.net/shutterstock/videos/1962427/preview/stock-footage-downtown-los-angeles-skyline-and-freeway-city-traffic-at-night-timelapse.webm";
    const vid2 =
      "https://ak9.picdn.net/shutterstock/videos/1021525339/preview/stock-footage-aerial-helicopter-shot-flying-around-downtown-los-angeles-at-sunset-wide-shot-filmed-with-a-red.webm";
    const vid3 =
      "https://ak1.picdn.net/shutterstock/videos/1019016241/preview/stock-footage-los-angeles-california-circa-flying-in-los-angeles-amongst-the-hollywood-hills-hollwyood.webm";
    const vid4 =
      "https://ak9.picdn.net/shutterstock/videos/5605499/preview/stock-footage-downtown-los-angeles-city-buildings-skyline-at-sunset-k-timelapse.webm";
    const vid5 =
      "https://ak6.picdn.net/shutterstock/videos/25144106/preview/stock-footage-downtown-los-angeles-at-night-aerial-k-los-angeles.webm";
    const vid6 =
      "https://ak5.picdn.net/shutterstock/videos/20572315/preview/stock-footage-aerial-griffith-observatory-sunrise-los-angeles-california-hollywood-hills-sun-flare-usa-telescope.webm";
    return (
      <div className="App">
        <Navbar />
        <Tools />

        <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          animatePreScroll="false"
        >
          <Banner vidURL={vid4} />

          <Text
            title="Copy Solutions, Inc."
            descLink="/about"
            desc="Meet the team!"
          />
        </ScrollAnimation>

        <Showroom />

        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" delay="500">
          <ScrollAnimation animateIn="fadeInRight">
            <ShowroomTitle title="Products" />
          </ScrollAnimation>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" delay="500">
          <Banner vidURL={vid5} />
          <Text
            title="Contact Us"
            descLink="/contact"
            desc="Ask our experts a question!"
          />
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <Banner vidURL={vid3} />

          <Text title="Awards" desc="Check out our team's achievements!" />
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <Banner vidURL={vid6} />

          <Text
            title="Careers / Internships"
            descLink="/contact"
            desc="Explore opportunities"
          />
        </ScrollAnimation>

        {/*<Footer />*/}
      </div>
    );
  }
}

export default Home;
