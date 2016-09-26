import React, {PropTypes} from 'react';
import DraftItemHeader from './DraftItemHeader/DraftItemHeader';
import DraftItemDescription from './DraftItemDescription/DraftItemDescription';
import DraftItemFeedback from './DraftItemFeedback/DraftItemFeedback';
import draftItemStype from './draftItem.css';

const DraftItem = ({draftItem}) => (
  <li className={ draftItemStype.item }>
    <DraftItemHeader draftItem={draftItem} />
    <section className={ draftItemStype.summary }>
      <DraftItemDescription id={draftItem.id} details={draftItem.details} />
      <DraftItemFeedback id={draftItem.id} details={draftItem.details} />
    </section>
  </li>);

DraftItem.propTypes = {
  draftItem: PropTypes.object
};

export default DraftItem;
