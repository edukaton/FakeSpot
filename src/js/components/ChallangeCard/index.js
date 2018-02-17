import React from "react";
import styles from "./style.sass";

const ChallangeCard = ({ children, ...props }) => (<div className={styles.challangeCard} {...props}>{children}</div>);
export default ChallangeCard;
