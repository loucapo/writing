import React, {PropTypes} from 'react';
import DraftItemHeader from './DraftItemHeader/DraftItemHeader';
// import DraftItemDescription from './DraftItemDescription/DraftItemDescription';
// import DraftItemFeedback from './DraftItemFeedback/DraftItemFeedback';
// import DropDown from '../../../Dropdown/DropDown.js';
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
        Instructor Review
      </div>
      <div className={draftItemCss.draftParamSelect}>
        Complete / Incomplete
      </div>
      <div className={draftItemCss.draftParamSelect}>
        Apr 4, 2017
      </div>
    </section>

    <section>
      <div className={draftItemCss.draftLeft}>
        <h4>Feedback Criteria</h4>
        <ul>
          <li><span className={draftItemCss.bold}>Introduction:</span> Thesis</li>
          <li><span className={draftItemCss.bold}>Body:</span> Reasons & Support, Interpretation / Analysis</li>
          <li><span className={draftItemCss.bold}>Conclusion:</span> Expansion/Significance of Thesis</li>
          <li>
            <span className={draftItemCss.bold}>Research/Evidence:</span> Integration of Research, Counterarguments
          </li>
        </ul>

        <h4>Student Reflection</h4>
        <ul>
          <li>The primary argument I'm making is...</li>
          <li>One piece of evidence I want to call attention to in my essay is...</li>
          <li>One idea I need to develop further is...</li>
        </ul>
      </div>

      <div className={draftItemCss.draftRight}>
        <h4>Draft Instructions</h4>
        <textarea className={draftItemCss.instructions} placeholder="Add draft Instructions" />
      </div>
    </section>

    {/*<section className={ draftItemCss.summary }>*/}
    {/*<DraftItemDescription details={draftItem.details} />*/}
    {/*<DraftItemFeedback details={draftItem.details} />*/}
    {/*</section>*/}
  </div>);

DraftItem.propTypes = {
  draftItem: PropTypes.object,
  draftName: PropTypes.string,
  gradingPolicy: PropTypes.string
};

export default DraftItem;
