import Notes from "../Notes/Notes"
import DotsColor from "./dotsColor/dotsColor"

const color = [
    "#0aa4f6",
    "#f5972c",
    "#f3542a",
    "#c6d947",
    "#9f62f1"
]

const NavbarDocknotes = (Props) =>{
    return(
        <nav>
            <h1>Docknotes</h1>
            {color.map((valeurDuTableauColor, index) => <DotsColor key={index} color={valeurDuTableauColor} fonction={Props.fonction}/>)}
        </nav>
    )
}

export default NavbarDocknotes