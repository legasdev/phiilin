import React, {useState, useCallback, useRef} from "react";

import s from "./MultipleSelect.module.less";

const MultipleSelect = ({ nameSelect='', values=[], firstSelectValue, isMini=false, placeholder, onChange, style, styleActive }) => {

    const
        mainSelect = useRef(null);

    const
        [isOpen, setIsOpen] = useState(false),
        [selected, setSelected] = useState(firstSelectValue
            ? firstSelectValue.map(item => ({value: item, name: item}))
            : []);

    const
        onOpenSelect = useCallback((event) => {
            setIsOpen(!isOpen)
        }, [isOpen]),
        onClickOption = useCallback((value, name) => {
            let
                isCheckUnique = true;

            selected.forEach(item => {
                if (item.value === value) {
                    isCheckUnique = false;
                }
            });

            if (isCheckUnique) {
                const
                    newSelected = [...selected, {
                        value,
                        name
                    }];

                setSelected(newSelected);
                onChange && onChange(newSelected);
            }
        }, [selected, onChange]),
        onDeleteSelectedOption = useCallback((value) => {
            const
                newSelected = selected.filter(item => item.value !== value);

            setSelected(newSelected);
        }, [selected]);

    return (
        <div
            className={`${s.main}`}
            style={style}
            ref={mainSelect}
        >
            <div
                className={`${s.header} ${isMini ? s.header__min : ''} ${isOpen ? s.header__open : ''}`}
            >
                <div
                    className={s.activeElement}
                    onClick={onOpenSelect}
                >
                    {
                        placeholder && selected.length === 0 &&
                        <span>{placeholder}</span>
                    }
                </div>
                <div className={s.header__wrapper}>
                    {
                        selected.map(item => (
                            <div key={item.value} className={s.selectedOption}>
                                <span>{item.name}</span>
                                <button
                                    className={s.cross}
                                    onClick={() => onDeleteSelectedOption(item.value)}
                                />
                            </div>
                        ))
                    }
                </div>
                <div
                    className={`${s.arrow} ${isOpen ? s.arrow__open : ''}`}
                    onClick={onOpenSelect}
                />
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