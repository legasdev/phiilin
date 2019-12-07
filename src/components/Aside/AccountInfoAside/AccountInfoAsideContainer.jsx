import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import AccountInfoAside from './AccountInfoAside';

import { getRollUpStatus } from './../../../redux/selectors/app-selectors';

class AccountInfoAsideContainer extends React.Component {
    render() {
        return <AccountInfoAside { ...this.props } />;
    }
}

// Данные из стейта

const mapStateToProps = state => ({
    userLogin: state.auth.login,
    userName: state.auth.name,
    userLastName: state.auth.lastName,
    userPosition: state.auth.position,
    rollUpStatus: getRollUpStatus(state),
});

export default compose(
    connect(mapStateToProps, null),
)(AccountInfoAsideContainer);