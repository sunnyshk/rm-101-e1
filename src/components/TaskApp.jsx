import React, { useEffect, useState } from "react";

import AddTask from "./AddTask/AddTask";

import styles from "./taskApp.module.css";

import { TaskHeader } from "./TaskHeader";

import Tasks from "./Tasks/Tasks";

const TaskApp = () => {
  const [data, setData] = useState([
    {
      id: 1,
      text: "Push up",
      done: true,
      count: 2,
    },
    {
      id: 2,
      text: "Pull Up",
      done: true,
      count: 3,
    },
    {
      id: 3,
      text: "Squats",
      done: false,
      count: 1,
    },
    {
      id: 4,
      text: "Sprint",
      done: false,
      count: 5,
    },
    {
      id: 5,
      text: "Stairs",
      done: false,
      count: 200,
    },
  ]);

  const [comp, setComp] = useState([]);

  useEffect(() => {
    setComp([...data.filter((e) => e.done)]);
  }, [data]);

  const addTodo = (pay) => {
    setData([...data, pay]);
  };

  const verify = (pay) => {
    pay.done = !pay.done;
    setData([...data]);
  };

  const remove = (target) => {
    data.splice(target, 1);
    setData([...data]);
  };

  const countInc = (pay,inc) => {
    pay.count += inc;
    if (pay.count < 0) {
      pay.count = 0;
      setData([...data]);
    }
    setData([...data]);
  };

  // const [task, setTask] = useState();
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader comp={comp.length} len={data.length} />
      <AddTask data={data} addTodo={addTodo} len={data.length} />
      <Tasks remove={remove} verify={verify} countInc={countInc} data={data} />
      {/* Add Task */}
      {/* Tasks */}
    </div>
  );
};

export default TaskApp;
