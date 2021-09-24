import React from "react";

interface SingleMountProps {
  name: string;
  onClick?: () => void;
}
export default class SingleMount extends React.Component<SingleMountProps> {
  state = {};
  constructor(props: SingleMountProps) {
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

  handleClick() {
    this.setState({ count: 1 });
    this.props.onClick?.();
  }

  log(...args: string[]) {
    console.log(`--${this.props.name}--${args.join()}--`);
  }

  render() {
    this.log("render");
    return (
      <div>
        <div>-----</div>
        {this.props.name}
        <button onClick={this.handleClick.bind(this)}>
          {this.props.name} CHANGE
        </button>
        <div>-----</div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
