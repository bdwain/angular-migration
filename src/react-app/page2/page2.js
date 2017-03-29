import React from 'react';
import Pizza from './pizza/pizza.js';
import {connect} from 'react-redux';

function Page2({count}){
  return (
    <Pizza count={count} />
  );
}

function mapStateToProps(state){
  return {
    count: state
  };
}

export default connect(mapStateToProps)(Page2);