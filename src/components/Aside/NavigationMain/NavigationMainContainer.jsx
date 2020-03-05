import React from 'react';
import { connect } from 'react-redux';

import NavigationMain from './NavigationMain';

import { getRollUpStatus } from './../../../redux/selectors/app-selectors';

const NavigationMainContainer = props => {
    return (
        <NavigationMain { ...props } />
    );
};

const mstp = state => ({
    rollUpStatus: getRollUpStatus(state),
});

export default connect(mstp, null)(NavigationMainContainer);