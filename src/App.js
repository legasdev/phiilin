import React, {useEffect} from 'react';
import {connect, useSelector} from "react-redux";

import './App.less';

import {getAuth} from "./redux/auth-reducer";
import {getListGroups} from "./redux/groups-reducer";

import Aside from "./components/Aside";
import Pages from "./components/Pages";

const App = ({ getAuth, getListGroups }) => {

    const
        init = useSelector(state => state.app.initialized),
        listGroups = useSelector(state => state.groups.listGroups);

    useEffect(() => {
        if (!init) {
            getAuth();
        }
        if (!listGroups) {
            getListGroups();
        }
    }, [init, listGroups, getAuth, getListGroups]);

    return (
        <div className={'App'}>
            <Aside />
            <Pages />
        </div>
    );
};

export default connect(null, { getAuth, getListGroups })(App);
