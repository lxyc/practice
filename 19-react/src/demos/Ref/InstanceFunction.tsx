import React from "react";

// 需要声明实例
interface ChildInstance {
  color: string;
  changeColor: (color: string) => void
}
const Child = React.forwardRef<ChildInstance>((_, ref) => {
  const [color, setColor] = React.useState("blue");

  // 暴露实例
  React.useImperativeHandle(ref, () => ({
    color,
    changeColor: setColor
  }))

  return <div style={{ color }}>Instance-Ref-Function</div>;
});

// 该组件也可改造成函数组件
class InstanceFunction extends React.Component {
  instanceRef = React.createRef<ChildInstance>();

  handleChangeColor = () => {
    // this.instanceRef.current 为组件实例，可以获取到暴露相关信息
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

export default InstanceFunction;
