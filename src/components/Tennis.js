import React, { Component } from 'react';
import { connect } from 'react-redux';
import { scoreUpdater } from '../actions/score';

export class Tennis extends Component {

  scoreUpdater = (playerScore) => {
    this.props.scoreUpdater(playerScore)
  }
  render() {
    const { tennis } = this.props
    const name = tennis.name;
    const player1 = tennis.player1.score;
    const player2 = tennis.player2.score;

    return (
      <div id="wrapper" >
        <div id="row">
          <h1>Kata Tennis</h1>
          <div className="name-box">{ name }</div>
          <div id="score-box1" className="score-box">{ player1 }</div>
          <div id="score-box2" className="score-box">{ player2 }</div>
          <button id="p1-scoreInc-button" onClick={() => this.scoreUpdater('p1')}>Increase P1 score</button>
          <button id="p2-scoreInc-button" onClick={() => this.scoreUpdater('p2')}>Increase P2 score</button>
        </div>
      </div>

    )
  }
}

export default connect( state => { return { tennis: state.tennis }}, { scoreUpdater })(Tennis);
