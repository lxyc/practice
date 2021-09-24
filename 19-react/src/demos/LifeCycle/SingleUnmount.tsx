import React from "react";

interface SingleMountProps {
  name: string;
  onClick?: () => void
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

  componentWillUnmount() {
    this.log("componentWillUnmount");
  }

  log(...args: string[]) {
    console.log(`--${this.props.name}--${args.join()}--`);
  }

  handleClick() {
    // this.setState({ count: 1 });
    this.props.onClick?.()
  }

  render() {
    this.log("render");
    return (
      <div>
        <div>{this.props.name}</div>
        <div>
          <button onClick={this.handleClick.bind(this)}>
            {this.props.name} Hide
          </button>
        </div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
