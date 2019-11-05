import React from 'react';
import { compose } from 'redux';

import { withAuthRedirect } from './../../hoc/withAuthRedirect';

import Main from './Main';

class MainContainer extends React.Component {
    render() {
        return (
            <div>
                <Main />
            </div>
        );
    }
};

export default compose(
    withAuthRedirect
)(MainContainer);