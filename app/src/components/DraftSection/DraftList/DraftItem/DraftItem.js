import React, {PropTypes} from 'react';
import DraftItemHeader from './DraftItemHeader/DraftItemHeader';
// import DropDown from '../../../Dropdown/DropDown.js';
import uuid from 'uuid';
import draftItemCss from './draftItem.css';

const DraftItem = ({draftItem, draftName, gradingPolicy}) => (
  <div className={draftItemCss.drafts}>
    {/*TODO: expand collapse logic needed*/}
    <DraftItemHeader draftName={draftName} gradingPolicy={gradingPolicy} {...draftItem} />

    <section className={draftItemCss.filters}>
      {/*TODO: add drop downs for these all*/}
      <div className={draftItemCss.draftParam}>Grade Type</div>
      <div className={draftItemCss.draftParam}>Review Type</div>
      <div className={draftItemCss.draftParam}>Due Date</div>

      <div className={draftItemCss.draftParamSelect}>
        {/*<DropDown ddPosition='right' ddTitle={props.ddTitle} {...ddOptions} />*/}
        { draftItem.details.gradingPolicy }
      </div>
      <div className={draftItemCss.draftParamSelect}>
        { draftItem.type }
      </div>
      <div className={draftItemCss.draftParamSelect}>
        { draftItem.dueDate }
      </div>
    </section>

    <section>
      <div className={draftItemCss.draftLeft}>
        <h4>Feedback Criteria</h4>
        <ul>
          { draftItem.details.learningObjectives.map(x => (
            <li key={uuid.v4()}>
              <span className={draftItemCss.bold}>{ x.key }:</span> { x.value }
            </li>
          )) }
        </ul>

        <h4>Student Reflection</h4>
        <ul>
          { draftItem.details.studentReflectionQuestions.map(x => (
            <li key={uuid.v4()}>{ x }</li>
          ))}
        </ul>
      </div>

      <div className={draftItemCss.draftRight}>
        <h4>Draft Instructions</h4>
        <textarea className={draftItemCss.instructions} placeholder="Add draft Instructions" />
      </div>
    </section>

  </div>);

DraftItem.propTypes = {
  draftItem: PropTypes.object,
  draftName: PropTypes.string,
  gradingPolicy: PropTypes.string
};

export default DraftItem;
