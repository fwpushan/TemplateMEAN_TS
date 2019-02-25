import React from 'react'
import { shallow } from 'enzyme';
import { ChangePass } from '@/components/changePassForm/ChangePass';

let props = {};

const setupProps = () => {
    props = {
        
    };
}

beforeEach(() => {
    setupProps();
});

describe('ChangePass', () => {

    it('renders properly', () => {
        const wrapper = shallow(<ChangePass {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    describe('`onSubmitHandler` method', () => {
        const formValues = [{value : "originalPass"}, {value: null}, {value : "Test!123"}, {value: null}, {value : "Test!123"}]
        

        it('prevents event default and PASSES form validation', () => {
            global.alert = jest.fn();
            const wrapper = shallow(<ChangePass {...props} />);
            const mockEvent = { 
                preventDefault: jest.fn(),
            target: {
                children: formValues
                } };

            wrapper.instance().onSubmitHandler(mockEvent);

            expect(mockEvent.preventDefault).toHaveBeenCalled();
            
            expect(alert).toHaveBeenCalledWith("Password has been successfully changed.")
        });
    });

    describe('`onSubmitHandler` method', () => {
        const formValues = [{value : "originalPass"}, {value: null}, {value : "Test!123"}, {value: null}, {value : "Test!987"}]
        
        it('prevents event default and FAILS validation due to non matching passwords', () => {
            global.alert = jest.fn();
            const wrapper = shallow(<ChangePass {...props} />);
            const mockEvent = { 
                preventDefault: jest.fn(),
            target: {
                children: formValues
                } };

            wrapper.instance().onSubmitHandler(mockEvent);

            expect(mockEvent.preventDefault).toHaveBeenCalled();
            
            expect(alert).toHaveBeenCalledWith("Passwords do not match, and must be 6 or more characters")
        });
    });


    describe('`onSubmitHandler` method', () => {
        const formValues = [{value : "originalPass"}, {value: null}, {value : "test!123"}, {value: null}, {value : "test!123"}]

        it('prevents event default and FAILS validation due to incorrect criteria (no uppercase)', () => {
            global.alert = jest.fn();
            const wrapper = shallow(<ChangePass {...props} />);
            const mockEvent = { 
                preventDefault: jest.fn(),
            target: {
                children: formValues
                } };

            wrapper.instance().onSubmitHandler(mockEvent);

            expect(mockEvent.preventDefault).toHaveBeenCalled();
            
            expect(alert).toHaveBeenCalledWith("Password does not contain atleast one of each of: Uppercase, Lowercase, Numeric, and Special characters")
        });
    });

    describe('`onSubmitHandler` method', () => {
        const formValues = [{value : "originalPass"}, {value: null}, {value : "Test!abc"}, {value: null}, {value : "Test!abc"}]
        
        it('prevents event default and FAILS validation due to incorrect criteria (no number)', () => {
            global.alert = jest.fn();
            const wrapper = shallow(<ChangePass {...props} />);
            const mockEvent = { 
                preventDefault: jest.fn(),
            target: {
                children: formValues
                } };

            wrapper.instance().onSubmitHandler(mockEvent);

            expect(mockEvent.preventDefault).toHaveBeenCalled();
            
            expect(alert).toHaveBeenCalledWith("Password does not contain atleast one of each of: Uppercase, Lowercase, Numeric, and Special characters")
        });
    });

    describe('`onSubmitHandler` method', () => {
        const formValues = [{value : "originalPass"}, {value: null}, {value : "TEST!123"}, {value: null}, {value : "TEST!123"}]

        it('prevents event default and FAILS validation due to incorrect criteria (no lowercase)', () => {
            global.alert = jest.fn();
            const wrapper = shallow(<ChangePass {...props} />);
            const mockEvent = { 
                preventDefault: jest.fn(),
            target: {
                children: formValues
                } };

            wrapper.instance().onSubmitHandler(mockEvent);

            expect(mockEvent.preventDefault).toHaveBeenCalled();
            
            expect(alert).toHaveBeenCalledWith("Password does not contain atleast one of each of: Uppercase, Lowercase, Numeric, and Special characters")
        });
    });

    describe('`onSubmitHandler` method', () => {
        const formValues = [{value : "originalPass"}, {value: null}, {value : "TestPass123"}, {value: null}, {value : "TestPass123"}]
        
        it('prevents event default and FAILS validation due to incorrect criteria (no special character)', () => {
            global.alert = jest.fn();
            const wrapper = shallow(<ChangePass {...props} />);
            const mockEvent = { 
                preventDefault: jest.fn(),
            target: {
                children: formValues
                } };

                
            wrapper.instance().onSubmitHandler(mockEvent);

            expect(mockEvent.preventDefault).toHaveBeenCalled();
            
            expect(alert).toHaveBeenCalledWith("Password does not contain atleast one of each of: Uppercase, Lowercase, Numeric, and Special characters")
        });
    });
    
});
