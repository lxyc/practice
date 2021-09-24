import React from "react";
import SingleMount from './SingleMount'

export default class ParentMount extends React.Component {
  render() {
    return <div>
      <SingleMount name="parent">
        <SingleMount name="child" />
      </SingleMount>
    </div>
  }
}
