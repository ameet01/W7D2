export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
import * as APITodoUtil from '../util/todo_api_util';

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos: todos
});

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo: todo
});

export const getTodos = () => dispatch => (
  APITodoUtil.getTodos().then(todos => dispatch(receiveTodos(todos)))
);
