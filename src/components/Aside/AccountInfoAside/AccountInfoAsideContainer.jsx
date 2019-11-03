import React from 'react';
import AccountInfoAside from './AccountInfoAside';
import { connect } from 'react-redux';

class AccountInfoAsideContainer extends React.Component {
    render() {
        return <AccountInfoAside { ...this.props } />
    }
}

// Данные из стейта

const mapStateToProps = state => ({
    userLogin: state.auth.login,
    userName: state.auth.name,
    userLastName: state.auth.lastName,
});

export default connect(mapStateToProps)(AccountInfoAsideContainer);