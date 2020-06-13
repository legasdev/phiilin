import React from "react";
import ReactDOM from "react-dom";

import s from './Popup.module.less';

const Popup = ({onWrapperClose, style={}, ...props}) => {

    return ReactDOM.createPortal(
        <div className={s.main}>
            <div className={s.shadow} onClick={onWrapperClose}/>
            <div
                className={s.wrapper}
                style={style}
            >
                <div className={s.cross} onClick={onWrapperClose}><i/><i/></div>
                {
                    props.children
                }
            </div>
        </div>,
        document.querySelector('#portals')
    );
};

export default Popup;