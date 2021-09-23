import React from 'react';
import styles from './App.module.less';

import SingleMount from './LifeCycle/SingleMount'

function App() {
  return (
    <div className={styles.App}>
      APP
      <SingleMount name="SingleMount" />
    </div>
  );
}

export default App;
