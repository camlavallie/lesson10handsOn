import React from 'react';

const Counter = ({ count, count2, count3, onDecrement, onIncrement, onCounter }) => {

    return (
      <div>
        <div>
          <button onClick={onDecrement}>-</button>
          <span>{count}</span>
          <button onClick={onIncrement}>+</button>
          <br />
          <h1>Times the increment/Decrement buttons have been clicked:<span>{count2}</span></h1>
          <input type="number"/>
          <button onClick={onCounter}>Change Count Number</button>
        </div>
      </div>
    );
}


export default Counter;