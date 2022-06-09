import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";

const Task = ({countInc, verify, remove, index, e}) => {
  // NOTE: do not delete `data-testid` key value pair
  return (
    <li data-testid="task" className={styles.task}>
    {e.done ? (
        <input
            type="checkbox"
            data-testid="task-checkbox"
            onChange={() => verify(e)}
            checked
        />
    ) : (
        <input
            type="checkbox"
            data-testid="task-checkbox"
            onChange={() => verify(e)}
        />
    )}
    {e.done ? (
        <div
            data-testid="task-text"
            style={{ textDecoration: "line-through", color: "#D3D3D3" }}
        >
            {e.text}
        </div>
    ) : (
        <div data-testid="task-text">{e.text}</div>
    )}
    {/* Counter here */}
    <Counter count={e.count} incCount={countInc} e={e} />
    <button
        className={styles.delBtn}
        data-testid="task-remove-button"
        onClick={() => remove(index)}
    >
        X
    </button>
</li>
);
};

export default Task;
