import React from 'react';
import dashBoard from './dashBoard.css';
import Header from './../Header/Header';
import ActionButton from './../ActionButton/ActionButton';

export default () => (
  <div className={dashBoard.dashBoard} >
    <Header
      contentLeft="Macmillan Writing Center"
      dataIdLeft="page-title"
      contentRight="ENG 101 Writing Composition"
      dataIdRight="class-title"
    />
    <h1 data-id="dashboard-heading" className={dashBoard.heading}>Welcome to Macmillan Writing Center</h1>
    <h3 data-id="dashboard-introductory-text" className={dashBoard.heading}>Some introductory text</h3>
    <div data-id="create-activity-block" className={dashBoard.create_activity}>
      <span className={dashBoard.headers} >
        <h2
          data-id="drafting-revising-activity-header"
          className={dashBoard.content}>
          <strong>Drafting/Revising Assignment</strong>
        </h2>
        <p data-id="drafting-revising-activity-explanation" className={dashBoard.content + ' ' + dashBoard.description}>Some explanatory text about the activity type</p>
      </span>
      <ActionButton dataId="create-activity-button" content="Create an Assignment" css={dashBoard.create_button} />
    </div>
  </div>);
