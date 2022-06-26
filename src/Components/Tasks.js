import React from "react";
import Task from "./Task";

const tasks = [
  {
    id: 1,
    text: "Doc Appointment",
  },
  {
    id: 2,
    text: "Get Veggies",
  },
  {
    id: 3,
    text: "Buy Milk",
  },
];

const Tasks = () => {
  return (
    <div>
      <div>Tasks</div>
      <div>
        {tasks.map((task) => (
          <Task key={task.id} task={task}/>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
