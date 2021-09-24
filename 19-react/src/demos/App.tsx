import styles from "./App.module.less";

import StrictMode from "./StrictMode";
import Key from "./Key";
import LifeCycle from "./LifeCycle";
import FunctionLifeCycle from "./FunctionLifeCycle";

function App() {
  return (
    <div className={styles.App}>
      <p>---StrictMode---</p>
      {false && <StrictMode />}
      <p>---key---</p>
      {false && <Key /> }
      <p>---LifeCycle---</p>
      {false && <LifeCycle /> }
      <p>---FunctionLifeCycle---</p>
      <FunctionLifeCycle />
    </div>
  );
}

export default App;
