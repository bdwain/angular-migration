import {combineReducers} from 'redux';

const reducer = combineReducers({
  foo: function(state = null, action){
    return state;
  }
});

export default reducer;
