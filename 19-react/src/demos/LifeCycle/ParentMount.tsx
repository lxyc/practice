import React from "react";
import Single from "./Single";

export default class ParentMount extends React.Component {
  render() {
    return (
      <div>
        <Single name="parent">
          <Single name="child" />
        </Single>
      </div>
    );
  }
}
