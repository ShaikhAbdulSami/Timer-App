import React from 'react'
import {mount} from 'enzyme'
import App from './App'
import Timer from '../Timer/Timer';



describe('Render App Component' , ()=>{
   const container = mount(<App/>);

   it('Should Render a Div' , ()=>{
   
    expect(container.find('div').length).toBeGreaterThanOrEqual(1);
  })

  it('Should Render the Timer Component', ()=>{

     expect(container.containsMatchingElement(<Timer/>)).toEqual(true);
  })


   // Testing Play , Resume , Stop Functionalities  
   
  it('Should Start timer ' ,()=> {
    container.find(".stopwatch-btn-green").simulate('click');
    expect(container.find('.stopwatch span:last-child').text()).toBe("1");
  })

  it('Should Pause the timer ' ,()=> {
    container.find(".stopwatch-btn-red").simulate('click');
    expect(container.find('.stopwatch span:last-child').text()).toBe("1");
  })

  it('Should Resume the timer ' ,()=> {
    container.find(".stopwatch-btn-green").simulate('click');
    expect(container.find('.stopwatch span:last-child').text()).toBe("2");
  })

  it('Should Reset timer ' ,()=> {
    container.find(".stopwatch-btn-grey").simulate('click');
    expect(container.find('.stopwatch span:last-child').text()).toBe("00");
  })

})