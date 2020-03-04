import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { initializeApp } from './redux/app-reducer';
import { getRollUpStatus } from './redux/selectors/app-selectors';

import './App.css';

import Empty from "./components/Empty";
import Aside from "./components/Aside";
import Profile from "./components/Pages/Profile";


class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    return (
      !this.props.initialized
        ? <div className={'App'}>Загрузка...</div>
        : (
          <div className={`App ${this.props.rollUpStatus ? '' : 'close'}`}>
            <Aside />
            <Switch>
                <Route
                  exact
                  path={'/'}
                  render={ () => <Profile /> }
                />
                <Route render={ () => <Empty /> }/>
              </Switch>
          </div>
        )
    );
  }
};

const mstp = state => ({
  initialized: state.app.initialized,
  rollUpStatus: getRollUpStatus(state),
});

export default compose(
  connect(mstp, { initializeApp }),
  withRouter
)(App);
