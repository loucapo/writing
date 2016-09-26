import React, {PropTypes} from 'react';
import DraftItemHeader from './DraftItemHeader/DraftItemHeader';
import DraftItemDescription from './DraftItemDescription/DraftItemDescription';
import DraftItemFeedback from './DraftItemFeedback/DraftItemFeedback';
import draftItemStype from './draftItem.css';

const DraftItem = ({draftItem, draftName}) => (
  <li className={ draftItemStype.item }>
    <DraftItemHeader draftName={draftName} {...draftItem} />
    <section className={ draftItemStype.summary }>
      <DraftItemDescription id={draftItem.id} details={draftItem.details} />
      <DraftItemFeedback id={draftItem.id} details={draftItem.details} />
    </section>
  </li>);

DraftItem.propTypes = {
  draftItem: PropTypes.object,
  draftName: PropTypes.string
};

export default DraftItem;
