import Notes from "../Notes/Notes"
import SearchBar from "../SearchBar/SearchBar"
import styles from "./MainDocknotes.module.scss"

const MainDocknotes = (Props) =>{

    return(
        <div className={styles.main}>
            {/* Composant SearchBar */}
            <SearchBar/>
            <h2>Notes</h2>
            <div className={styles.flex}>
                {/* Nous créeons une note pour chaque élément du tableau notes (voir Docknotes.jsx (Props.notes)), en lui passant en Props la valeur "note" (qui est un élément du tableau notes) et une key avec l'index*/}
                {Props.notes.map((note, index) => <Notes key={index} data={note}/>)}
            </div>
        </div>
    )
}

export default MainDocknotes