import React from 'react';
import TaskItem from '../TaskItem';

const TaskList = ({ tasks, handleToggleTask, handleDeleteTask, filter }) => {
  let filteredTasks = tasks;

  if (filter === 'active') {
    filteredTasks = tasks.filter(task => !task.completed);
  } else if (filter === 'completed') {
    filteredTasks = tasks.filter(task => task.completed);
  }

  return (
    <ul>
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          handleToggleTask={handleToggleTask}
          handleDeleteTask={handleDeleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
