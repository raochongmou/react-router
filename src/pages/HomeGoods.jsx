import React, { PureComponent } from "react";
import hoc from "../hoc";
// import { useParams } from "react-router-dom";

export class HomeGoods extends PureComponent {
  render() {
    const { params } = this.props.router;
    return (
      <div>
        HomeGoods: id---{params.id}
      </div>
    );
  }
}

export default hoc(HomeGoods);
