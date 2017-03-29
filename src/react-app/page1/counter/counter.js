import React from 'react';

function Counter({count, increment, decrement}){
  return (
    <div>
      <button onClick={decrement}>decrement</button>
      <span>{count}</span>
      <button onClick={increment}>increment</button>
    </div>
  );
}

Counter.propTypes = {
  count: React.PropTypes.number.isRequired,
  increment: React.PropTypes.func.isRequired,
  decrement: React.PropTypes.func.isRequired
};

export default Counter;