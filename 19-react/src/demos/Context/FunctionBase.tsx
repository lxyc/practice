import React from "react";
// import ThemeContext, { EnumTheme,  } from "./themeContext";
import ThemeContext, { EnumTheme, ThemeProvider } from "./themeContextOptimize";

// const FunctionBase = () => {
//   const themeState = React.useState(EnumTheme.dark);

//   return (
//     // 通过 ThemeContext.Provider，其后代组件均可获取 value 中的值
//     <ThemeContext.Provider value={themeState}>
//       <Parent>
//         <Child />
//       </Parent>
//     </ThemeContext.Provider>
//   );
// };

const OptimizeBase = () => (
  <ThemeProvider>
    <Parent>
      <Child />
    </Parent>
  </ThemeProvider>
);

const Parent = (props: { children: React.ReactNode }) => {
  // useContext 获取指定的 Context 对象
  const [theme] = React.useContext(ThemeContext);
  return (
    <div>
      <div>I am Parent Component</div>
      <div>theme: {theme}</div>
      <div>{props.children}</div>
    </div>
  );
};

const Child = () => {
  // useContext 获取指定的 Context 对象
  const [theme, setTheme] = React.useContext(ThemeContext);
  return (
    <div>
      <div>I am Child Component</div>
      <div>theme: {theme}</div>
      <select
        name="选择主题"
        value={theme}
        onChange={(e) => setTheme(e.target.value as EnumTheme)}
      >
        <option value={EnumTheme.light}>浅色</option>
        <option value={EnumTheme.dark}>深色</option>
      </select>
    </div>
  );
};

export default OptimizeBase;
