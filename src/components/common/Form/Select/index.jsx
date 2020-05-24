import React, {useState, useEffect, useCallback} from "react";

import s from "./Select.module.less";

const Select = ({ nameSelect='', values=[], isMini=false, onChange, style, styleActive }) => {

    const
        [isOpen, setIsOpen] = useState(false),
        [selectedName, setSelectedName] = useState(values && values.length > 0 ? values[0].name : '');

    const
        onOpenSelect = useCallback(() => {
            setIsOpen(!isOpen)
        }, [isOpen]),
        onClickOption = useCallback((value, name) => {
            // setSelectedValue(value);
            setSelectedName(name);
            onChange && onChange({value, name, nameSelect});
        }, [nameSelect, onChange]),
        onBlur = useCallback(() => {
            setIsOpen(false);
        }, []);

    useEffect(() => {
        if (values && values.length > 0 && selectedName.length === 0) {
            setSelectedName(values[0].name)
        }
    }, [values, selectedName]);

    return (
        <div
            className={`${s.main}`}
            onClick={onOpenSelect}
            onBlur={onBlur}
            style={style}
        >
            <div
                className={`${s.header} ${isMini ? s.header__min : ''} ${isOpen ? s.header__open : ''}`}
            >
                <span
                    className={s.selectedValue}
                    style={styleActive}
                >{selectedName}</span>
                <div className={`${s.arrow} ${isOpen ? s.arrow__open : ''}`} />
            </div>
            <div className={`${s.wrapper} ${isOpen ? s.wrapper__open : ''}`}>
                <div>
                {
                    values &&
                        values.map(item => (
                            <div
                                key={item.value}
                                className={s.option}
                                onClick={() => onClickOption(item.value, item.name)}
                            >
                                {item.name}
                            </div>
                        ))
                }
                </div>
            </div>
        </div>
    );
};

export default Select;