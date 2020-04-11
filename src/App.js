import React, {useEffect} from 'react';
import {connect} from "react-redux";

import './App.less';

import {setMe} from "./redux/auth-reducer";

import Aside from "./components/Aside";
import Pages from "./components/Pages";

const App = ({ setMe }) => {

    useEffect(() => {
        setMe();
    });

    return (
        <div className={'App'}>
            <Aside />
            <Pages />
        </div>
    );
};

export default connect(null, { setMe })(App);
