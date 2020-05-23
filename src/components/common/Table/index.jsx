import React, {useCallback} from "react";

import s from "./Table.module.less";

const Table = ({ header, rows, onAddNew, buttonText='Добавить', bigFirst=false, addNew=false, handlerClickRow }) => {

    const
        onClickRow = useCallback((data) => {
            handlerClickRow && handlerClickRow(data);
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
                    <div
                        className={`${s.row} ${handlerClickRow ? s.rowSelect : ''}`}
                        key={row[0]}
                        onClick={() => onClickRow(row)}
                    >
                        {
                            row &&
                            row
                                .filter((value, i) => i > 2)
                                .map((cell, i) => (
                                <div
                                    key={i}
                                    className={`${s.cell} ${i===0 && bigFirst ? s.cellBig : ''}`}
                                >
                                    {
                                        typeof cell === 'object'
                                            ? cell.name === 'link'
                                                ? <a className={s.cellLink} href={cell.value} target={"_blank"}>Скачать</a>
                                                : <select onChange={(event) => {cell.value(event, row[0])}} value={cell.selectValue}>
                                                <option value={''}>Нет оценки</option>
                                                <option value={'2'}>2</option>
                                                <option value={'3'}>3</option>
                                                <option value={'4'}>4</option>
                                                <option value={'5'}>5</option>
                                            </select>
                                            : cell
                                    }
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