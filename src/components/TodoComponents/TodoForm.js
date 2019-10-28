import React from 'react';

class TodoForm extends React.Component {
  // Constructor with state
  // add a state property called "newItem"
  // set the value of "this.state.newItem" to an empty string
  constructor(props) {
    super();
    // const [newItem, setNewItem] = useState('');
    this.state = {
      newItem: ''
    };

    // // explicit binding
    // this.handleChanges = this.handleChanges.bind(this);
  }

  handleChanges = e => {
    // update state with each keystroke
    // setNewItem(e.target.value)
    this.setState({
      newItem: e.target.value
    });
  };

  // class method to submit form
  handleSubmit = e => {
    e.preventDefault();
    // add our typed in item to the grocery list!
    this.props.addItem(this.state.newItem);
    this.setState({ newItem: '' });
  };

  render() {
    return (
        <div>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="item">New Item</label>
        <input
          type="text"
          task="item"
          id="item"
          value={this.state.newItem}
          onChange={this.handleChanges}
        />
        <button>Add</button>
        <button onClick={this.props.clearCompleted}> Clear Completed </button>
        <button onClick={this.props.clearAll}> Clear All </button>
      </form>

</div>
    );
  }
}

export default TodoForm;
