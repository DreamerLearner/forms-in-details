import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends PureComponent {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.onTodoSubmit(this.refs.createtodo.value, this.props.player);
    this.refs.createtodo.value = '';
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" placeholder="Add new todo" ref="createtodo" />
        <button type="submit">Add</button>
      </form>
    );
  }
}

AddTodo.PropTypes = {
  player: PropTypes.object.isRequired,
  onTodoSubmit: PropTypes.func.isRequired,
};

export default AddTodo;
