/**
 * 
 * HOC функция
 * Редирект на логин, если юзер не залогинен
 * 
 */

import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapStateToProps = state => ({
    auth: state.auth.isAuth
});

const withAuthRedirect = Component => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.auth) return <Redirect to={'/login'} />;
            return (
                <Component { ...this.props } />
            );
        }
    }

    return connect(mapStateToProps)(RedirectComponent);
}

export default withAuthRedirect;