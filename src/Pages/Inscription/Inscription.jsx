import styles from "./Inscription.module.scss";

const Inscription = () =>{
    return(
        <>
        <h1 className={styles.main}>Page inscription</h1>
        <div className={styles.div}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium laboriosam atque itaque laborum blanditiis facere accusamus molestias nobis error deserunt earum, ratione adipisci incidunt sequi et? Assumenda reiciendis vitae aliquam?</p>
            <div className={styles.container}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, sapiente.</p>
            </div>
        </div>
        <div className={styles.container}>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
        </>
    )
}
export default Inscription