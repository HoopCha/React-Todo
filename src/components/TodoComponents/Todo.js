import React from 'react';
import styled from 'styled-components'

const Task =styled.p`
color: #f8f8f8; 
font-family: 'Raleway',sans-serif; 
font-size: 2.5rem; 
font-weight: 500; 
line-height: 32px; 
margin: 0 0 24px;
width: 100%;
height: 100px;
text-align: center;
padding-top: 35px;

`

const Test =styled.div`
width:25%;
margin: 25px;
background: #126BBF;
`

const Todo = props => {
  return (
    <Test
      className={`item${props.task.completed ? ' completed' : ''}`}
      onClick={() => props.toggleCompleted(props.task.id)}
    >
      <Task>{props.task.taskTitle}</Task>
      <p>{props.task.taskDescription}</p>
    </Test>
  );
};

export default Todo;
