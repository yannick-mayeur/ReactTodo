import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { addTodo } from '../actions/'


const mapStateToProps = state => ({
  title: state.title,
  todos: state.todos
})

const mapDispatchToState = dispatch => ({
  addTodo: text => dispatch(addTodo(text))
})

export default connect(
  mapStateToProps,
  mapDispatchToState
)(TodoList)
