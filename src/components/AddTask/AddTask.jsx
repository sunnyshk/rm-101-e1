import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({ data, addTodo, len }) => {
  // NOTE: do not delete `data-testid` key value pair

  const [input, setInput] = useState("");

  const handleAdd = (e) => {
    setInput(e.target.value);
    // console.log(input)
  };
  return (
    <div className={styles.todoForm}>
      <input
        value={input}
        placeholder="Enter Task"
        data-testid="add-task-input"
        type="text"
        onChange={handleAdd}
      />
      <button
        onClick={() => {
          if (input.length !== 0) {
            let checker = data.filter((e) => e.text === input);
            if (checker.length == 0) {
              addTodo({
                id: len + 1,
                text: input,
                done: false,
                count: 1,
              });
            }
          }
        }}
        data-testid="add-task-button"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
