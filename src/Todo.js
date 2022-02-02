import React from "react"

export default function Todo({ todo, toggleTodo }) {
  function handleChange() {
    toggleTodo(todo.id)
  }

  return (
    <div>
      <label htmlFor="">
        <input
          onChange={handleChange}
          type="checkbox"
          checked={todo.completed}
        />
        {todo.name}
      </label>
    </div>
  )
}
