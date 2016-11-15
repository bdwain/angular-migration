import React from 'react';
import { shallow } from 'enzyme';
import Page from './page.js';
import SubComponent from './subcomponent/subcomponent.js';

describe('Page', function(){
  it('returns a div and a subcomponent', function(){
    expect(shallow(<Page />).get(0)).toEqualJSX(
      <div>
        <div className="pagediv">Page</div>
        <SubComponent content="hello" />
      </div>
    );
  });
});