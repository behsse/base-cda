// Import du Link de react-router-dom (Pour installer react-router-dom : pnpm install react-router-dom)
import { Link } from "react-router-dom";
import Logo from "../../Components/Logo/Logo"
import Items from "./Items/Items";
import styles from "./Navbar.module.scss";

const Navbar = () => {
    return(
        <div className={styles.container}>
        <Logo/>
        <nav>
            <ul>
                {/* Le Link ici remplace les balises <a href="" />, il permet tout comme les a de passer de page en page mais sans recharger votre application */}
                <li> <Link to="/"> Home </Link> </li>
                <li> <Link to="inscription"> Inscription </Link> </li>

                {/* Nous passons des Props à notre composant Items, ici text et path (Voir l'utilisation dans Items.jsx) */}
                <Items text="About" path="about"/>


                <Items text="Docknotes" path="docknotes"/>
                <li> <Link to= "/todo">Todo</Link></li>
            </ul>
        </nav>
        </div>
    )
}

export default Navbar