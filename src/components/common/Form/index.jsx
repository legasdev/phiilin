import React from "react";

import s from "./Form.module.less";

const Form = ({ onSubmit, children }) => {

    // Сабмит формы
    function handleSubmit(event) {
        event.preventDefault();
        const data = children.reduce( (acc, field) => {
            return field.props.name ?
                {
                    ...acc,
                    [field.props.name]: field.props.value
                } : acc;
        }, {});
        onSubmit(data);
    }

    return (
        <form
            className={s.main}
            onSubmit={handleSubmit}
            noValidate={true}
        >
            {children}
        </form>
    );
};

export default Form;