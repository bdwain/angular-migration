import React from 'react';

function SubComponent({content}){
  return <div>{content}</div>;
}

SubComponent.proptypes = {
  content: React.PropTypes.string.isRequired
};

export default SubComponent;