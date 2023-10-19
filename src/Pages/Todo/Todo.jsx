import { useEffect, useState } from "react";

const Todo = () => {
    const [todoList, setTodoList] = useState([])

    useEffect( () => {
        async function getTodo(){
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/todos");
                if (response.ok){
                    const todos = await response.json();
                    setTodoList(todos)
                } else{
                    console.log("Il y a eu une erreur");
                }
            } 
            catch (error){
                console.log(error);
            }
        }
        getTodo();
    }, [])

    return(
        <>
        {todoList.map((todo) => 
            <p key={todo.id}>{todo.title}</p>
        )}
        </>
    )
}
export default Todo;