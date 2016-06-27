import React from 'react';
import Section from '../../src/components/Section';
import SectionTitle from '../../src/components/SectionTitle';
import AssignmentsContainer from '../../src/containers/AssignmentsContainer';
import { shallow, mount, render } from 'enzyme';
import * as chai from 'chai';

let should = chai.should();

describe('CHAPTER_COMPONENT', () => {
    describe('when_rendering_component_with_isExpanded_equals_false', () => {
        var props;
        var SUT;
        beforeEach(() => {
            props = { index: 1, title: 'Test Title', summary: 'Great damn section!', id: 1, isExpanded: false };
            SUT = shallow(<Section {...props} />);
        });

        it('should render SectionTitle component', () => {
            SUT.find(SectionTitle).length.should.equal(1);
        });

        it('should not render AssignmentsContainer component', () => {
            SUT.find(AssignmentsContainer).length.should.equal(0);
        });
    });

    describe('when_rendering_component_with_isExpanded_equals_true', () => {
        var props;
        var SUT;
        beforeEach(() => {
            props = { index: 1, title: 'Test Title', summary: 'Great damn section!', id: 1, isExpanded: true };
            SUT = shallow(<Section {...props} />);
        });

        it('should render SectionTitle component', () => {
            SUT.find(SectionTitle).length.should.equal(1);
        });

        it('should render AssignmentsContainer component', () => {
            SUT.find(AssignmentsContainer).length.should.equal(1);
        });
    });
});
