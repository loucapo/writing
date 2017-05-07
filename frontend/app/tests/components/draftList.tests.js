import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import CUT from '../../src/components/Activity/DraftList/DraftList';
var expect = chai.expect;
chai.should();

describe('<DraftList />', () => {
  var drafts;
  beforeEach(()=> {
    drafts = [
      {
        details: {
          gradingPolicy: 'passOrDie',
          learningObjectives: ['hi mom'],
          studentReflectionQuestions: ['by mom']
        }
      },
      {
        details: {
          gradingPolicy: 'passOrDie',
          learningObjectives: ['hi dad'],
          studentReflectionQuestions: ['by dad']
        }
      }
    ]
  });
  context('when calling draftList', ()=> {
    xit('should render button with proper content', () => {
      const wrapper = shallow(<CUT drafts={drafts}/>);
      wrapper.find('ActionButton').prop('content').should.equal('+ Add Another Draft')
    });
  });

  context('when calling draftList with more than one draft', ()=> {
    xit('should render first task with proper name', () => {
      const wrapper = shallow(<CUT drafts={drafts}/>);
      wrapper.find('DraftItem').first().prop('draftName').should.equal('Draft 1')
    });
  });

  context('when calling draftList with one or more drafts', ()=> {
    xit('should render last task with proper name', () => {
      const wrapper = shallow(<CUT drafts={drafts}/>);
      wrapper.find('DraftItem').last().prop('draftName').should.equal('Final Draft')
    });
  });

});
