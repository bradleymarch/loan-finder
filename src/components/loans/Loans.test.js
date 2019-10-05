import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
configure({ adapter: new Adapter() });

import Loans from './Loans';

describe('<Loans />', () => {
  it('should render correctly with no props', () => {
    const component = shallow(<Loans />);

    expect(component).toMatchSnapshot();
  });
});
