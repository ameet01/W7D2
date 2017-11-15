import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from '../todo_list/todo_form';
import {receiveTodos, receiveTodo} from '../../actions/todo_actions';



class TodoList extends React.Component {

  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    let {todos} = this.props;
    let todoslist = todos.map((el, idx) =>
      // <li key={idx}>{el.title}</li>
      <TodoListItem key={idx} todo={el}/>
    );

    return (
      <div>
        <ul>{todoslist}</ul>
        <TodoForm postTodo={this.props.postTodo}/>
      </div>
    );
  }

}

export default TodoList;
