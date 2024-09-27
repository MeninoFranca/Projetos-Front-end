import { useState } from 'react'
import Aluno from './pages/Aluno'
import Professor from './pages/Professor'
import './App.css'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <Aluno />
      <Professor />
    </>
  )
}

export default App
