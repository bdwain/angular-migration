import React from 'react';

function SubComponent({content}){
  return <div>{content}</div>;
}

SubComponent.propTypes = {
  content: React.PropTypes.string.isRequired
};

export default SubComponent;