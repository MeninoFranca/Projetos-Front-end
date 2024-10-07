import {Header} from './Header'
import style from './App.module.css'
import { Sidebar } from './Sidebar.jsx'

export function App() {
  return (
    <>
     <Header />
     <div className={style.wrapper}>
      <Sidebar />
      <main></main>
     </div>
    </>
  )
}

