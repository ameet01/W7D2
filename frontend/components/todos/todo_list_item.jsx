import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandle = this.clickHandle.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  clickHandle(e) {
    e.preventDefault();
    this.props.removeTodo(this.props.todo);
  }

  toggle(e) {
    e.preventDefault();
    const obj = Object.assign({}, this.props.todo, {done: !this.props.todo.done})
    console.log(obj.done);
    this.props.updateTodo(obj)
  }

  render() {
    return (
      <div>
        <li>{this.props.todo.title}</li>
        <button onClick={this.clickHandle}>Remove</button>
        <button className={this.props.todo.done ? "done" : "undone"} onClick={this.toggle}>Toggle Done</button>
      </div>
    );
  }
}

export default TodoListItem;
