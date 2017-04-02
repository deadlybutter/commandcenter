import { connect } from 'react-redux';
import * as actions from '../../actions';

function getState(state) {
  return { app: state };
}

function getActions() {
  return { actions };
}

export default (component) => connect(getState, getActions)(component);
