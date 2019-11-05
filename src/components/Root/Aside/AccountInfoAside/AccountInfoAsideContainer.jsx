import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import AccountInfoAside from './AccountInfoAside';

class AccountInfoAsideContainer extends React.Component {

    componentDidMount() {
    }

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
});

export default compose(
    connect(mapStateToProps),
)(AccountInfoAsideContainer);