import React from "react";
// import styles from "./App.module.less";

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <span>架构工作流程概览{count}</span>
      <button onClick={() => setCount((p) => p + 1)}>change</button>
    </div>
  );
}

export default App;
