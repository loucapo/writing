import React from 'react';

import Header from './Header/Header';
import AssignmentSection from './AssignmentSection/AssignmentSection';
import DraftSection from './DraftSection/DraftSection';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <AssignmentSection />
      <DraftSection />
    </div>
  );
};

export default App;
