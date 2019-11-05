import React from 'react';
import { compose } from 'redux';

import s from './loginWrapper.module.css';
import withRedirToMain from '../../hoc/withRedirToMain';

class LoginWrapper extends React.Component {

    render() {
        return (
            <div className={s.main}>
                <h1>Войти</h1>
            </div>
        );
    }

}

export default compose(
    withRedirToMain
)(LoginWrapper);