import React from 'react'
import { shallow } from 'enzyme';
import { LoginForm } from '@/components/loginForm/LoginForm';

let props = {};

const setupProps = () => {
    props = {
        history: { push: jest.fn() },
    };
}

beforeEach(() => {
    setupProps();
});

describe('LoginForm', () => {

    it('renders properly', () => {
        const wrapper = shallow(<LoginForm {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    describe('`onSubmitHandler` method', () => {

        it('prevents event default and pushes route', () => {
            const wrapper = shallow(<LoginForm {...props} />);
            const mockEvent = { 
                preventDefault: jest.fn(),
            target: {
                children: [{value:'test'},{value : null}, {value : 'test'}, {value : null}]
                } };
            
            wrapper.instance().onSubmitHandler(mockEvent);

            expect(mockEvent.preventDefault).toHaveBeenCalled();
            expect(props.history.push).toHaveBeenCalledWith('/dashboard/pilot-list');
        });

    });

});
