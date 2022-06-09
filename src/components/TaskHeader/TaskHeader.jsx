import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({len,comp}) => {
  // sample values to be replaced
  // let totalTask = 0;
  // let unCompletedTask = 0;

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      You have
      <b data-testid="header-remaining-task">{comp}</b> of 
      <b data-testid="header-total-task">{len}</b> Tasks remaining
    </div>
  );
};

export default TaskHeader;
