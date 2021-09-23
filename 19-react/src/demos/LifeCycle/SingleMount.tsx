import React from "react";

interface SingleMountProps {
  name: string;
}
export default class SingleMount extends React.Component<SingleMountProps> {
  state = { b: 2, a: 3 };
  constructor(props: SingleMountProps) {
    super(props);
    this.log("constructor");
  }

  static getDerivedStateFromProps(props: SingleMountProps) {
    console.log(`--${props.name}--getDerivedStateFromProps--`);
    return { a: 1 };
  }

  log(...args: string[]) {
    console.log(`--${this.props.name}--${args.join()}--`);
  }

  render() {
    this.log("render", JSON.stringify(this.state));
    return <div>SingleMount</div>;
  }
}
