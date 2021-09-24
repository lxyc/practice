import React from "react";
import SingleUnmount from "./SingleUnmount";

export default class ParentUnmount extends React.Component {
  state = {
    hideParent: false,
    hideChild: false,
  };
  render() {
    return (
      <div>
        {!this.state.hideParent && (
          <SingleUnmount
            name="parent"
            onClick={() => this.setState({ hideParent: true })}
          >
            {!this.state.hideChild && (
              <SingleUnmount
                name="child"
                onClick={() => this.setState({ hideChild: true })}
              />
            )}
          </SingleUnmount>
        )}
      </div>
    );
  }
}
