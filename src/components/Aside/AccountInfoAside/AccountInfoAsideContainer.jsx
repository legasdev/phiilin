import React from 'react';
import AccountInfoAside from './AccountInfoAside';
import { connect } from 'react-redux';
import { getAuthData } from '../../../redux/auth-reducer';

class AccountInfoAsideContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthData();
    }

    render() {
        return <AccountInfoAside { ...this.props } />
    }
}

// Данные из стейта

const mapStateToProps = state => ({
    userLogin: state.auth.login,
    userName: state.auth.name,
    userLastName: state.auth.lastName,
    userPosition: state.auth.position,
});

export default connect(mapStateToProps, {getAuthData})(AccountInfoAsideContainer);