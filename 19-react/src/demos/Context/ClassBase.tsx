import React from "react";
import { EnumTheme } from "./themeContext";

// Class 组件中建议使用对象形式
const initialThemeCtx = {
  value: EnumTheme.light,
  change: (theme: EnumTheme) => {},
};
const ThemeContext = React.createContext(initialThemeCtx);

class ClassBase extends React.Component {
  state = {
    value: EnumTheme.light,
    change: (value: EnumTheme) => this.setState({ value }),
  };

  render() {
    return (
      // 使用一个 Provider 来将当前的 theme 传递给以下的组件树
      <ThemeContext.Provider value={this.state}>
        <Parent>
          <Child />
        </Parent>
      </ThemeContext.Provider>
    );
  }
}

class Parent extends React.Component {
  // 指定 contextType 读取当前的 theme context
  static contextType = ThemeContext;
  render() {
    return (
      <div>
        <div>I am Parent Component</div>
        <div>theme: {this.context.value}</div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

class Child extends React.Component {
  static contextType = ThemeContext;

  render() {
    return (
      <div>
        <div>I am Child Component</div>
        <div>theme: {this.context.value}</div>
        <select
          name="选择主题"
          value={this.context.value}
          onChange={(e) => this.context.change(e.target.value)}
        >
          <option value={EnumTheme.light}>浅色</option>
          <option value={EnumTheme.dark}>深色</option>
        </select>
        {/* <ThemeContext.Consumer>
          {(value) => <div>theme: {value}</div>}
        </ThemeContext.Consumer> */}
      </div>
    );
  }
}

export default ClassBase;
