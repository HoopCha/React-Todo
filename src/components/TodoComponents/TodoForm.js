import React from 'react';

const TodoForm = (props) => {
return (
    <div>
        <input type="text" placeholder="Add item here"/>
        <button onClick={() => props.addItem({task: `${document.querySelector('input').value}`})}>Add Item</button>
        <button onClick={()=> props.clearItems()}>Clear List Items</button>
    </div>
);
}
export default TodoForm;