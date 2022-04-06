import * as React from "react";
import styles from "./App.module.scss";



const App: React.FC = () => {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>
          {/* <img alt="logo" src={logo} width={128} /> */}
        </h1>
        <h3>Lets go....</h3>
      </header>
    </main>
  );
};

export default App;
