import React from 'react'
import { shallow } from 'enzyme';
import { NavBar } from '@/components/navBar/NavBar';

let props = {};

const setupProps = () => {
    props = {
        
    };
}

beforeEach(() => {
    setupProps();
});

describe('NavBar', () => {

    it('renders properly', () => {
        const wrapper = shallow(<NavBar {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    describe('showMenuHandler', () => {
        it("prevents event default, and changes state of showMenu to it's inverse value", () =>{
            const wrapper = shallow(<NavBar {...props} />);
            const mockEvent = { preventDefault: jest.fn() };

            expect(wrapper.state('showMenu')).toEqual(false);
            wrapper.instance().showMenuHandler(mockEvent);

            expect(mockEvent.preventDefault).toHaveBeenCalled();
            expect(wrapper.state('showMenu')).toEqual(true);






        });
      
    })
    
});
