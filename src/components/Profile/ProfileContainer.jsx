import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { logout } from './../../redux/auth-reducer';

import { withAuthRedirect } from '../../hoc/withAuthRedirect';

import Profile from './Profile';

class ProfileContainer extends React.Component {
    render() {
        return (
            <div>
                <Profile { ...this.props } />
            </div>
        );
    }
};

const mstp = state => ({
    name: state.auth.name,
    lastName: state.auth.lastName,
    position: state.auth.position,
});

export default compose(
    connect(mstp, {logout}),
    withAuthRedirect
)(ProfileContainer);