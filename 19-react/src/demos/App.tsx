import React from 'react';
import styles from './App.module.less';

import SingleMount from './LifeCycle/SingleMount'

function App() {
  const [name, setName] = React.useState('SingleMount')
  return (
    <div className={styles.App}>
      APP
      <SingleMount name={name} />
      <button onClick={() => setName(p => p + '1234')}>CHANGE</button>
    </div>
  );
}

export default App;
