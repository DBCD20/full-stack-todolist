import React  from 'react';

const Todo = ({ task, key, remove, i }) =>
<li
    key={i}
    id={i} 
    className="list-group-item d-flex justify-content-between p-3"
    style={{wordBreak: 'break-all', textOverflow: 'hidden'}}
>
    { task }
    <span
    className="text-danger"
    onClick={remove}
    style={{cursor: 'pointer'}}>
        <strong>x</strong>
    </span>
</li>;

export default Todo;