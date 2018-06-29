import React, { Component } from 'react';
import { connect } from 'react-redux';
import { scoreUpdater } from '../actions/score';
import { scoreInterpret } from '../domain-logic/score-display';
export class Tennis extends Component {

  scoreUpdater = (playerScore) => {
    this.props.scoreUpdater(playerScore)
  }
  render() {
    const { tennis: { p1, p2 } } = this.props

    return (
      <div id="wrapper" >
        <div id="row">
          <h1>Kata Tennis</h1>
          <div className="name-box">{ scoreInterpret(p1,p2) }</div>
          <div id="score-box1" className="score-box">{ p1 }</div>
          <div id="score-box2" className="score-box">{ p2 }</div>
          <button id="p1-scoreInc-button" onClick={() => this.scoreUpdater('p1')}>Increase P1 score</button>
          <button id="p2-scoreInc-button" onClick={() => this.scoreUpdater('p2')}>Increase P2 score</button>
        </div>
      </div>

    )
  }
}

export default connect( state => { return { tennis: state.tennis }}, { scoreUpdater })(Tennis);
