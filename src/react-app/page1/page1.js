import React from 'react';
import Counter from './counter/counter.js';
import {connect} from 'react-redux';
import {increment, decrement} from '../reducer.js';

function Page1(props){
  return (
    <div>
      <h1>Page 1</h1>
      <Counter {...props} />
    </div>
  );
}

function mapStateToProps(state){
  return {
    count: state
  };
}

function mapDispatchToProps(dispatch){
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page1);