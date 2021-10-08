import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";

function Counter(props) {
    // const [count, setCount] = useState(0);

    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);

    const handleIncrementClick = () => {
        const action = increment();
        dispatch(action);
    };

    const handleDecrementClick = () => {
        const action = decrement();
        dispatch(action);
    };


    return (
        <div>
            {counter}
            <button onClick={handleIncrementClick}>Increment</button>
            <button onClick={handleDecrementClick}>Decrement</button>

        </div>
    )
}

export default Counter;