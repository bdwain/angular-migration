import {createStore, compose} from 'redux';
import reducer from './root-reducer.js';

/* istanbul ignore next */
export default function configureStore(){

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const storeEnhancer = composeEnhancers(); //add more enhancers, like applyMiddleware, here

  const store = createStore(reducer, undefined, storeEnhancer);

  return store;
}
