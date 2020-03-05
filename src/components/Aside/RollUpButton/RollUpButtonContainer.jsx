import React from 'react';
import { connect } from 'react-redux';

import RollUpButton from './RollUpButton';

import { getRollUpStatus } from './../../../redux/selectors/app-selectors';
import { setRollUp } from '../../../redux/app-reducer';

const RollUpButtonContainer = ({ setRollUp, rollUpStatus, ...props }) => {

    const onClickSetRollUp = () => {
        rollUpStatus
            ? setRollUp(false)
            : setRollUp(true);
    };

    return (
        <RollUpButton 
            onClickSetRollUp={onClickSetRollUp} 
            rollUpStatus={rollUpStatus} 
            { ...props } 
        />
    );
};

const mstp = state => ({
    rollUpStatus: getRollUpStatus(state),
});

export default connect(mstp, { setRollUp })(RollUpButtonContainer);