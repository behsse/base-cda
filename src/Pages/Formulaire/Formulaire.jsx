import styles from "./Formulaire.module.scss";
// On import useForm de React Hook Form afin de créer un formulaire dynamique, c'est un nouveau Hooks
import {useForm} from "react-hook-form";

const Formulaire = () => {
    /* 
    Création d'une const avec plusieurs paramètres:
        - Des fonctions obligatoires :
            - handleSubmit pour sourmettre le formulaire
            - register pour récupérer les informations des champs du formulaire
        - Toutes fonctions utilisées dans notre formulaire
        - formState pour gérer les erreurs
    */
    const {handleSubmit, register, watch, formState : {errors}} = useForm();

    // Cette fonction permet d'exécuter du code lors de l'exécution du formulaire (voir le onSubmit du formulaire (ligne 23))
    const onSubmit = (data) =>{
        console.log(data);
    }

    return(
        <div>
            {/* Début du formulaire on exécute la fonction handleSubmit du useForm() qui éxecute la fonction onSubmit en ligne 16 */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Name :</label>

                    <input type="text" {...register("name", 
                    {
                        required : "Ce champs est requis.",
                        minLength: {
                            value: 3,
                            message: "Minimum 3 caractères."
                        },
                        maxLength: {
                            value: 10,
                            message: "Maximun 10 caractères."
                        }
                    }
                    )}/>
                    <p>{errors.name && errors.name.message}</p>
                </div>
                <div>
                    <label>Email :</label>
                    <input type="text" {...register("email",
                    {
                        pattern : {
                            value: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i,
                            message: "Adresse email invalide"
                        }
                    }
                    )}/>
                    <p>{errors.email && errors.email.message}</p>
                </div>
                <div>
                    <label>Password :</label>
                    <input type="password" {...register("password",
                    {
                        required : "Ce champs est requis.",
                    }                    
                    )}/>
                    <p>{errors.password && errors.password.message}</p>
                </div>
                <div>
                    <label>Confirm password :</label>
                    <input type="password" {...register("confirmPassword",
                    {
                        required : "Ce champs est requis.",
                        validate: (value) => value === watch("password") || "Les mots de passe ne correspondent pas"
                    }                     
                    )}/>
                    <p>{errors.confirmPassword && errors.confirmPassword.message}</p>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}
export default Formulaire