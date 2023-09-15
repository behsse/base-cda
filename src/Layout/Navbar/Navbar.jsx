// Import du Link de react-router-dom (Pour installer react-router-dom : pnpm install react-router-dom)
import { Link } from "react-router-dom";
import Logo from "../../Components/Logo/Logo"
import Items from "./Items/Items";
import styles from "./Navbar.module.scss";

const Navbar = () => {
    return(
        <>
        <Logo/>
        <nav>
            <ul>
                {/* Le Link ici remplace les balises <a/>, il permet tout comme les a de passer de page en page mais sans recharger votre application */}
                <li> <Link to="/"> Home </Link> </li>
                <li> <Link to="inscription"> Inscription </Link> </li>
                <Items text="About" path="about"/>
            </ul>
        </nav>
        </>
    )
}

export default Navbar