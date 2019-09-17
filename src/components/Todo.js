import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({content}) => {
  return <li>{content}</li>
}

Todo.propTypes = {
  content: PropTypes.string.isRequired
}

export default Todo
