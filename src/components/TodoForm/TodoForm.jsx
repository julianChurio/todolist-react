import React from 'react'

const TodoForm = ({ addTodo, setPriority, todoName, setTodoName, sortTodos }) => {
  return (
    <div className="input--div-wrapper">
      <div className="input--div">
        <form action="#">
          <input className="todo--input" type="text" value={todoName} onChange={(e) => setTodoName(e.target.value)} />
          <select onChange={setPriority} name="select" id="select">
            <option defaultValue>Select Priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </form>
      </div>
      <div className="button-div">
        <button className="add-todo-button" onClick={addTodo}>
          Add Tod
        </button>
        <select onChange={sortTodos} name="sort-select" id="sort-select">
          <option defaultValue>Sort</option>
          <option value="Low to High">Low to High</option>
          <option value="High to Low">High to Low</option>
        </select>
      </div>
    </div>
  )
}

export default TodoForm
