import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandle = this.clickHandle.bind(this);
  }

  clickHandle(e) {
    e.preventDefault();
    this.props.removeTodo({id: this.props.id});
  }

  render() {
    return (
      <div>
        <li>{this.props.todo.title}</li>
        <button onClick={this.clickHandle}>Remove</button>
      </div>
    );
  }
}

export default TodoListItem;
