import React from 'react';
import Section from '../../src/components/Section';
import Sections from '../../src/components/Sections';
import { shallow, mount, render } from 'enzyme';
import * as chai from 'chai';

let should = chai.should();

describe('CHAPTERS_COMPONENT', () => {
    describe('when_rendering_component', () => {
        var props;
        var SUT;
        beforeEach(() => {
            props = {
                sections: [
                    {
                        isExpanded: false,
                        id: 1,
                        title: 'Experiment 1 - Density',
                        summary: 'First, read the information and procedure in your lab manual. Then complete the lab simulation. Finally, complete the pre-lab assignment below.',
                        caption: 'Section 1 Content',
                        tableSummary: 'A list of content and assignments for Section 1',
                        assignments: [1]
                    },
                    {
                        isExpanded: false,
                        id: 2,
                        title: 'Experiment 2 - Density',
                        summary: 'First, read the information and procedure in your lab manual. Then complete the lab simulation. Finally, complete the pre-lab assignment below.',
                        caption: 'Section 2 Content',
                        tableSummary: 'A list of content and assignments for Section 2',
                        assignments: [2]
                    }
                ]
            };
            SUT = shallow(<Sections {...props} />);
        });

        it('should render a DIV with an id of sections', () => {
            const div = SUT.find('div.sections');
            div.root.nodes.length.should.equal(1);
        });

        it('should render 2 Section components', () => {
            SUT.find(Section).length.should.equal(2);
        });
    });
});
