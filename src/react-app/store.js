import {createStore} from 'redux';
import reducer from './reducer.js';

function configureStore(){
  const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  return store;
}

export const store = configureStore();