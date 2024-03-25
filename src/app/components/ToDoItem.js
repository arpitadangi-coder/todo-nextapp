import React from 'react';

const ToDoItem = ({ task, completed, onToggleCompleted, onDelete }) => {
  return (
    <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      <input type="checkbox" checked={completed} onChange={onToggleCompleted} />
      {task}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default ToDoItem;
