import React, { PropTypes } from 'react';

import Flag from './Flag/Flag';

const Flags = ({flagElements}) => {
  return (
    <div>
      {
        flagElements.map((flagItem, index) => {
          return (<Flag flagItem={flagItem} index={index} key={index} />);
        })
      }
    </div>
  );
};

Flags.propTypes = {
  flagElements: PropTypes.array
};

export default Flags;
