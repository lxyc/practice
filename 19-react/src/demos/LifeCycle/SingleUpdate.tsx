import React from "react";

interface SingleMountProps {
  name: string;
  onClick?: () => void
}
interface SingleMountState {
  count: number;
}
export default class SingleMount extends React.Component<SingleMountProps> {
  state: SingleMountState = { count: 0 };
  constructor(props: SingleMountProps) {
    super(props);
    this.log("constructor");
  }

  static getDerivedStateFromProps(props: SingleMountProps) {
    console.log(`--${props.name}--getDerivedStateFromProps--`);
    return null;
  }

  componentDidMount() {
    // this.setState({ count: 1 });
    this.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps: SingleMountProps) {
    // 在这里 this.props 还没有更新
    this.log("shouldComponentUpdate", nextProps.name);
    return true;
  }

  getSnapshotBeforeUpdate() {
    this.log("getSnapshotBeforeUpdate");
    return "snapshot";
  }

  componentDidUpdate(
    prevProps: SingleMountProps,
    prevState: SingleMountState,
    snapshot: string
  ) {
    this.log("componentDidUpdate", snapshot);
    // 1. 必须添加条件，否则会陷入死循环
    // 2. 当 state 再次更新时，会重新执行相关的生命周期函数
    // if (this.state.count < 2) {
    //   this.setState({ count: 2 });
    // }
  }

  log(...args: string[]) {
    console.log(`--${this.props.name}--${args.join()}--`);
  }

  handleClick() {
    this.setState({ count: 1 });
    this.props.onClick?.()
  }

  render() {
    this.log("render");
    return (
      <div>
        <div>{this.props.name}</div>
        <div>
          <button onClick={this.handleClick.bind(this)}>
            {this.props.name} CHANGE
          </button>
        </div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
