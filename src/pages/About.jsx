import React, { PureComponent } from "react";
import AboutRecommend from "./AboutRecommend";
import { Outlet } from "react-router-dom";

export class About extends PureComponent {
  render() {
    return (
      <div>
        <h2>About</h2>
        <AboutRecommend />
        <Outlet />
      </div>
    );
  }
}

export default About;
