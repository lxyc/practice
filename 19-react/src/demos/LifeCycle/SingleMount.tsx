import React from "react";

interface SingleMountProps {
  name: string;
}
export default class SingleMount extends React.Component<SingleMountProps> {
  state = {};
  constructor(props: SingleMountProps) {
    super(props);
    this.log("constructor");
  }

  static getDerivedStateFromProps(props: SingleMountProps) {
    console.log(`--${props.name}--getDerivedStateFromProps--`);
    return null;
  }

  componentDidMount() {
    this.log("componentDidMount");
  }

  log(...args: string[]) {
    console.log(`--${this.props.name}--${args.join()}--`);
  }

  render() {
    this.log("render");
    return (
      <div>
        <div>{this.props.name}</div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
