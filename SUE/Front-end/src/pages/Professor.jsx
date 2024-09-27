import React from 'react';
import GetData from '../components/GetData';


function Professor() {
    return(
        <>
        <h1>Dados professor</h1>
            <GetData url="http://localhost:3500/professor" />
        </>
    )
}

export default Professor;
