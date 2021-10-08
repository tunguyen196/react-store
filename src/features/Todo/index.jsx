import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm"

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Default',
            img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fifrs.vn%2Fstandard%2Fias-26%2F&psig=AOvVaw094rUbTPeuk1y0vtC_RWii&ust=1633618110528000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCJyOuDtvMCFQAAAAAdAAAAABAD',
            active: true,
        },
        {
            id: 2,
            title: 'Sleep',
            img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fifrs.vn%2Fstandard%2Fias-26%2F&psig=AOvVaw094rUbTPeuk1y0vtC_RWii&ust=1633618110528000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCJyOuDtvMCFQAAAAAdAAAAABAD',
            active: false,
        }
    ];

    const [todoList, setTodoList] = useState(initTodoList);

    const handleTodoClick = (todo, index) => {
        const newTodoList = [...todoList];
        newTodoList[index] = {
            ...newTodoList[index],
            active: newTodoList[index].active === true ? false : true
        };
        setTodoList(newTodoList);
    }

    const handleTodoFormSubmit = (values) => {
        console.log(values);
    }

    return (
        <>
            <TodoList todoList={todoList} onTodoClick={handleTodoClick} />
            <h3>Todoform</h3>
            <TodoForm onSubmit={handleTodoFormSubmit} />
        </>
    )
}

export default TodoFeature;