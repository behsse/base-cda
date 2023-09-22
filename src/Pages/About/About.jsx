import { useState, useEffect } from "react"
import Input from "../../Components/Input/Input"
import Like from "./like/like"

const About = () =>{

    const [title, setTitle] = useState("")
    const [toggle, setToggle] = useState("")

    useEffect(() => {
        // const h1 = document.querySelector("h1")
        // h1.style.color = title

        document.querySelector("h1").style.color = title
    }, [title])

    useEffect(()=>{
        document.querySelector("p").innerText = toggle
    }, [toggle])

    const handleClick = () =>{
        setToggle("toggleALED")
    }

    return(
        <>
            <h1>Page home</h1>
            <Input
                placeholder="Modifier mon titre"
                value={title}
                onChange={setTitle}
            />
            <button onClick={handleClick}>Click me</button>
            <p></p>
        </>
    )
}

export default About