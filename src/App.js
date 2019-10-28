import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      data: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed:false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    };
  }

  addItem = (item) => {
    let newState = {};
    const newItem = {...item, id:Date.now()};
    newState = {data: [...this.state.data, newItem]};
    this.setState(newState);
  };

  clearItems = () => {
    this.setState({
      data: []
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          listProps={this.state}
        />
        <TodoForm 
          addItem = {this.addItem}
          clearItems = {this.clearItems}
        />
      </div>
    );
  }
}

export default App;
