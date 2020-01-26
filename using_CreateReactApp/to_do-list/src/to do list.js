import React from 'react';

const Todos = ({todos, deleteTodo}) => {

  const todoList = todos (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
        </div>
      )
    })
  )

  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}

export default Todos;
