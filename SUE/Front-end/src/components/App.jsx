import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Alunos from '../pages/Aluno';
import Professores from '../pages/Professor';

const App = () => {
    return (
        <div>
            <nav className='links'>
                <Link to="/aluno">Alunos</Link>
                <Link to="/professor">Professores</Link>
            </nav>
            <Routes>
                <Route path="/aluno" element={<Alunos />} />
                <Route path="/professor" element={<Professores />} />
            </Routes>
        </div>
    );
};

export default App;
