import React, { useState, useEffect } from 'react'
import TodoForm from '../TodoForm/TodoForm'
import ToDo from '../ToDo/ToDo'

const LOCAL_STORAGE_KEY = 'todo-list'

const TodoListContainer = () => {
  const [todoList, setTodoList] = useState([])
  const [todoName, setTodoName] = useState('')
  const [todoPriority, setTodoPriority] = useState(0)

  useEffect(() => {
    if (!localStorage.getItem(LOCAL_STORAGE_KEY)) return
    const STORED_DATA = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    setTodoList(STORED_DATA)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList))
  }, [todoList])

  function addTodo (e) {
    e.preventDefault()
    // eslint-disable-next-line eqeqeq
    if (todoName == false || todoName == null) {
      setTodoName('')
      return
    }

    if (todoPriority === 0) {
      console.log('Select Priority')
      return
    }

    const ToDo = {
      name: todoName,
      id: Date.now(),
      completed: false,
      priority: todoPriority
    }

    setTodoList([...todoList, ToDo])
    syncStorage()
    setTodoName('')
  }

  function syncStorage () {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList))
  }

  function deleteTodo (id) {
    setTodoList((prevState) => prevState.filter((task) => task.id !== id))
  }

  function setComplete (id) {
    const updatedList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo
    })

    setTodoList(updatedList)
  }

  function setPriority (e) {
    if (e.target.value === 'Select Priority') setTodoPriority(0)
    if (e.target.value === 'Low') setTodoPriority(1)
    if (e.target.value === 'Medium') setTodoPriority(2)
    if (e.target.value === 'High') setTodoPriority(3)
  }

  function sortTodos (e) {
    if (e.target.value === 'High to Low') {
      const sortedTodos = todoList.sort((a, b) => {
        return a.priority < b.priority ? 1 : -1
      })
      setTodoList([...sortedTodos])
    }

    if (e.target.value === 'Low to High') {
      const sortedTodos = todoList.sort((a, b) => {
        return b.priority < a.priority ? 1 : -1
      })
      setTodoList([...sortedTodos])
    }
  }

  return (
    <div className="main--div">
      <h1>My Todos</h1>
      <TodoForm
        addTodo={addTodo}
        setPriority={setPriority}
        todoName={todoName}
        setTodoName={setTodoName}
        sortTodos={sortTodos}
      />
      <div className="todo--div">
        <ul>
            {todoList.map((todo) => (
              <ToDo key={todo.id} task={todo} setComplete={setComplete} deleteTodo={deleteTodo} />
            ))}
        </ul>
      </div>
    </div>
  )
}

export default TodoListContainer
