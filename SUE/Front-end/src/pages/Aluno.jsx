import React from 'react';
import GetData from '../components/GetData';


function Aluno() {
    return(
        <>
        <h1>Dados alunos</h1>
            <GetData url="http://localhost:3500/aluno" />
        </>
    )
}

export default Aluno;
