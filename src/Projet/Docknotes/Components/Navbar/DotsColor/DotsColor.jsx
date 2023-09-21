import { useState } from 'react'
import Notes from '../../Notes/Notes'
import styles from './DotsColor.module.scss'


const DotsColor = (Props) =>{

    const dateUpdate = () =>{
        let date = new Date()
        date = date.toDateString().split(" ");
        return `${date[1]} ${date[2]}, ${date[3]}`
    }

    const createNote = () =>{
        Props.fonction((curr) => [...curr, 
            {
                color: Props.color,
                defaultText: "This is a Docknotes note.",
                date: dateUpdate()
            }
        ])
    }

    return(
        <>
            <button className={`${styles.button}`} style={{backgroundColor : Props.color}} onClick={createNote}></button>
        </>
    )
}

export default DotsColor