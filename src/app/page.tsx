import React from 'react'
import ToDoList from './components/ToDoList'

const ToDoApp = () => (
  <div style={{
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem',
    backgroundColor: 'black',
    color: 'blue',
    textAlign: 'center',
    height: '500px'
  }}>
    <h1 style={{
      fontSize: '2.5rem',
      marginBottom: '1rem'
    }}>My To-Do List</h1>
    <ToDoList />
  </div>
)

export default ToDoApp