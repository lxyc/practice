import React from "react";
import Single from "./Single";

export default class SiblingUpdate extends React.Component {
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
        <button onClick={() => this.setState({ count: 1 })}>CHANGE</button>
        <Single name="sibling1" onClick={() => this.setState({ count: 2 })} />
        <Single name="sibling2" onClick={() => this.setState({ count: 3 })}/>
      </div>
    );
  }
}
