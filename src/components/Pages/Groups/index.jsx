import React, {useEffect, useCallback, useState} from "react";
import {connect, useSelector} from "react-redux";
import useRedirectToLogin from "@src/hooks/useRedirectLogin";

import s from "./Groups.module.less";

import Card from "@src/components/common/Card";
import AddButton from "@src/components/common/AddButton";
import NewGroup from "./NewGroup";
import {getListGroup} from "../../../redux/groups-reducer";

const GroupsPage = ({ getListGroup }) => {

    const
        RedirectToLogin = useRedirectToLogin();

    const
        groups = useSelector(state => state.groups.listGroups);

    const
        [showNewGroup, setShowNewGroup] = useState(false);

    useEffect(() => {
        document.title = 'Группы | SLR Project';
    });

    useEffect(() => {
        if (!groups) {
            getListGroup();
        }
    }, [groups, getListGroup]);

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
                <Card
                    title={'Группа 6654'}
                    info={[
                        {
                            title: 'Учащихся',
                            value: '4'
                        }
                    ]}
                />
                <Card
                    title={'Группа 6658'}
                    info={[
                        {
                            title: 'Учащихся',
                            value: '7'
                        }
                    ]}
                />
                <Card
                    title={'Группа 66456'}
                    info={[
                        {
                            title: 'Учащихся',
                            value: '0'
                        }
                    ]}
                />
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

export default connect(null, {getListGroup})(GroupsPage);