import React from "react";
import styles from "./style.sass";

const Container = ({ main, children }) => (
  <div className={styles.container}>
    {children}
    <div className={styles.main}>
      {main}
    </div>
  </div>
);
export default Container;
