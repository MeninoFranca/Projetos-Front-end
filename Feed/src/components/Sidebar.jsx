import style from './Sidebar.module.css'

export function Sidebar() {
    return (
        <>
            <aside className={style.sidebar}>
                <img className={style.cover} src="" alt="" />

                <div className={style.profile}>
                    <strong>Filipe França</strong>
                    <span>Software develope</span>
                </div>
                
                <footer>
                    <a href="#">
                        Editar seu Perfil
                    </a>
                </footer>
            </aside>
        </>
    );
}