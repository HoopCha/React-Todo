import React from 'react';
import Todo from './Todo';
import styled from 'styled-components'

const List = styled.div `
display: flex;
flex-wrap:wrap;
justify-content:center;
`


const TodoList = props => {
  return (
    <List>
      {props.toDos.map(item => (
        <Todo
          key={item.id}
          task={item}
          toggleCompleted={props.toggleCompleted}
        />
      ))}
    </List>
  );
};

export default TodoList;
