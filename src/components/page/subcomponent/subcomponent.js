import React from 'react';
import logo from './logo.svg'; //import component files relatively
import merlin from 'img/merlin.jpg'; //import global images aboslutely

function SubComponent({content}){
  return (
    <div>
      <div>{content}</div>
      <div>
        <img src={logo} style={{width: '100px', height: '100px'}} />
      </div>
      <div>
        <img src={merlin} />
      </div>
    </div>
  );
}

SubComponent.propTypes = {
  content: React.PropTypes.string.isRequired
};

export default SubComponent;