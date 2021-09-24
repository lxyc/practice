import React from "react";
import Single from "./Single";

export default class ParentUpdate extends React.Component {
  state = { count: 0 };
  render() {
    return (
      <div>
        <Single name="parent" onClick={() => this.setState({ count: 1 })}>
          <Single name="child" />
        </Single>
      </div>
    );
  }
}
