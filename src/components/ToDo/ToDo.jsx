import React from 'react'

const ToDo = ({ task, setComplete, deleteTodo }) => {
  return (
    <li>
      <div className={task.completed ? 'completed todo-text' : 'uncompleted todo-text'}>
        <p className={task.completed ? 'completed todo-name' : 'uncompleted todo-name'}>{task.name}</p>
        <p className={task.completed ? 'completed' : 'uncompleted'}>
          {task.priority === 1 ? 'Low Priority' : task.priority === 3 ? 'High Priority' : 'Medium Priority'}
        </p>
      </div>
      <div className="todo-button-div">
        <button className="complete-button" onClick={() => setComplete(task.id)}>
          {task.completed === false ? 'Complete' : 'Uncomplete'}
        </button>
        <button className="delete-button" onClick={() => deleteTodo(task.id)}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default ToDo
