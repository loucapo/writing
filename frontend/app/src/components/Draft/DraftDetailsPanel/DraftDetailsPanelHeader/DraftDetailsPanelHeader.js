import React from 'react';
import MLIcon from 'ml-react-cdl-icons';

import styles from './DraftDetailsPanelHeader.css';

const DetailsPanelHeader = () => {
  return (
    <header className={styles.header}>
      <MLIcon
        title="activity details"
        fill="black"
        type="info_outline"
        width="36"
        height="36"
        scale={1.2}
        viewBox="0 0 36 36"
        className="activityDetailsIcon" />
    </header>
  );
};

export default DetailsPanelHeader;
