import React from 'react';
import dashBoard from './dashBoard.css';
import Header from './../Header/Header';
import ActionButton from './../ActionButton/ActionButton';

export default () => (
  <div className={dashBoard.dashBoard} >
    <Header contentLeft="Macmillan Writing Center" contentRight="ENG 101 Writing Composition" />
    <h1 className={dashBoard.heading}>Welcome to Macmillan Writing Center</h1>
    <h3 className={dashBoard.heading}>Some introductory test</h3>
    <div className={dashBoard.createAssignment}>
      <span className={dashBoard.headers} >
        <h2 className={dashBoard.content}><strong>Drafting/Revising Assignment</strong></h2>
        <p className={dashBoard.content + ' ' + dashBoard.description}>Some explanatory text about the assignment type</p>
      </span>
      <ActionButton data-id="action-button" content="Create an Assignment" css={dashBoard['create-button']} />
    </div>
  </div>);
