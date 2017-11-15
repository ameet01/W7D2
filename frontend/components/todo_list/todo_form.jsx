import React from 'react';
import ErrorItem from './error_item';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(key) {
    return e => this.setState({ [key]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state);
    this.props.postTodo({ todo }).then(() => this.setState({
        title: "",
        body: ""
      })
    );
  }

  render() {

    return (
      //had to copy solution, took an hour for it to properly create new todo
      <form className="todo-form" onSubmit={ this.handleSubmit }>
        <ErrorItem errors={this.props.errors} />
        <label>Title:
          <input
            className="input"
            ref="title"
            value={ this.state.title }
            onChange={ this.update('title') }
            />
        </label>
        <br />
        <label>Body:
          <textarea
            className="input"
            ref="body"
            value={ this.state.body }
            onChange={ this.update('body') }
            ></textarea>
        </label>

        <button className="create-button">Create Todo!</button>
      </form>
    );

  }
}

export default TodoForm;
