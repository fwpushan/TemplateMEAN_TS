import React from 'react'
import { shallow } from 'enzyme';
import PilotsList from '@/components/pilotsList/PilotsList';

let props = {};

const setupProps = () => {
    props = {
        
    };
}

beforeEach(() => {
    setupProps();
});

describe('PilotsList', () => {

    it('renders properly', () => {
        const wrapper = shallow(<PilotsList {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
