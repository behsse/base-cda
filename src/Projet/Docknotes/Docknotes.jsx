import { useState } from "react";
import MainDocknotes from "./Components/MainDocknotes/MainDocknotes";
import NavbarDocknotes from "./Components/Navbar/NavbarDocknotes";
import styles from "./Docknotes.module.scss"

const Docknotes = () => {

    /* 
    Explication :

    - Dans le composant DotsColor.jsx nous créeons une note avec la fonction createNote(), ce qui fait appel à au setNotes grâce au "Props.fonction". Vu que nous avons fait appel au setNotes en lui donnant différentes valeurs (voir la fonction createNote()), nous modifions la valeur du tableau notes.

    - Ce tableau notes, nous allons l'envoyer dans notre composant MainDocknotes qui va créer des notes en fonctions du nombre d'éléments présent dans ce tableau

    */

    // Utilisation d'un useState avec un tableau vide par défaut
    const [notes, setNotes] = useState([])

    return(
        <div className={styles.main}>


            {/* 
            - Composant NavbarDocknotes du fichier NavbarDocknotes.jsx qui correspond à la barre de navigation.
            - On lui passe en Props le setteur "setNotes" du useState afin de pouvoir modifier la valeur de "notes" dans ce composant.    
            */}
            <NavbarDocknotes fonction={setNotes}/>


            {/* 
            - Composant MainDocknotes du fichier MainDocknotes.jsx qui correspond à l'endroit où nous trouvons nos notes.
            - On lui passe en Props "notes" afin de pouvoir récupérer sa valeur (Dans ce cas, un tableau)
            */}
            <MainDocknotes notes={notes}/>
        </div>
    )
}

export default Docknotes;