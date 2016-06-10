import React from 'react';
import Chapter from '../../src/components/Chapter';
import Chapters from '../../src/components/Chapters';
import { shallow, mount, render } from 'enzyme';
import * as chai from 'chai';

let should = chai.should();

describe('CHAPTERS_COMPONENT', () => {
    describe('when_rendering_component', () => {
        var props;
        var SUT;
        beforeEach(() => {
            props = {
                chapters: [
                    {
                        isExpanded: false,
                        id: 1,
                        title: 'Experiment 1 - Density',
                        summary: 'First, read the information and procedure in your lab manual. Then complete the lab simulation. Finally, complete the pre-lab assignment below.',
                        caption: 'Chapter 1 Content',
                        tableSummary: 'A list of content and assignments for Chapter 1',
                        assignments: [1]
                    },
                    {
                        isExpanded: false,
                        id: 2,
                        title: 'Experiment 2 - Density',
                        summary: 'First, read the information and procedure in your lab manual. Then complete the lab simulation. Finally, complete the pre-lab assignment below.',
                        caption: 'Chapter 2 Content',
                        tableSummary: 'A list of content and assignments for Chapter 2',
                        assignments: [2]
                    }
                ]
            };
            SUT = shallow(<Chapters {...props} />);
        });

        it('should render a DIV with an id of chapters', () => {
            const div = SUT.find('div.chapters');
            div.root.nodes.length.should.equal(1);
        });

        it('should render 2 Chapter components', () => {
            SUT.find(Chapter).length.should.equal(2);
        });
    });
});
