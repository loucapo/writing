import React, { PropTypes } from 'react';

import AssignmentMenu from '../AssignmentMenu/AssignmentMenu';
import DraftList from './DraftList/DraftList';

import draftSection from './draftSection.css';

const DraftSection = ({drafts}) => {
  return (
    <div className={ draftSection.wrapper }>
      <AssignmentMenu />
      <DraftList drafts={drafts} />
    </div>
  );
};

DraftSection.propTypes = {
  drafts: PropTypes.array
};

export default DraftSection;
