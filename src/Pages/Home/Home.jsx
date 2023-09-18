import { useState } from "react";
import styles from "./Home.module.scss";

// Fonction addition qui prend en paramètre deux valeurs, cette fonction est utilisé pour l'exemple du useState avec la valeur par défaut
const addition = (a, b) =>{
    return a + b
}


const Home = () =>{

    /* 
    like : getteur (prend la valeur par défaut)
    setLike : setteur (permet de modifier like)
    addition(1,2) : valeur par défaut avec la fonction addition | La valeur par défaut peut être n'import quoi (0, 21, une fonction, ect...)

    On peut écrire la ligne suivante aussi comme ceci : 
    const [like, setLike] = useState(0) | La valeur par défaut est donc 0
    */
    const [like, setLike] = useState(addition(1,2));

    // Fonction incrément qui permet d'incrémenter de 1 la valeur de like comme on utilise setLike
    const increment = () =>{
        // curr (current) permet de garder en mémoire la valeur, on utilise le setteur setLike pour modifier la valeur de la variable, ici la variable est like
        setLike((curr) => curr + 1)
        // Avec la ligne d'avant nous avons incrémenté la valeur de like deux fois parce que le "curr" garde la valeur en mémoire
        setLike((curr) => curr + 1)

        /*
        Incrément like de 1 sans garder le résultat en mémoire

        setLike(like + 1)
        setLike(like + 1)

        Avec ces deux lignes plus haut, like ne s'incrémente pas de deux mais bien de 1
        */
    }

    return(
        <>
            <h1 className={styles.main}>Home page</h1>
            {/* On utilise l'écoute d'événement onClick pour faire une action lorsque le bouton est cliqué, ici on appel la fonction increment */}
            <button onClick={increment}>Counter : {like}</button>
        </>
    )
}

export default Home