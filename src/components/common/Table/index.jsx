import React, {useCallback} from "react";

import s from "./Table.module.less";

const Table = ({ header, rows, onAddNew, buttonText='Добавить', bigFirst=false, addNew=false, handlerClickRow }) => {

    const
        onClickRow = useCallback((taskId, taskName) => {
            handlerClickRow && handlerClickRow(taskId, taskName);
        }, [handlerClickRow]);

    return (
        <div className={s.table}>
            <div className={`${s.row} ${s.header}`}>
                {
                    header &&
                    header.map((cell, i) => (
                        <div
                            key={i}
                            className={`${s.cell} ${s.cellBold} ${i===0 && bigFirst ? s.cellBig : ''}`}
                        >
                            {cell}
                        </div>
                    ))
                }
            </div>
            {
                rows &&
                rows.map(row => (
                    <div className={`${s.row} ${handlerClickRow ? s.rowSelect : ''}`} key={row[1]} onClick={() => onClickRow(row[0], row[1])}>
                        {
                            row &&
                            row
                                .filter((value, i) => i > 0)
                                .map((cell, i) => (
                                <div
                                    key={i}
                                    className={`${s.cell} ${i===0 && bigFirst ? s.cellBig : ''}`}
                                >
                                    {cell}
                                </div>
                            ))
                        }
                    </div>
                ))
            }
            {
                addNew &&
                <button className={s.addNew} onClick={onAddNew}>
                    {buttonText}
                </button>
            }
        </div>
    );
};

export default Table;