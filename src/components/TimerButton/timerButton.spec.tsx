import React from 'react'   
import {shallow} from 'enzyme'
import TimerButton from './TimerButton'

describe('Button Components' , () => {
    let buttonComponent:any;

    beforeEach( ()=> {
        buttonComponent = shallow(<TimerButton/>);
    })

    it('Should render 3 buttons ' ,()=> {
        expect(buttonComponent.find('button').length).toEqual(3);
    })

   
    
})