import React from "react";
import styles from "./App.module.less";

// import SingleMount from "./LifeCycle/SingleMount";
// import SingleUpdate from "./LifeCycle/Single";
// import SingleUnmount from "./LifeCycle/SingleUnmount";
// import ParentMount from './LifeCycle/ParentMount'
// import ParentUpdate from './LifeCycle/ParentUpdate'
import ParentUnmount from './LifeCycle/ParentUnmount'

// import Key from "./Key";

function App() {
  const [name, setName] = React.useState("SingleMount");
  return (
    <div className={styles.App}>
      APP
      {/* <SingleMount name="SingleMount" /> */}
      {/* <SingleUpdate name={name} /> */}
      {/* {Boolean(name) && <SingleUnmount name="SingleMount" /> } */}
      {/* <ParentMount /> */}
      {/* <ParentUpdate /> */}
      <ParentUnmount />
      <button onClick={() => setName((p) => p + "1234")}>CHANGE</button>
      <button onClick={() => setName('')}>Hide</button>
      {/* <Key /> */}
    </div>
  );
}

export default App;
