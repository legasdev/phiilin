/**
 * 
 * HOC функция
 * Редирект на главную, если юзер залогинен
 * 
 */

import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapStateToProps = state => ({
    auth: state.auth.isAuth
});

const withRedirToMain = Component => {

    class RedirectComponent extends React.Component {
        render() {
            if (this.props.auth) return <Redirect to={'/'} />;
            return <Component { ...this.props } />;
        }
    }

    return connect(mapStateToProps)(RedirectComponent);
}

export default withRedirToMain;