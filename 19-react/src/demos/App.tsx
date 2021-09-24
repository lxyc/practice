import styles from "./App.module.less";

import StrictMode from "./StrictMode";
import Key from "./Key";
import LifeCycle from "./LifeCycle";
import FunctionLifeCycle from "./FunctionLifeCycle";
import Context from "./Context";

function App() {
  return (
    <div className={styles.App}>
      <p>---StrictMode---</p>
      {false && <StrictMode />}
      <p>---key---</p>
      {false && <Key />}
      <p>---LifeCycle---</p>
      {false && <LifeCycle />}
      <p>---FunctionLifeCycle---</p>
      {false && <FunctionLifeCycle />}
      <p>---Context---</p>
      <Context />
    </div>
  );
}

export default App;
