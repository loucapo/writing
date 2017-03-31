import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import CUT from '../../src/components/Activity/ActivityPrompt/ActivityPrompt';
import { ContentState } from 'draft-js';
var expect = chai.expect;
chai.should();

describe('<ActivityPrompt />', () => {
  let activityPrompt;
  let emptyPrompt;
  let content;

  beforeEach(()=> {
    content = JSON.stringify(ContentState.createFromText('This is an activity prompt description.'));
    activityPrompt = shallow(<CUT prompt={content}/>);
    emptyPrompt = shallow(<CUT prompt={null}/>);
  });

  context('when calling activityPrompt with no content', () => {
    xit('should render link to add activity prompt', () => {
      let description = emptyPrompt.find('[data-id="prompt-description"]').text();
      description.should.equal('Click to add prompt');
    });
  });

  context('when calling activityPrompt with content', () => {
    xit('should render activityPrompt MLEditor', () => {
      expect(activityPrompt.find('MLEditor')).to.have.length(1);
    });
  });

  context('when clicking edit button on activityPrompt header', () => {
    xit('should open the rich text editor', () => {
      activityPrompt.find('[data-id="prompt-edit"]').simulate('click');
      expect(activityPrompt.find('MLEditor')).to.have.length(1);
      expect(activityPrompt.state('editable')).to.be.true;
    });
  });

  context('when clicking trash button on activity prompt header', () => {
    //...
  });

  context('when clicking "Click to add prompt" link in an activityPrompt with no content', () => {
    xit('should open the rich text editor', () => {
      emptyPrompt.find('[data-id="add-prompt"]').simulate('click');
      expect(emptyPrompt.find('MLEditor')).to.have.length(1);
      expect(emptyPrompt.state('editable')).to.be.true;
    });
  });
});
