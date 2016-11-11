import React from 'react';
import SubComponent from './subcomponent/subcomponent.js';

function Page(){
  return (
    <div>
      <div>Page</div>
      <SubComponent content="hello" />
    </div>
  );
}

export default Page;