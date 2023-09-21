import styles from './Notes.module.scss'

const Notes = (Props) => {

    const change = () =>{
        console.log("changé !");
    }

    return(
        <div className={styles.notes} style={{backgroundColor : Props.data.color}}>
            <textarea cols="30" rows="10" defaultValue={Props.data.defaultText} onChange={change}></textarea>
            <p>{Props.data.date}</p>
        </div>
    )
}

export default Notes