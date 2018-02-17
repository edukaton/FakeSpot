import React from "react";
import styles from "./style.sass";

const NewsPaper = ({ children }) => (<div className={styles.newsPaper}>{children}<img src="/newspaper.png" alt="" /></div>);
export default NewsPaper;
