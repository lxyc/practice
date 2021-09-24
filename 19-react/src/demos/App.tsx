import React from "react";
import styles from "./App.module.less";

import StrictMode from './StrictMode'
import Key from "./Key";
import LifeCycle from "./LifeCycle";

function App() {
  return (
    <div className={styles.App}>
      <p>---StrictMode---</p>
      <StrictMode />
      <p>---key---</p>
      <Key />
      <p>---LifeCycle---</p>
      <LifeCycle />
    </div>
  );
}

export default App;
