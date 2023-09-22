import DotsColor from "./dotsColor/dotsColor"
import styles from "./NavbarDocknotes.module.scss"
import { Link } from "react-router-dom";

// Nous avons créer un tableau avec les différentes couleurs pour utiliser le map | Nous pouvons aussi écrire le composant "DotsColor" autant de fois que l'on souhait avec les couleurs
const color = [
    "#0aa4f6",
    "#f5972c",
    "#f3542a",
    "#c6d947",
    "#9f62f1"
]

const NavbarDocknotes = (Props) =>{
    return(
        <nav className={styles.navNotes}>
            <h1>Docknotes</h1>
            {/* 
            - Nous utilisons le map pour parcourir notre tableau color.
            - valeurDuTableauColor va prendre la valeur de chaque élément de mon tableau.
            - index va permettre de différencier chaque DotsColor (C'est une bonne pratique et c'est pour éviter l'erreur en console).

            - A que ittération du tableau, nous allons créer un composant "DotsColor" avec comme Props color avec la valeur de valeurDuTableauColor et une fonction qui corresponds à notre setNotes (voir Docknotes.jsx)
            */}
            {color.map((valeurDuTableauColor, index) => <DotsColor key={index} color={valeurDuTableauColor} fonction={Props.fonction}/>)}

            <div className={styles.back}>
                <Link to="/"> ◄ </Link>
            </div>
        </nav>
    )
}

export default NavbarDocknotes