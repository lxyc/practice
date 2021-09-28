import React from "react";

class Child extends React.Component {
  state = { color: "blue" };

  changeColor(color: string) {
    this.setState({ color });
  }

  render() {
    return <div style={{ color: this.state.color }}>Instance-Ref-Class</div>;
  }
}

class InstanceClass extends React.Component {
	// TS 声明时传入 Child (class 也可以作为类型)
  instanceRef = React.createRef<Child>();

  handleChangeColor = () => {
		// this.instanceRef.current 为组件实例，可以获取到所有组件和方法
    this.instanceRef.current!.changeColor("red");
  };

  render() {
    return (
      <div>
        <button onClick={this.handleChangeColor}>CHANGE COLOR</button>
        <Child ref={this.instanceRef} />
      </div>
    );
  }
}

export default InstanceClass;
