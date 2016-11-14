import React from 'react';
import SubComponent from './subcomponent/subcomponent.js';

import './page.scss';

function Page(){
  return (
    <div>
      <div className="pagediv">Page</div>
      <SubComponent content="hello" />
    </div>
  );
}

export default Page;