import React from 'react';
import ChapterTitle from '../../src/components/ChapterTitle';
import { shallow, mount, render } from 'enzyme';
import * as chai from 'chai';

let should = chai.should();

describe('CHAPTER__TITLE_COMPONENT', () => {
    describe('when_rendering_component_with_isExpanded_equals_false', () => {
        var props;
        var SUT;
        beforeEach(() => {
            props = { index: 1, title: 'Test Title', id: 1, isExpanded: false };
            SUT = shallow(<ChapterTitle {...props} />);
        });

        it('should render a DIV with an accord-title className', () => {
            SUT.find('div.accord-title').length.should.equal(1);
        });

        it('should render a DIV with an accord-toggle className', () => {
            SUT.find('div.accord-toggle').length.should.equal(1);
        });
        it('should render one anchor tag with an aria-expanded property with a value of false', () => {
            SUT.find('a').node.props['aria-expanded'].should.equal(false);
        });
    });

    describe('when_rendering_component_with_isExpanded_equals_true', () => {
        var props;
        var SUT;
        beforeEach(() => {
            props = { index: 1, title: 'Test Title', id: 1, isExpanded: true };
            SUT = shallow(<ChapterTitle {...props} />);
        });

        it('should render a DIV with an accord-title className', () => {
            SUT.find('div.accord-title').length.should.equal(1);
        });

        it('should render a DIV with an accord-toggle className', () => {
            SUT.find('div.accord-toggle').length.should.equal(1);
        });
        it('should render one anchor tag with an aria-expanded property with a value of true', () => {
            SUT.find('a').node.props['aria-expanded'].should.equal(true);
        });
    });
});
