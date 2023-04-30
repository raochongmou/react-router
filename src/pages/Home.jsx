import React, { PureComponent } from "react";
import { Link, Outlet } from "react-router-dom";

export class Home extends PureComponent {
  render() {
    return (
      <div>
        <Link to={"/home/goods"}>商品</Link>
        <Outlet />
      </div>
    );
  }
}

export default Home;
