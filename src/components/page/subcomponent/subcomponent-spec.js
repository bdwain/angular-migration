import React from 'react';
import { shallow } from 'enzyme';
import SubComponent from './subcomponent.js';

describe('SubComponent', function(){
  it('returns the content', function(){
    expect(shallow(<SubComponent content="my content" />).get(0)).toEqualJSX(<div>my content</div>);
  });
});