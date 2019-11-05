import React from 'react';

import { compose } from 'redux';

import withAuthRedirect from './../../hoc/withAuthRedirect';

import Aside from './Aside/Aside';
import Main from './Main/Main';

class Root extends React.Component {

    render() {
        return (
            <>
                <Aside />
                <Main />
            </>
        );
    }
}

export default compose(
    withAuthRedirect
)(Root);