import React from 'react';
import PropTypes from 'prop-types'

const AddTodo = ({addTodo}) => {
  let input;
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if(!input.value.trim()) {
          return;
        }
        addTodo(input.value.trim());
        input.value = '';
      }}
    >
      <input ref={node => input = node} />
      <button type="submit">Add todo</button>
    </form>
  )
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo;
