import React, { useState, useEffect } from 'react';

const Form = ({ addOrEditItem, editingItem, cancelEdit, fields }) => {
    const [item, setItem] = useState(fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {}));

    useEffect(() => {
        if (editingItem) {
            setItem(editingItem);
        } else {
            setItem(fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {}));
        }
    }, [editingItem, fields]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem({ ...item, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addOrEditItem(item);
    };

    const handleCancel = () => {
        setItem(fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {}));
        cancelEdit();
    };

    return (
        <form onSubmit={handleSubmit}>
            {fields.map((field) => (
                <input
                    key={field.name}
                    type="text"
                    name={field.name}
                    placeholder={field.placeholder}
                    value={item[field.name]}
                    onChange={handleChange}
                    required
                />
            ))}
            <button type="submit">{editingItem ? 'Editar' : 'Adicionar'}</button>
            <button type="button" onClick={handleCancel}>Cancelar</button>
        </form>
    );
};

export default Form;
