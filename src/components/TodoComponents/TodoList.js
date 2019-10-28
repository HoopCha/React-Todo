import React from 'react';

import Item from './Todo';

const TodoList = props => {
  return (
    <div>
      {props.toDos.map(item => (
        <Item
          key={item.id}
          task={item}
          toggleCompleted={props.toggleCompleted}
        />
      ))}
    </div>
  );
};

export default TodoList;
