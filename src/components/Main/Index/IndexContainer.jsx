import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Index from './Index';

class IndexContainer extends React.Component {
    render() {
        return <Index { ...this.props } />
    }
}

export default compose(
    connect()(),
)(IndexContainer);