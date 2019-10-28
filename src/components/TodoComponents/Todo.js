import React from 'react';

const Item = props => {
  return (
    <div
      className={`item${props.task.completed ? ' completed' : ''}`}
      onClick={() => props.toggleCompleted(props.task.id)}
    >
      <p>{props.task.task}</p>
    </div>
  );
};

export default Item;
