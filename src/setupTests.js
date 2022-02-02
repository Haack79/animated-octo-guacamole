// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// learn more: https://github.com/testing-library/jest-dom
// expect(element).toHaveTextContent(/react/i)
import '@testing-library/jest-dom';
// setting up enzyme 
import Enzyme from 'enzyme';

import Adapter from 'enzyme-adapter-react-17-updated';

Enzyme.configure({ adapter: new Adapter() });
