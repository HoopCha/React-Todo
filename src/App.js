import React, { Component } from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import './components/TodoComponents/Todo.css';
import styled from 'styled-components'

const Title = styled.h1`
color: #111; 
font-family: 'Helvetica Neue', sans-serif; 
font-size: 3rem; 
font-weight: bold; 
letter-spacing: -1px; 
line-height: 2; 
text-align: center;
background: #E7B91B;
`
const Holder = styled.h1`
display: flex;
flex-direction: column;
align-items: center;
width:100%;
`


const data = [
  {
    taskTitle: 'Organize Garage',
    taskDescription: "test",
    id: 1528817077286,
    completed: false
  },
  {
    taskTitle: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    taskTitle: 'Build a Snowman',
    id: 2,
    completed: false
  },
  {
    taskTitle: 'Fill car with gas',
    id: 3,
    completed: false
  }
];



class App extends Component {
  constructor() {
    super();
    this.state = {
      toDos: data
    };
  }

  addItem = (name, description) => {
    // update grocery state with a new item
    const newTask = {
      taskTitle: name,
      taskDescription: description,
      id: Date.now(),
      completed: false
    };
    this.setState({
      toDos: [newTask, ...this.state.toDos]
    });
    
  };

  toggleCompleted = id => {
    this.setState({
      toDos: this.state.toDos.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  clearCompleted = () => {
    this.setState({
      toDos: this.state.toDos.filter(item => !item.completed)
    });
  };

  clearAll = () => {
    this.setState({
      toDos: []
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <Title>Todo List</Title>
        </div>
        <Holder>
        <TodoList
          toggleCompleted={this.toggleCompleted}
          toDos={this.state.toDos}
        />
        <TodoForm 
        addItem={this.addItem}
        clearCompleted ={this.clearCompleted}
        clearAll= {this.clearAll} />
        </Holder>
      </div>
    );
  }
}

export default App;