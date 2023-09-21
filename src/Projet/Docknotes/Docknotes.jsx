import { useState } from "react";
import MainDocknotes from "./Components/MainDocknotes/MainDocknotes";
import NavbarDocknotes from "./Components/Navbar/NavbarDocknotes";
import styles from "./Docknotes.module.scss"

const Docknotes = () => {

    const [notes, setNotes] = useState([])

    return(
        <div className={styles.main}>
            <NavbarDocknotes fonction={setNotes}/>
            <MainDocknotes notes={notes}/>
        </div>
    )
}

export default Docknotes;