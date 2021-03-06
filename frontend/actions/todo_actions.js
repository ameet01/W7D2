export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
import * as APITodoUtil from '../util/todo_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos: todos
});

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo: todo
});

export const removeTodo = todo => ({
  type: REMOVE_TODO,
  todo: todo
});




export const getTodos = () => dispatch => (
  APITodoUtil.getTodos().then(todos => dispatch(receiveTodos(todos)))
);

export const postTodo = todo => dispatch => (
  APITodoUtil.postTodo(todo)
    .then(
      todo => dispatch(receiveTodo(todo)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const deleteTodo = todo => dispatch => (
  APITodoUtil.removeTodo(todo).then(
    todo => dispatch(removeTodo(todo))
  )
);

export const updateTodo = todo => dispatch => (
  APITodoUtil.updateTodo(todo).then(
    todo => dispatch(receiveTodo(todo))
  )
);
