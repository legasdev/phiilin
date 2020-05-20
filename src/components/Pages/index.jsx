import React from "react";
import {compose} from "redux";
import {connect, useSelector} from "react-redux";
import {Route, Switch, withRouter} from "react-router-dom";
import { LastLocationProvider } from 'react-router-last-location';

import s from './Pages.module.less';

import {initializeApp} from "@src/redux/app-reducer";

import Profile from "./Profile";
import Empty from "../Empty";
import LoginPage from "./Login";
import GroupsPage from "./Groups";
import UsersPage from "./Users";
import TasksPage from "./Tasks";
import WorksPage from "./Works";
import RegPage from "./Register";

/**
 * Роутинг страниц
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const Pages = props => {

    const isAuth = useSelector(state => state.auth.isAuth);

    return (
        <div className={isAuth ? s.main : ''}>
            <LastLocationProvider watchOnlyPathname>
            <Switch>
                    <Route
                        exact
                        path={'/'}
                        render={ () => <Profile /> }
                    />
                    <Route
                        path={'/login'}
                        render={ () => <LoginPage /> }
                    />
                    <Route
                        path={'/registration'}
                        render={ () => <RegPage /> }
                    />
                    <Route
                        path={'/groups'}
                        render={ () => <GroupsPage /> }
                    />
                    <Route
                        path={'/users'}
                        render={ () => <UsersPage /> }
                    />
                    <Route
                        exact
                        path={'/tasks'}
                        render={ () => <TasksPage /> }
                    />
                    <Route
                        path={'/tasks/group'}
                        render={ () => <TasksPage forAllGroup /> }
                    />
                    <Route
                        path={'/works'}
                        render={ () => <WorksPage /> }
                    />
                    <Route render={ () => <Empty /> }/>
            </Switch>
            </LastLocationProvider>
        </div>
    );
};

export default compose(
    connect(null, { initializeApp }),
    withRouter
)(Pages);