import React from "react";
const { log } = console;

interface ClassComponentState {
  count: number;
}
interface ClassComponentProps {}
export default class ClassComponent extends React.Component<
  ClassComponentProps,
  ClassComponentState
> {
  state: ClassComponentState = { count: 0 };
  constructor(props: ClassComponentProps) {
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
