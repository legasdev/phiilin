import React, {useCallback} from "react";

import s from "./Table.module.less";
import Select from "../Form/Select";
import Button from "../Button";

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
                rows.map((row, i) => (
                    <div
                        className={`${s.row} ${handlerClickRow ? s.rowSelect : ''}`}
                        key={row[0]}
                        onClick={() => onClickRow(row)}
                        style={{
                            zIndex: `${rows.length - i}`
                        }}
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
                                        cell &&
                                        typeof cell === 'object'
                                            ? cell.name === 'link'
                                                ? <a className={s.cellLink} href={cell.value} target={"_blank"}>Скачать</a>
                                                : cell.name === 'button'
                                                    ? <Button mini onClick={cell.value}>Проверить</Button>
                                                    : <Select
                                                        isMini
                                                        values={[
                                                            {name: 'Нет оценки', value: ''},
                                                            {name: '2', value: '2'},
                                                            {name: '3', value: '3'},
                                                            {name: '4', value: '4'},
                                                            {name: '5', value: '5'},
                                                        ]}
                                                        firstSelectValue={cell.selectValue}
                                                        onChange={({value}) => {cell.value(value, row[0])}}
                                                        style={{
                                                            left: '-20px'
                                                        }}
                                                        styleActive={{
                                                            minWidth: '80px'
                                                        }}
                                                    />
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