import React, {PropTypes, Component} from 'react';
import ThesisButton from './Buttons/Thesis';
import ReasonSupportButton from './Buttons/ReasonSupport';
import InterpretationButton from './Buttons/Interpretation';
import ParagraphDevButton from './Buttons/ParagraphDev';
import ResearchButton from './Buttons/Research';
import CounterArgsButton from './Buttons/CounterArgs';
import OtherButton from './Buttons/Other';
import GoodJobButton from './Buttons/GoodJob';
import FeedbackLibButton from './Buttons/FeedbackLib';
import sideMenu from './sideMenu.css';
import uuid from 'uuid';

class SideMenu extends Component {
  state = {showQuickFeedbackTool: false};

  spanClicked = (contentType) => {
    this.props.submitFeedbackToolContentItem({
      id: uuid.v4(),
      position: this.props.position,
      submissionId: this.props.submissionId,
      contentType
    });

    this.props.completeHighlight({
      success: true,
      changeColor: 'green'
    });
  };

  toggleQuickFeedback = () => {
    this.setState({showQuickFeedbackTool: !this.state.showQuickFeedbackTool});
  };

  render() {
    return (
      <div className={sideMenu.sidebarContainer}>
        <div data-id="sideMenu" className={sideMenu.sideMenu}>
          <ul className={sideMenu.buttons}>
            <ThesisButton />
            <ReasonSupportButton {...this.props} />
            <InterpretationButton />
            <ParagraphDevButton />
            <ResearchButton />
            <CounterArgsButton />
            <OtherButton {...this.props} />
            <GoodJobButton />
            <FeedbackLibButton toggleQuickFeedback={this.toggleQuickFeedback} />

            <div
              className={this.state.showQuickFeedbackTool ? sideMenu.quickFeedback : sideMenu.quickFeedback + ' ' + sideMenu.hiddenItem}>
              <li
                data-id="appropriate-language"
                className={sideMenu.list_Item}
                onClick={() => this.spanClicked(4)}>Appropriate Language
              </li>
              <li
                data-id="comma-splice"
                className={sideMenu.list_Item}
                onClick={() => this.spanClicked(2)}>Comma Splice
              </li>
              <li
                data-id="comma-error"
                className={sideMenu.list_Item}
                onClick={() => this.spanClicked(3)}>Comma Error
              </li>
              <li
                data-id="fragment"
                className={sideMenu.list_Item}
                onClick={() => this.spanClicked('fragment')}>Fragment
              </li>
              <li
                data-id="pronoun-agreement"
                className={sideMenu.list_Item}
                onClick={() => this.spanClicked(5)}>Pronoun Agreement
              </li>
              <li
                data-id="subject-verb-agreement"
                className={sideMenu.list_Item}
                onClick={() => this.spanClicked(6)}>Subject Verb Agreement
              </li>
              <li
                data-id="needs-analysis"
                className={sideMenu.list_Item}
                onClick={() => this.spanClicked(7)}>Needs Analysis
              </li>
              <li
                data-id="usage"
                className={sideMenu.list_Item}
                onClick={() => this.spanClicked(8)}>Usage
              </li>
            </div>
          </ul>
        </div>
      </div>);
  }
}

SideMenu.propTypes = {
  submitFeedbackToolContentItem: PropTypes.func,
  completeHighlight: PropTypes.func,
  focus: PropTypes.func,
  position: PropTypes.object,
  submissionId: PropTypes.string
};

export default SideMenu;
