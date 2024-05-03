import styles from "./Header.module.scss"

export default function Header({changeView, value}) {
  return (
    <header className={`${styles.header}`}>
        <div>
        <h1 className={` `}>NBA</h1>
        </div>
        <div>
            <button value="East" onClick={() => changeView(value)} className="btn-primary m-10">East</button>
            <button value="West" onClick={() => changeView(value)} className="btn-primary m-10">West</button>
            <button value="all" onClick={() => changeView(value)} className="btn-primary m-10">All</button>
        </div>
        
    </header>
  )
}
