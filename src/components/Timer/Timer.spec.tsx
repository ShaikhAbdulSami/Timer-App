import React from 'react'
import {shallow} from 'enzyme'
import Timer from './Timer';


describe('TimerComponent', () => {
    const time = { ms: 0, s: 0, m: 0, h: 0 } ;
   let container = shallow(<Timer time={time} />);

    it('Should Render 4 span Tags' ,()=>{
        expect(container.find('span').length).toEqual(4);

    })
})  