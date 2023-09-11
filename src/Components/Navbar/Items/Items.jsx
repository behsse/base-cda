import styles from "./Items.module.scss";

const Items = (lien) => {
    return(
        <>
            <li>{lien.text}</li>
        </>
    )
}

export default Items