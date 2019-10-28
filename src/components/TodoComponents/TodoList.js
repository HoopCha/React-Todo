import React from 'react';
import Item from './Todo';
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
        <Item
          key={item.id}
          task={item}
          toggleCompleted={props.toggleCompleted}
        />
      ))}
    </List>
  );
};

export default TodoList;
