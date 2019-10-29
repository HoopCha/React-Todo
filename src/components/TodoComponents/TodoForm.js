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

  constructor() {
    super();
    this.state = {
      newItem: '',
      newDescription: ''
    };
  }

  handleChanges = e => {
    console.log(this.state)
    const name = e.target.name;
    const value = e.target.value;
    
    this.setState({
      ...this.state,
      [name]: value
    });
  };


  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.newItem, this.state.newDescription);
    this.setState({ newItem: '', newDescription: '' });
  };

  render() {
    return (
        <div>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="item">New Todo  </label>
        <input
          type="text"
          name="newItem"
          placeholder="Todo Title" 
          value={this.state.newItem}
          onChange={this.handleChanges}
        />
        <input
          type="text"
          name="newDescription"
          placeholder="Todo Description" 
          value={this.state.newDescription}
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
