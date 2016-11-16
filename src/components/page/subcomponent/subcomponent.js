import React from 'react';
import logo from './logo.svg'; //could also import absolute path, with src as root, i.e 'img/logo.svg'

import './subcomponent.scss';

function SubComponent({content}){
  return (
    <div>
      <div>{content}</div>
      <div>
        <img src={logo} style={{width: '100px', height: '100px'}} />
      </div>
      <div className="merlin" style={{width: '300px', height: '300px'}} />
    </div>
  );
}

SubComponent.propTypes = {
  content: React.PropTypes.string.isRequired
};

export default SubComponent;