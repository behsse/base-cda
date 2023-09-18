// On import le scss module avec une variable (souvent on appel cette variable "styles")
import styles from "./Inscription.module.scss";

const Inscription = () =>{
    return(
        <>
        {/* Pour les class :
            className = "main" : Utilisation d'un fichier css ou scss classique
            className = {styles.main} : Utilisation du scss module. On utilise la variable déclaré plus haut (style) et on donne le nom de la class après le point (main)
        */}
        <h1 className={styles.main}>Page inscription</h1>

        {/* Toute cette partie du code, nous permet de comprendre le scss module avec les class (avoir les mêmes class et pas le même style) */}
        <div className={styles.div}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium laboriosam atque itaque laborum blanditiis facere accusamus molestias nobis error deserunt earum, ratione adipisci incidunt sequi et? Assumenda reiciendis vitae aliquam?</p>
            {/* Nous avons ici une class "container" */}
            <div className={styles.container}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, sapiente.</p>
            </div>
        </div>
        {/* Mais une class container aussi ici */}
        <div className={styles.container}>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
        </>
    )
}
export default Inscription