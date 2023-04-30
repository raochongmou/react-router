import React, { PureComponent } from "react";
import hoc from "../hoc";

export class User extends PureComponent {
  render() {
    const { query } = this.props.router;
    return (
      <div>
        User{query.username}
      </div>
    );
  }
}

export default hoc(User);
