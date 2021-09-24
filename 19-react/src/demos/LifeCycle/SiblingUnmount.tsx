import React from "react";
import Single from "./Single";

export default class SiblingUnmount extends React.Component {
  state = {
    hide1: false,
    hide2: false,
  };
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
        <button onClick={() => this.setState({ hide1: true })}>
          hide sibling1
        </button>
        <button onClick={() => this.setState({ hide2: true })}>
          hide sibling2
        </button>
        {!this.state.hide1 && <Single name="sibling1" />}
        {!this.state.hide2 && <Single name="sibling2" />}
      </div>
    );
  }
}
