import React, { Component } from 'react';
import { connect } from 'react-redux';
import { scoreUpdater } from '../actions/score';
import { displayScore } from '../domain-logic/score-display';

export const Tennis = ({ scoreUpdater, tennis: { p1, p2 } }) =>
  <div id="wrapper" >
    <div id="row">
      <h1>Kata Tennis</h1>
      <div className="name-box">{ displayScore(p1,p2) }</div>
      <div id="score-box1" className="score-box">{ p1 }</div>
      <div id="score-box2" className="score-box">{ p2 }</div>
      <button id="p1-scoreInc-button" onClick={() => scoreUpdater('p1')}>Increase P1 score</button>
      <button id="p2-scoreInc-button" onClick={() => scoreUpdater('p2')}>Increase P2 score</button>
    </div>
  </div>

export default connect( state => { return { tennis: state.tennis }}, { scoreUpdater })(Tennis);
