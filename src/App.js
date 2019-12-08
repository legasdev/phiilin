import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { initializeApp } from './redux/app-reducer';
import { getRollUpStatus } from './redux/selectors/app-selectors';

import './App.css';

import AsideContainer from './components/Aside/AsideContainer';
import LoginWrapper from './components/LoginWrapper/LoginWrapper';
import ProfileContainer from './components/Profile/ProfileContainer';
import Register from './components/Register/Register';
import GroupsContainer from './components/Groups/GroupsContainer';
import Users from './components/Users/Users';

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
            <AsideContainer />
            <>
                <Route
                  exact
                  path={'/'}
                  render={ () => <ProfileContainer /> }
                />
                <Route
                  path={'/login'}
                  render={ () => <LoginWrapper /> }
                />
                <Route
                  path={'/registration'}
                  render={ () => <Register /> }
                />
                <Route
                  path={'/groups'}
                  render={ () => <GroupsContainer /> }
                />
                <Route
                  path={'/users'}
                  render={ () => <Users /> }
                />
              </>
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
