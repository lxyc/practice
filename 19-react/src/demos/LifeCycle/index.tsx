import React from "react";
const { log } = console;

interface LifeCycleState {
  count: number;
}
interface LifeCycleProps {}
export default class LifeCycle extends React.Component<
  LifeCycleProps,
  LifeCycleState
> {
  state: LifeCycleState = { count: 0 };
  constructor(props: LifeCycleProps) {
    super(props);
    log("---constructor---");
  }

  static getDerivedStateFromProps() {
    log("---getDerivedStateFromProps---");
    return null;
  }

  shouldComponentUpdate() {
    log("---shouldComponentUpdate---");
    return true;
  }

  componentDidMount() {
    this.setState((state) => {
      log("---setState---");
      return { count: state.count + 1 };
    });
    log("---componentDidMount---");
  }

  render() {
    log("---render---");
    return <div>---render---</div>;
  }
}
