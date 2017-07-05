import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Todolist extends PureComponent {
  render() {
    const { id, isCompleted, task } = this.props.todo;
    const taskClass = isCompleted ? 'taskComplete' : 'taskIncomplete';

    return (
      <div>
        <span className={taskClass} onClick={() => this.props.onClick(id)}>
          {task}
        </span>
        <button onClick={() => this.props.onDelete(id)}>Delete</button>
      </div>
    );
  }
}

Todolist.PropTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    task: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Todolist;
