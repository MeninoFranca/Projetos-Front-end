import React from 'react';

const Table = ({ items, editItem, deleteItem, columns }) => {
    return (
        <table>
            <thead>
                <tr>
                    {columns.map((col) => (
                        <th key={col.name}>{col.label}</th>
                    ))}
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                    <tr key={item.id_Aluno || item.id_professor}>
                        {columns.map((col) => (
                            <td key={col.name}>{item[col.name]}</td>
                        ))}
                        <td>
                            <button onClick={() => editItem(item)}>Editar</button>
                            <button onClick={() => deleteItem(item.id_Aluno || item.id_professor)}>Excluir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
