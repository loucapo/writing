import React, {PropTypes, Component} from 'react';
// import OtherSVG from './Buttons/OtherSVG';
// import GoodJobSVG from './Buttons/GoodJobSVG';
import MLIcon from 'ml-react-cdl-icons';
import ModalFeedbackButton from './Buttons/ModalFeedbackButton';
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
    const icon = (<MLIcon
      iconTitle="Feedback"
      iconFill="#00758E"
      iconType="comment"
      iconWidth="24"
      iconHeight="24"
      viewBox="0 0 24 24"
      className="icon" />);
    const goodJobIcon = (<MLIcon
      iconTitle="Good Job"
      iconFill="#3B822E"
      iconType="comment_thumbs_up"
      iconWidth="24"
      iconHeight="24"
      viewBox="0 0 24 24"
      className="icon" />);
    const quickFeedbackIcon = (<MLIcon
      iconTitle="Quick Feedback"
      iconFill="#DD5714"
      iconType="comment_text"
      iconWidth="24"
      iconHeight="24"
      viewBox="0 0 24 24"
      className="icon" />);

    return (
      <div className={sideMenu.sidebarContainer}>
        <div data-id="sideMenu" className={sideMenu.sideMenu}>
          <h1>
            Feedback
          </h1>
          <ul>
            <ModalFeedbackButton
              contentType="thesis"
              commentIcon={icon}
              {...this.props}
            />
            <ModalFeedbackButton
              contentType="reasonSupport"
              commentIcon={icon}
              {...this.props}
            />
            <ModalFeedbackButton
              contentType="interpretation"
              commentIcon={icon}
              {...this.props}
            />
            <ModalFeedbackButton
              contentType="paragraphDev"
              commentIcon={icon}
              {...this.props}
            />
            <ModalFeedbackButton
              contentType="research"
              commentIcon={icon}
              {...this.props}
            />
            <ModalFeedbackButton
              contentType="counterarg"
              commentIcon={icon}
              {...this.props}
            />
            <ModalFeedbackButton
              contentType="other"
              commentIcon={icon}
              {...this.props}
            />
            <ModalFeedbackButton
              contentType="goodJob"
              commentIcon={goodJobIcon}
              {...this.props}
            />

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
          {/*<ul>*/}
            {/*<ThesisButton />*/}
            {/*<ReasonSupportButton />*/}
            {/*<InterpretationButton />*/}
            {/*<ParagraphDevButton />*/}
            {/*<ResearchButton />*/}
            {/*<CounterArgsButton />*/}
            {/*<OtherButton {...this.props} />*/}
            {/*<GoodJobButton />*/}
            {/*<FeedbackLibButton toggleQuickFeedback={this.toggleQuickFeedback} />*/}
            {/**/}
            {/*<div*/}
              {/*className={this.state.showQuickFeedbackTool ? sideMenu.quickFeedback : sideMenu.quickFeedback + ' ' + sideMenu.hiddenItem}>*/}
              {/*<li*/}
                {/*data-id="appropriate-language"*/}
                {/*className={sideMenu.list_Item}*/}
                {/*onClick={() => this.spanClicked(1)}>Appropriate Language*/}
              {/*</li>*/}
              {/*<li*/}
                {/*data-id="comma-splice"*/}
                {/*className={sideMenu.list_Item}*/}
                {/*onClick={() => this.spanClicked(2)}>Comma Splice*/}
              {/*</li>*/}
              {/*<li*/}
                {/*data-id="comma-error"*/}
                {/*className={sideMenu.list_Item}*/}
                {/*onClick={() => this.spanClicked(3)}>Comma Error*/}
              {/*</li>*/}
              {/*<li*/}
                {/*data-id="fragment"*/}
                {/*className={sideMenu.list_Item}*/}
                {/*onClick={() => this.spanClicked(4)}>Fragment*/}
              {/*</li>*/}
              {/*<li*/}
                {/*data-id="pronoun-agreement"*/}
                {/*className={sideMenu.list_Item}*/}
                {/*onClick={() => this.spanClicked(5)}>Pronoun Agreement*/}
              {/*</li>*/}
              {/*<li*/}
                {/*data-id="subject-verb-agreement"*/}
                {/*className={sideMenu.list_Item}*/}
                {/*onClick={() => this.spanClicked(6)}>Subject Verb Agreement*/}
              {/*</li>*/}
              {/*<li*/}
                {/*data-id="needs-analysis"*/}
                {/*className={sideMenu.list_Item}*/}
                {/*onClick={() => this.spanClicked(7)}>Needs Analysis*/}
              {/*</li>*/}
              {/*<li*/}
                {/*data-id="usage"*/}
                {/*className={sideMenu.list_Item}*/}
                {/*onClick={() => this.spanClicked(8)}>Usage*/}
              {/*</li>*/}
            {/*</div>*/}
          {/*</ul>*/}
        </div>
      </div>);
  }
}

SideMenu.propTypes = {
  submitFeedbackToolContentItem: PropTypes.func,
  completeHighlight: PropTypes.func,
  position: PropTypes.object,
  submissionId: PropTypes.string
};

export default SideMenu;
