import React from "react";
import SingleUpdate from "./SingleUpdate";

export default class ParentUpdate extends React.Component {
  state = { count: 0 };
  render() {
    return (
      <div>
        <SingleUpdate name="parent" onClick={() => this.setState({ count: 1 })}>
          <SingleUpdate name={`child_${this.state.count}`} />
        </SingleUpdate>
      </div>
    );
  }
}
