import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { initializeApp } from './redux/app-reducer';

import './App.css';

import AsideContainer from './components/Aside/AsideContainer';
import LoginWrapper from './components/LoginWrapper/LoginWrapper';
import MainContainer from './components/Main/MainContainer';

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
            <div>
                <Route
                  path={'/'}
                  render={ () => <MainContainer /> }
                />
                <Route
                  path={'/login'}
                  render={ () => <LoginWrapper /> }
                />
              </div>
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
