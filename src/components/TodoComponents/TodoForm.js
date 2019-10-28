import React from 'react';
import styled from 'styled-components'

const Holder = styled.h1`
display: flex;
justify-content: space-between;
`
const Button = styled.button`
	font-family: "Lato", sans-serif;
	font-size: 1rem;
	font-weight: 800;
	background-color: #3a405a;
	color: #de6e4b;
	padding: 10px 20px;
	text-align: center;
	text-decoration: none;
	margin: 10px;
	border-radius: 6px;
	:hover {
		background-color: #de6e4b;
		color: #3a405a;
	}
`;

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
        <label htmlFor="item">New Item  </label>
        <input
          type="text"
          task="item"
          id="item"
          value={this.state.newItem}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
      <Holder>
      <Button onClick={this.props.clearCompleted}> Clear Completed </Button>
      <Button onClick={this.props.clearAll}> Clear All </Button>
      </Holder>
</div>
    );
  }
}

export default TodoForm;
