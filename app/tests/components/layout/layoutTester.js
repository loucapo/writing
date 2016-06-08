/**
 * Created by rharik on 5/20/16.
 */

import React from 'react'
import Layout from '../../../src/components/layout/layout'
import { shallow, mount, render } from 'enzyme';
import * as chai from 'chai';

let should = chai.should();

describe('LAYOUT_COMPONENT', () => {
    describe('when_rendering_component', () => {
        var SUT;
        beforeEach(()=>{
            SUT = shallow(<Layout/>);
        });

        it('should contain div', () => {
            var result = SUT.find('div');
            result.should.have.length.of(1);
        });
    })
});


