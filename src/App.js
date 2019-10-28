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
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Build a Snowman',
    id: 2,
    completed: false
  },
  {
    task: 'Fill car with gas',
    id: 3,
    completed: false
  }
];



class App extends Component {
  // Constructor with state
  // 1. initialize state
  // 2. If you don't use arrow functions, bind the `this` keyword to class methods
  constructor() {
    super();
    this.state = {
      toDos: data
    };
  }

  addItem = name => {
    // update grocery state with a new item
    const newTask = {
      task: name,
      id: Date.now(),
      completed: false
    };
    this.setState({
      toDos: [...this.state.toDos, newTask]
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