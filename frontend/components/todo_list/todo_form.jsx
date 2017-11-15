import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.receiveTodo = this.receiveTodo.bind(this);
  }

  handleChange(e) {
    let value = e.currentTarget.value;
    this.setState({value});
  }

  receiveTodo(e) {
    e.preventDefault();
    const newLi = Object.assign({}, {title: this.state.value, body: "", done: true});
    this.props.postTodo(newLi).then(() => this.setState({value: ''}));
  }

  render() {
    return (
      <form>
        <div>{this.props.errors}</div>
        <input type="text" onChange={this.handleChange} value={this.state.value}></input>
        <button type="submit" onClick={this.receiveTodo}>Submit</button>
      </form>
    );
  }
}

function uniqueId() {
  return new Date().getTime();
}

export default TodoForm;
