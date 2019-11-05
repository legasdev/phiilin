import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import LoginWrapper from './components/LoginWrapper/LoginWrapper';
import Root from './components/Root/Root';

import { getAuthData } from './redux/auth-reducer';

class App extends React.Component {

  componentDidMount() {
    console.log('OK');
    this.props.getAuthData();
  }

  render() {
    return (
      <div className="App">
        <Route 
            path={'/'}
            render={ () => <Root />}
        />
        <Route 
          path={'/login'}
          render={ () => <LoginWrapper /> }
        />
      </div>
    );
  }
  
};

const mstp = state => ({});

export default connect(mstp, { getAuthData })(App);
