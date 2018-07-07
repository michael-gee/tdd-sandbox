import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { changeInitialState } from '../actions/initial-state-actions';

import '../styles/App.css';

const App = (props) => {
  const { initialStateMessage, changeInitialState } = props;

  return (
      <div className="app">
        <h1>TDD Sandbox</h1>
        <h2>{initialStateMessage}</h2>

        <button className="app-btn" onClick={changeInitialState}>Change Initial State</button>
      </div>
    );
}

const mapStateToProps = ({initialState}) => {
  return {
    initialStateMessage: initialState.message
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeInitialState
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
