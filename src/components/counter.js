import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import * as actions from '../actions';

const Counter = ({ currentState, inc, dec, rand }) => {
  return (
    <div className="jumbotron">
      <h2>{currentState}</h2>
      <button
        onClick={dec}
        className="btn btn-primary btn-lg">-</button>
      <button
        onClick={inc}
        className="btn btn-primary btn-lg">+</button>
      <button
        onClick={rand}
        className="btn btn-primary btn-lg">random</button>
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
        currentState: state
    };
};

// const mapDispatchToProps = (dispatch) => {
//
//     const { inc, dec, rand } = bindActionCreators(actions, dispatch);
//
//     return {
//         inc,
//         dec,
//         rand
//     }
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default connect(mapStateToProps, actions)(Counter);
