import React from "react";
import PropTypes from "prop-types";
import './style.scss';
import classnames from "classnames";

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func
};

TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null
}

function TodoList({ todoList, onTodoClick }) {
    const handleTodoClick = (todo, index) => {
        if(!onTodoClick) return;

        onTodoClick(todo, index);
    }

    return (
        <ul>
            {todoList.map((todo, index) => (
                <li
                    className={classnames({
                        active: todo.active == true
                    })}
                    key={todo.id}
                    onClick={() => handleTodoClick(todo, index)}
                >{todo.title}</li>
            ))}
        </ul>
    )
}

export default TodoList;