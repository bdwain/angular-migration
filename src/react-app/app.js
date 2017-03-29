import React from 'react';
import {Router, browserHistory} from 'react-router';
import Routes from './routes.js';

function setLocation(url){
  browserHistory.push('/' + url)
}

function App(){
  return (
    <div>
      <div>
        <a href="#" onClick={() => setLocation('page1')}>Page 1</a>
        <a href="#" onClick={() => setLocation('page2')}>Page 2</a>
      </div>
      <Router history={ browserHistory }>
        { Routes }
      </Router>
    </div>
  );
}

export default App;


