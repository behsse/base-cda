import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Inscription from './Pages/Inscription/Inscription'
import Layout from './Layout/Layout'
import Error from "./Pages/Error/Error"
import About from './Pages/About/About'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      errorElement: <Error/>,
      children:[
        {
          path: "/inscription",
          element: <Inscription/>,
          errorElement: <Error/>,
        },
        {
          path: "/about",
          element: <About/>,
          errorElement: <Error/>,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
