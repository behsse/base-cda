import styles from './DotsColor.module.scss'


const DotsColor = (Props) =>{

    // Cette fonction permet uniquement d'obtenir la date afin de l'afficher en bas dans notre note.
    const dateUpdate = () =>{
        // Nous créeons une variable "date" qui va créer une nouvelle date
        let date = new Date()
        // Nous transformons la date en chaine de caractère sous ce format : Wed Jul 28 1993 14:39:07 GMT+0200 (CEST)
        // Le ".split(" ")" permet de récupérer chaque partie de la chaine de caractère, en enlevant les espaces et en les placant dans un tableau
        date = date.toDateString().split(" ");
        // Nous retournons sous chaine de caractère la date | Par exemple : Wed Jul 28 1993 14:39:07 GMT+0200 (CEST) ► Jul 28, 1993
        return `${date[1]} ${date[2]}, ${date[3]}`
    }

    // Cette fonction permet de créer une note.
    const createNote = () => {
        // Le Props.fonction est l'équivalant du setNotes (voir NavbarDocknotes.jsx).
        // Nous allons donc utiliser la syntaxe d'un setteur useState avec la variable current ( Qui permet de garder en mémoire les valeurs)
        Props.fonction((curr) => {
        // Créationb du nouvelle note avec la const "newNote"
          const newNote = {
            // On lui passe en paramètre la couleur (voir NavbarDocknotes.jsx)
            color: Props.color,
            // On lui passe un texte par défaut lors de la création de la note
            defaultText: "This is a Docknotes note.",
            // On lui donne la date en utilisant la fonction dateUpdate située plus haut
            date: dateUpdate(),
          };
          // Ajoute la nouvelle note au début du tableau en créant une copie afin d'avoir la note créer en premier dans notre liste de notes
          return [newNote, ...curr]; 
        });
      };
      

    return(
        <>
            {/* Avec ce bouton, nous mettons le background-color à la couleur du Props et on appèle la fonction createNote au click */}
            <button className={`${styles.button}`} style={{backgroundColor : Props.color}} onClick={createNote}></button>
        </>
    )
}

export default DotsColor