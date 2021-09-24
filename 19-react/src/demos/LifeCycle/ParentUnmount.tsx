import React from "react";
import Single from "./Single";

export default class ParentUnmount extends React.Component {
  state = {
    hideParent: false,
    hideChild: false,
  };
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ hideParent: true })}>
          hide parent
        </button>
        <button onClick={() => this.setState({ hideChild: true })}>
          hide child
        </button>
        {!this.state.hideParent && (
          <Single name="parent">
            {!this.state.hideChild && <Single name="child" />}
          </Single>
        )}
      </div>
    );
  }
}
