import { shallow, mount, render } from 'enzyme'; 
import {DisplayCard} from './DisplayCard';
import React from 'react';

it('to render displayCard component', () => {
    expect(shallow(<DisplayCard />).length).toEqual(1); 
});

