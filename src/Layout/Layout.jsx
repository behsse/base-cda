// Import useLocation et Outlet de react-router-dom (Pour installer react-router-dom : pnpm install react-router-dom)
import {useLocation, Outlet} from 'react-router-dom'

// Import de deux composant (Home et Navbar) afin de pouvoir les utiliser dans ce composant
import Home from '../Pages/Home/Home'
import Navbar from './Navbar/Navbar'

const Layout = () => {

    // Création d'une const pathname avec le useLocation qui représente l'URL du navigateur
    const {pathname} = useLocation();

    return(
        <>
        {/* Nous appelons la Navbar dans le Layout pour qu'elle soit sur toutes nos pages */}
        <Navbar/>
        {/* Est ce que le pathname est égale à "/" ? Si oui affiche le composant Home, si non affiche le Outlet (le Outlet représente le composant appelé par la route (voir les paths dans le App.jsx)) | Nous appelons ceci un ternaire */}
        {pathname === "/" ? <Home/> : <Outlet/>}
        </>
    )
}

export default Layout