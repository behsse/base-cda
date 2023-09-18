import { Link } from "react-router-dom";
import styles from "./Items.module.scss";

// Nous avons en paramètre de cette fonction "Props" qui nous permet de récupérer les éléments passés (Voir Navbar.jsx (path et text))
const Items = (Props) => {
    return(
        <>
            {/* Nous avons créé un li avec un Link, le path récupéré depuis Navbar.jsx nous donne le lien et le text récupéré depuis Navbar.jsx nous affiche le texte de notre navbar */}
            <li> <Link to = {Props.path} > {Props.text} </Link> </li>
        </>
    )
}

export default Items