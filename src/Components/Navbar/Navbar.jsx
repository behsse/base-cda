import Items from "./Items/Items";
import styles from "./Navbar.module.scss";

const Navbar = () => {
    return(
        <>
        <nav>
            <ul>
                <Items text="Home"/>
                <Items text="Info"/>
                <Items text="Inscription"/>
            </ul>
        </nav>
        </>
    )
}

export default Navbar