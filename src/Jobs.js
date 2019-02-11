import React from "react";
import Button from "./Button";

class Jobs extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      eMail: "",
      phoneNum: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const vid5 =
      "https://ak1.picdn.net/shutterstock/videos/1019016241/preview/stock-footage-los-angeles-california-circa-flying-in-los-angeles-amongst-the-hollywood-hills-hollwyood.webm";
    return (
      <div className="jobs-wrapper">
        <div className="jobs-banner-wrapper">
          <h1 className="jobs-banner-title">Join us!</h1>
          <video autoPlay loop className="jobs-banner">
            <source src={vid5} />
          </video>
        </div>

        <div className="careers">
          <h2>Careers</h2>

          <p>Find out how to start a career with us!</p>
          <button className="jobs-button">View Job Opportunities</button>
        </div>

        <div className="internships">
          <h2>Internships</h2>
          <p>Explore our internship opportunities!</p>
          <button className="jobs-button">View Internship Opportunities</button>
        </div>
        <div className="meet-the-team">
          <h2>Meet the Team</h2>
          <p>Find out more about our team members</p>
          <a href="/about">
            <button className="jobs-button">Meet the experts</button>
          </a>
        </div>
      </div>
    );
  }
}

export default Jobs;
