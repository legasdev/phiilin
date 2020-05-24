import React, {useState, useEffect, useCallback, useRef} from "react";

import s from "./MultipleSelect.module.less";

const MultipleSelect = ({ nameSelect='', values=[], isMini=false, onChange, style, styleActive }) => {

    const
        mainSelect = useRef(null);

    const
        [isOpen, setIsOpen] = useState(false),
        [selectedName, setSelectedName] = useState(values && values.length > 0 ? values[0].name : '');

    const
        onOpenSelect = useCallback((event) => {
            console.log(event.target === mainSelect.current)
            console.log(event.target)
            console.log(mainSelect.current)
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
            ref={mainSelect}
        >
            <div
                className={`${s.header} ${isMini ? s.header__min : ''} ${isOpen ? s.header__open : ''}`}
            >
                <div className={s.header__wrapper}>
                    <div className={s.selectedOption}>
                        <span>Группа 1</span>
                        <button className={s.cross}/>
                    </div>
                </div>
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

export default MultipleSelect;