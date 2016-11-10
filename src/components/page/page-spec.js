import React from 'react';
import { shallow } from 'enzyme';
import Page from './page.js';

import 'jasmine-expect-jsx/index.js';

describe('Page', function(){
  it('returns a div', function(){
    expect(shallow(<Page />).get(0)).toEqualJSX(<div>Page</div>);
  });
});