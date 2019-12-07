import React from 'react';
import { connect } from 'react-redux';

import { getMe } from './../../redux/auth-reducer';
import { getRollUpStatus } from './../../redux/selectors/app-selectors';

import Aside from './Aside';

class AsideContainer extends React.Component {

    componentDidMount() {
        // this.props.getMe();
    }

    render() {
        return (
            <Aside { ...this.props } />
        );
    }
};

const mstp = state => ({
    isAuth: state.auth.isAuth,
    rollUpStatus: getRollUpStatus(state),
});

export default connect(mstp, { getMe })(AsideContainer);