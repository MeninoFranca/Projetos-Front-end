import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import Table from '../components/Table';

const Professor = () => {
    const [professores, setProfessores] = useState([]);
    const [editingProfessor, setEditingProfessor] = useState(null);

    useEffect(() => {
        fetchProfessores();
    }, []);

    const fetchProfessores = async () => {
        const response = await fetch('http://localhost:3500/professor');
        const data = await response.json();
        setProfessores(data);
    };

    const addOrEditProfessor = async (professor) => {
        const method = professor.id_professor ? 'PUT' : 'POST';
        const url = professor.id_professor
            ? `http://localhost:3500/professor/editar/${professor.id_professor}`
            : 'http://localhost:3500/professor/criar';

        await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(professor),
        });
        fetchProfessores();
        setEditingProfessor(null);
    };

    const deleteProfessor = async (id) => {
        if (!id) return;

        const endpoint = `http://localhost:3500/professor/excluir/${id}`;
        const response = await fetch(endpoint, { method: 'DELETE' });
        
        if (response.ok) {
            fetchProfessores(); // Atualiza a lista após a exclusão
        } else {
            console.error('Erro ao excluir professor');
            alert('Erro ao excluir professor');
        }
    };

    const editProfessor = (professor) => {
        setEditingProfessor(professor);
    };

    const cancelEdit = () => {
        setEditingProfessor(null);
    };

    return (
        <div>
            <h1>Lista de Professores</h1>
            <Form addOrEditItem={addOrEditProfessor} editingItem={editingProfessor} cancelEdit={cancelEdit}
                  fields={[
                      { name: 'nome_professor', placeholder: 'Nome do Professor' },
                      { name: 'especialidade', placeholder: 'Especialidade' },
                  ]} />
            <Table items={professores} editItem={editProfessor} deleteItem={deleteProfessor}
                   columns={[
                       { name: 'id_professor', label: 'ID' },
                       { name: 'nome_professor', label: 'Nome' },
                       { name: 'especialidade', label: 'Especialidade' },
                   ]} />
        </div>
    );
};

export default Professor;
