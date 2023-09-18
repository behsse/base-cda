import { useState } from "react";
import styles from "./Home.module.scss";

const addition = (a, b) =>{
    return a + b
}


const Home = () =>{

    const [like, setLike] = useState(addition(1,2));

    const increment = () =>{
        setLike((curr) => curr + 1)
        setLike((curr) => curr + 1)
    }

    return(
        <>
            <h1 className={styles.main}>Home page</h1>
            <p>{like}</p>
            <button onClick={increment}>Counter : {like}</button>
        </>
    )
}

export default Home