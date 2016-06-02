import React from 'react';
import ChapterTitle from '../../src/components/ChapterTitle';
import {shallow, mount, render} from 'enzyme';
import * as chai from 'chai';

let should = chai.should();

describe('CHAPTER__TITLE_COMPONENT', () => {
    describe('when_rendering_component_with_isExpanded_equals_false', () => {
        var props;
        var SUT;
        beforeEach(() => {
            props = {index: 1, title: 'Test Title', id: 1, isExpanded: false};
            SUT = shallow(<ChapterTitle {...props} />);
        });

        it('should render a DIV with a accord-title className', () => {
const divs = SUT.find('div');
console.log('***' + JSON.stringify(divs, null, 4) + '***');
            SUT.find('div').length.should.equal(1);
        });

        it('should not render a DIV with a progress className', () => {
            SUT.find('div').length.should.equal(0);
        });

        it('should not render a DIV with a accord-toggle className', () => {
            SUT.find('div').length.should.equal(0);
        });

        it('should not render a DIV with a text className', () => {
            SUT.find('div').length.should.equal(0);
        });
    });

    describe('when_rendering_component_with_isExpanded_equals_true', () => {
        var props;
        var SUT;
        beforeEach(() => {
            props = {index: 1, title: 'Test Title', id: 1, isExpanded: true};
            SUT = shallow(<ChapterTitle {...props} />);
        });

        it('should render a DIV with a accord-title className', () => {
            SUT.find('div').length.should.equal(0);
        });

        it('should render a DIV with a progress className', () => {
            SUT.find('div').length.should.equal(1);
        });

        it('should render a DIV with a accord-toggle className', () => {
            SUT.find('div').length.should.equal(1);
        });

        it('should render a DIV with a text className', () => {
            SUT.find('div').length.should.equal(1);
        });
    });
});
