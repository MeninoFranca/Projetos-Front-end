import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import Table from '../components/Table';

const Aluno = () => {
    const [alunos, setAlunos] = useState([]);
    const [editingAluno, setEditingAluno] = useState(null);

    useEffect(() => {
        fetchAlunos();
    }, []);

    const fetchAlunos = async () => {
        const response = await fetch('http://localhost:3500/aluno');
        const data = await response.json();
        setAlunos(data);
    };

    const addOrEditAluno = async (aluno) => {
        const method = aluno.id_Aluno ? 'PUT' : 'POST';
        const url = aluno.id_Aluno
            ? `http://localhost:3500/aluno/editar/${aluno.id_Aluno}`
            : 'http://localhost:3500/aluno/criar';

        await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(aluno),
        });
        fetchAlunos();
        setEditingAluno(null);
    };

    const deleteAluno = async (id) => {
        if (!id) return;

        const endpoint = `http://localhost:3500/aluno/excluir/${id}`;
        const response = await fetch(endpoint, { method: 'DELETE' });
        
        if (response.ok) {
            fetchAlunos(); // Atualiza a lista após a exclusão
        } else {
            console.error('Erro ao excluir aluno');
            alert('Erro ao excluir aluno');
        }
    };

    const editAluno = (aluno) => {
        setEditingAluno(aluno);
    };

    const cancelEdit = () => {
        setEditingAluno(null);
    };

    return (
        <div>
            <h1>Lista de Alunos</h1>
            <Form addOrEditItem={addOrEditAluno} editingItem={editingAluno} cancelEdit={cancelEdit}
                  fields={[
                      { name: 'nome_aluno', placeholder: 'Nome do Aluno' },
                      { name: 'Num_Matricula', placeholder: 'Número de Matrícula' },
                      { name: 'Estado_Matricula', placeholder: 'Estado da Matrícula' },
                  ]} />
            <Table items={alunos} editItem={editAluno} deleteItem={deleteAluno}
                   columns={[
                       { name: 'id_Aluno', label: 'ID' },
                       { name: 'nome_aluno', label: 'Nome' },
                       { name: 'Num_Matricula', label: 'Número de Matrícula' },
                       { name: 'Estado_Matricula', label: 'Estado da Matrícula' },
                   ]} />
        </div>
    );
};

export default Aluno;
