import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CounterButton from './CounterButton';


/* it('expect to render Card component ', () => {
    expect(shallow(<Card/>).length).toEqual(1);
    }); */

 it('expect to render CounterButton component ', () => {
    const mockColor ='red';
    expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
    }) 

it('Correctly increments the counter ', () => {
    const mockColor ='red';
    const wrapper   = shallow(<CounterButton color={mockColor} />);   
    wrapper.find(`#counter`).simulate('click');
    wrapper.find(`#counter`).simulate('click');
    wrapper.find(`#counter`).simulate('click');
    expect(wrapper.state()).toEqual({ count: 4});
    /* wrapper.find(`#counter`).simulate('keypress');
    expect(wrapper.state()).toEqual({ count: 2}); */
    
})