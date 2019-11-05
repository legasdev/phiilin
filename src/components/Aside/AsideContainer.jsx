import React from 'react';
import { connect } from 'react-redux';

import { getAuthData } from './../../redux/auth-reducer';

import Aside from './Aside';

class AsideContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthData();
    }

    render() {
        return (
            <Aside { ...this.props } />
        );
    }
};

const mstp = state => ({
    isAuth: state.auth.isAuth
});

export default connect(mstp, { getAuthData })(AsideContainer);