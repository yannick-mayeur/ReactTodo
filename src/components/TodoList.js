import React from 'react'
import Todo from '../components/Todo'
import AddTodo from'./AddTodo';
import PropTypes from 'prop-types'

const TodoList = ({todos, addTodo}) => {
  return (
    <div className="todoList">
      <h2>List</h2>
      <ul>
        {todos.map((todo) => <Todo key={todo.id} content={todo.content} />)}
      </ul>
      <AddTodo addTodo={addTodo} />
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  addTodo: PropTypes.func.isRequired
}

export default TodoList
