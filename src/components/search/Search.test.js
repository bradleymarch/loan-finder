import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
configure({ adapter: new Adapter() });

import Search from './Search';

describe('<Search />', () => {
  it('should render correctly with no props', () => {
    const component = shallow(<Search />);

    expect(component).toMatchSnapshot();
  });
});
