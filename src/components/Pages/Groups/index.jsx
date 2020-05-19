import React, {useEffect, useCallback, useState} from "react";
import {connect, useSelector} from "react-redux";
import useRedirectToLogin from "@src/hooks/useRedirectLogin";
import {getGroups} from "../../../redux/groups-reducer";

import s from "./Groups.module.less";

import Card from "@src/components/common/Card";
import AddButton from "@src/components/common/AddButton";
import NewGroup from "./NewGroup";

const GroupsPage = ({ getGroups }) => {

    const
        RedirectToLogin = useRedirectToLogin();

    const
        groups = useSelector(state => state.groups.groups);

    const
        [showNewGroup, setShowNewGroup] = useState(false);

    useEffect(() => {
        document.title = 'Группы | SLR Project';
    });

    useEffect(() => {
        if (!groups) {
            getGroups();
        }
    }, [groups, getGroups]);

    const
        onAddClick = useCallback((event) => {
            setShowNewGroup(true);
        }, []),
        onClosePopup = useCallback(() => {
            setShowNewGroup(false);
        },[]);

    return (
        RedirectToLogin ||
        <section className={s.main}>
            <h2>Группы</h2>
            <div className={s.cardWrapper}>
                <AddButton
                    title={'Добавить новую группу'}
                    onHandleClick={onAddClick}
                />
                {
                    groups &&
                    groups.map(group => (
                        <Card
                            key={group.id}
                            title={group.number}
                            info={[
                                {
                                    title: 'Направление',
                                    value: group.direction
                                },
                                {
                                    title: 'Учащихся',
                                    value: Object.keys(group.users).length
                                }
                            ]}
                        />
                    ))
                }
            </div>
            {
                showNewGroup &&
                <NewGroup
                    onWrapperClose={onClosePopup}
                />
            }
        </section>
    );
};

export default connect(null, {getGroups})(GroupsPage);