import React from "react";
import Links from "./Links";
function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/*<p>{props.bio ? props.bio : null}</p> */}
      {props.bio ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links linkedinLink={props.linkedinLink} githubLink={props.githubLink}/>
    </div>
  );
}

export default About;
