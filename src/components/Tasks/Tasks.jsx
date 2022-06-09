import React from "react";
import styles from "./tasks.module.css";
import Task from '../Task/Task'

const Tasks = ({ remove, verify, countInc, data }) => {
  // NOTE: do not delete `data-testid` key value pair
  return (
    <>
      {data.length !== 0 ? (
        <ul data-testid="tasks" className={styles.tasks}>
          {data.map((e, index) => {
            return (
              <Task
                key={e.text}
                remove={remove}
                e={e}
                index={index}
                verify={verify}
                countInc={countInc}
              />
            );
          })}
        </ul>
      ) : (
        <div data-testid="tasks-empty" className={styles.empty}>
          {/* Show when No Tasks are present */}
          <h3>No todos</h3>
        </div>
      )}
    </>
  );
};

export default Tasks;
