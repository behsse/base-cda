import styles from './Notes.module.scss'

const Notes = (Props) => {

    // Cette fonction permet simplement de voir en console le changement du textarea
    const change = () =>{
        console.log("changé !");
    }

    return(
        // Nous récupérons la couleur depuis MainDocknotes.jsx qui le récupère depuis DotsColor.jsx       c'est pourquoi nous avons le Props.data.color 
        // Props est le paramètre de ce composant 
        // data.color est l'élément passer en Props du composant MainDocknotes.jsx
        <div className={styles.notes} style={{backgroundColor : Props.data.color}}>
            {/* Nous récupérons de la même façons defaultText et date*/}
            <textarea cols="25" rows="8" defaultValue={Props.data.defaultText} onChange={change}></textarea>
            <p>{Props.data.date}</p>
        </div>
    )
}

export default Notes