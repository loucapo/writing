import React, {PropTypes} from 'react';
import DraftItem from './DraftItem/DraftItem';

import draftList from './draftList.css';

let DraftList = React.createClass({
  propTypes: {
    Drafts: PropTypes.array
  },
  render() {
    let drafts = [];
    this.props.Drafts.forEach(function pushDrafts(draft, index) {
      let draftName = 'Draft ' + (index + 1);
      drafts.push(<DraftItem draft={draft} draftName={draftName} key={index} />);
    });
    return (
      <div className={ draftList.draftGroup }>
        <ul className={ draftList.items }>
          {drafts}
        </ul>
        <div className={ draftList.draftAction }>
          <a href="#">
            <span className={draftList.add_draft_icon}>&#8853;</span> Add Another Draft
          </a>
        </div>
      </div>
    );
  }
});

export default DraftList;
