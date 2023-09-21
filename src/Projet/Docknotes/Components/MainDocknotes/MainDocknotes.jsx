import { useState } from "react"
import Notes from "../Notes/Notes"

const MainDocknotes = (Props) =>{

    return(
        <>
            {Props.notes.map((note, index)=> <Notes key={index} data={note}/>)}
        </>
    )
}

export default MainDocknotes