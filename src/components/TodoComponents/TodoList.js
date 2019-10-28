import React from 'react';
import Todo from './Todo';

const TodoList = props => {

    const list = props.listProps;

    return (
        <div>
            <ol>
                {list.data.map(item =>(
                        <Todo itemProp = {item.task}/>
                ))}
             </ol>
        </div>
    );
    }

export default TodoList;