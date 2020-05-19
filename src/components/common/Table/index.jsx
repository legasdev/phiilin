import React from "react";

import s from "./Table.module.less";

const Table = ({ header, rows, onAddNew, buttonText='Добавить', bigFirst=false, addNew=false }) => {

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
                    <div className={s.row} key={row[1]}>
                        {
                            row &&
                            row.map((cell, i) => (
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