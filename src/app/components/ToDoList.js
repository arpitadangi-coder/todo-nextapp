"use client";
import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (event) => {
    event.preventDefault();
    const task = event.target.elements.task.value;
    if (task) {
      setTodos([...todos, { id: Date.now(), task, completed: false }]);
      event.target.elements.task.value = '';
    }
  };

  const handleToggleCompleted = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input type="text" placeholder="Add to-do task" name="task" required />
      <button type="submit">Add</button>
      <ul>
        {todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            task={todo.task}
            completed={todo.completed}
            onToggleCompleted={() => handleToggleCompleted(todo.id)}
            onDelete={() => handleDeleteTodo(todo.id)}
          />
        ))}
      </ul>
    </form>
  );
};

export default ToDoList;
