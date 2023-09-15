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
                <li> <Link to="/"> Home </Link> </li>
                <li> <Link to="inscription"> Inscription </Link> </li>
                <Items text="About" path="about"/>
            </ul>
        </nav>
        </>
    )
}

export default Navbar