import React, {PropTypes} from 'react';
import DraftItemHeader from './DraftItemHeader/DraftItemHeader';
import DraftItemDescription from './DraftItemDescription/DraftItemDescription';
import DraftItemFeedback from './DraftItemFeedback/DraftItemFeedback';
import draftItemCss from './draftItem.css';

const DraftItem = ({draftItem, draftName, gradingPolicy}) => (
  <li className={ draftItemCss.item }>
    <DraftItemHeader draftName={draftName} gradingPolicy={gradingPolicy} {...draftItem} />
    <section className={ draftItemCss.summary }>
      <DraftItemDescription details={draftItem.details} />
      <DraftItemFeedback details={draftItem.details} />
    </section>
  </li>);

DraftItem.propTypes = {
  draftItem: PropTypes.object,
  draftName: PropTypes.string,
  gradingPolicy: PropTypes.string
};

export default DraftItem;
