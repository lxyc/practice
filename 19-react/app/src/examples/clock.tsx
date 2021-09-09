import React from "react";

interface ClockState {
  value: Date;
}
export class ClassClock extends React.Component<{}, ClockState> {
  timer: NodeJS.Timeout | null = null;
  state: ClockState = {
    value: new Date(),
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ value: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    this.timer && clearInterval(this.timer);
  }

  render() {
    return <div>{this.state.value.toString()}</div>;
  }
}

export function FuncClock() {
  const [value, setValue] = React.useState<Date>(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setValue(() => new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <div>{value.toString()}</div>;
}
