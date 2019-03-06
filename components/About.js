import React from "react";
import Bio from "./Bio";
import TeamData from "./TeamData";
class About extends React.Component {
  constructor() {
    super();
  }

  render() {
    const vid2 =
      "https://ak9.picdn.net/shutterstock/videos/1021525339/preview/stock-footage-aerial-helicopter-shot-flying-around-downtown-los-angeles-at-sunset-wide-shot-filmed-with-a-red.webm";
    const teamData = TeamData.map(member => (
      <Bio
        key={member.id}
        name={member.name}
        pos={member.position}
        imgURL={member.imgURL}
        description={member.description}
      />
    ));
    let styles = {
      height: "200px"
    };
    return (
      <div className="about-wrapper">
        <div className="about-banner">
          <h1 className="about-title">Meet the team!</h1>
          <video autoPlay loop className="about-banner-vid">
            <source src={vid2} />
          </video>
        </div>
        <div style={styles} />

        {teamData}
      </div>
    );
  }
}

export default About;
