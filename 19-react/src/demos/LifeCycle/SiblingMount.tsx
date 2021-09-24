import React from "react";
import Single from "./Single";

export default class SiblingMount extends React.Component {
  constructor(props: any) {
    super(props);
    this.log("constructor");
  }

  componentDidMount() {
    this.log("componentDidMount");
  }

  componentDidUpdate() {
    this.log("componentDidUpdate");
  }

  componentWillUnmount() {
    this.log("componentWillUnmount");
  }

  log(...args: string[]) {
    console.log(`--parent--${args.join()}--`);
  }
  render() {
    this.log("render");
    return (
      <div>
        <Single name="Sibling1" />
        <Single name="Sibling2" />
      </div>
    );
  }
}
