import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    increment,
    decrement,
    incrementByTen,
    decrementByTen,
    reset
} from '../slice/Actions';

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.value);

    return (
        <div>
            <h1>Счетчик: {count}</h1>
            <div>
                <button onClick={() => dispatch(increment())}>+1</button>
                <button onClick={() => dispatch(decrement())}>-1</button>
                <button onClick={() => dispatch(incrementByTen())}>+10</button>
                <button onClick={() => dispatch(decrementByTen())}>-10</button>
                <button onClick={() => dispatch(reset())}>Сброс</button>
            </div>
        </div>
    );
};

export default Counter;
