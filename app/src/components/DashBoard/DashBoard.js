import React from 'react';
import dashBoard from './dashBoard.css';
import Header from './../Header/Header';
import assignmentActionButton from './../../styles/action-button.css';

export default () => (
  <div className={dashBoard.dashBoard} >
    <Header />
    <h1 className={dashBoard.heading}>Welcome to Macmillan Writing Center</h1>
    <h3 className={dashBoard.heading}>Some introductory test</h3>
    <div className={dashBoard.createAssignment}>
      <span className={dashBoard.headers} >
        <h2 className={dashBoard.content}><strong>Drafting/Revising Assignment</strong></h2>
        <p className={dashBoard.content + ' ' + dashBoard.description}>Some explanatory text about the assignment type</p>
      </span>
      <span className={ assignmentActionButton['assign-button-wrapper'] + ' ' + dashBoard['create-button'] }>
        <div className={ assignmentActionButton['assign-button-wrapper'] }>
          <button className={ assignmentActionButton['assign-button'] }>Create an Assignment</button>
        </div>
      </span>
    </div>
  </div>);
