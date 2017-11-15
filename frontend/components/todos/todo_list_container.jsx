import TodoList from './todo_list';
import allTodos from '../../reducers/selectors';
import {connect} from 'react-redux';
import {receiveTodos, receiveTodo, getTodos, postTodo, deleteTodo, updateTodo} from '../../actions/todo_actions';



const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  postTodo: (todo) => dispatch(postTodo(todo)),
  getTodos: () => dispatch(getTodos()),
  removeTodo: (todo) => dispatch(deleteTodo(todo)),
  updateTodo: (todo) => dispatch(updateTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
