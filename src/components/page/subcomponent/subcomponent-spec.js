import React from 'react';
import { shallow } from 'enzyme';
import SubComponent from './subcomponent.js';
import logo from './logo.svg';

describe('SubComponent', function(){
  it('returns the content', function(){
    let content = 'my content';
    let expected =
      <div>
        <div>{content}</div>
        <div>
          <img src={logo} style={{width: '100px', height: '100px'}} />
        </div>
        <div className="merlin" style={{width: '300px', height: '300px'}} />
      </div>;
    expect(shallow(<SubComponent content={content} />).get(0)).toEqualJSX(expected);
  });
});