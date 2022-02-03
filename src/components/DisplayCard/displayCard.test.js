import { shallow } from 'enzyme'; 
import {DisplayCard} from './DisplayCard';
import React from 'react';
import {render, screen} from '@testing-library/react';
describe('DisplayCard', () => {
    test('renders DisplayCard', () => {
        render(<DisplayCard />);
        screen.debug();
    });
});
it('to render displayCard component', () => {
    expect(shallow(<DisplayCard />).length).toEqual(1); 
});

it('expect to render a snapshot of component', () => {
    expect(shallow(<DisplayCard />)).toMatchSnapshot();
})
