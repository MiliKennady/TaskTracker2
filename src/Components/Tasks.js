import React from "react";
import Task from "./Task";



const Tasks = ({tasks, onDelete, onToggle}) => {
 
  return (
    <div>
      <div>Tasks</div>
      {tasks.length>0 ? 
      (<div>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onDelete = {onDelete} onToggle = {onToggle}/>
        ))}
      </div>) 
      : (<p>Completed all tasks</p>) }
    </div>
  );
};

export default Tasks;
