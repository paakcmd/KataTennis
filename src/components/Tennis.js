import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPlayers } from '../actions/player';

export class Tennis extends Component {
  componentDidMount() {
    this.props.createPlayers();
  }

  render() {
    return (
      <div>Tennis</div>
    )
  }
}

export default connect( state => { return { tennis: state.tennis }}, { createPlayers })(Tennis);
