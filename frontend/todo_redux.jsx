import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import { receiveTodos, receiveTodo, getTodos } from './actions/todo_actions';
import Root from './components/root';
import allTodos from './reducers/selectors';
import thunk from './middleware/thunkmiddleware';



document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  window.allTodos = allTodos;
  window.getTodos = getTodos;
  window.thunk = thunk;

  const root = document.getElementById("content");
  ReactDOM.render(<Root store={store}/> , root);
});
