import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { initializeApp } from './redux/app-reducer';

import './App.css';

import AsideContainer from './components/Aside/AsideContainer';
import LoginWrapper from './components/LoginWrapper/LoginWrapper';
import ProfileContainer from './components/Profile/ProfileContainer';
import Register from './components/Register/Register';
import Groups from './components/Groups/Groups';
import Users from './components/Users/Users';

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    return (
      !this.props.initialized
        ? <div>Загрузка...</div>
        : (
          <div className="App">
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
                  render={ () => <Groups /> }
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
});

export default compose(
  withRouter,
  connect(mstp, { initializeApp })
)(App);
